Ext.define('Report.controller.ReportCtrl', {
    extend: 'Ext.app.Controller',
    init: function () {
        this.control({
            'reportPanel button[action="save"]': {
                click: this.save
            },
            'reportPanel combo[action="comboType"]': {
                change: function (cmb) {
                    var tab = cmb.up('panel').up('panel').down('tabpanel');
                    var combo = cmb.up('panel').up('panel').down('combo[name="blankId"]');
                    var record = combo.up('form').getRecord();
                    if (cmb.getValue() == 'SIMPLE') {
                        tab.removeAll();
                        tab.add({xtype: 'columnPanel'}, {xtype: 'filterPanel'}, {xtype: 'chartPanel'})
                        combo.show();
                        tab.doLayout();
                        this.initSimpleGrid(record)
                        this.initChartGrid(record);
                    } else if (cmb.getValue() == 'QUERY') {
                        tab.removeAll();
                        combo.hide();
                        tab.add({xtype: 'reportQueryPanel'}, {xtype: 'reportParameterPanel'}, {xtype: 'chartPanel'})
                        tab.doLayout();
                        this.initQueryGrid(record);
                        this.initChartGrid(record);
                        this.initParameterGrid(record);
                    } else if (cmb.getValue() == 'JASPER') {
                        tab.removeAll();
                        combo.hide();
                        tab.add({xtype: 'reportFilePanel'}, {xtype: 'reportParameterPanel'});
                        this.initParameterGrid(record);
                        tab.doLayout();
                    }
                }
            },
            'reportTreePanel button[action="add"]': {
                click: this.add
            },
            'reportTreePanel button[action="delete"]': {
                click: this.delete
            },
            /*--------------------------*/
            'reportTreePanel': {
                itemclick: function (view, record) {
                    if (record.isLeaf()) {
                        this.edit(record.get('id'));
                    }
                },
                cellcontextmenu: function (grid, td, cellIndex, record, tr, rowIndex, e, eOpts) {
                    e.stopEvent();
                    if (!record.isLeaf()) {
                        var position = e.getXY();
                        var recordContextMenu = Ext.create('Report.view.ReportContextMenu');
                        if (record.isRoot()) recordContextMenu.down('menuitem[action="edit"]').setDisabled(true);
                        else recordContextMenu.down('menuitem[action="edit"]').setDisabled(false);
                        recordContextMenu.record = record;
                        recordContextMenu.showAt(position);
                    }
                }
            },
            'reportContextMenu menuitem': {
                click: function (item) {
                    var record = item.ownerCt.record;
                    this.editGroup(record, item.action == 'edit');
                }
            },
            'reportGroupWindow button[action="save"]': {
                click: function (btn) {
                    this.saveGroup(btn.up('window'));
                }
            },
            'reportTreePanel treeview': {
                drop: this.saveReportOrder
            },
            'combo[name="blankId"]': {
                change: this.blank
            },
            'questionGrid gridview': {
                beforedrop: function (node, data, overModel, dropPosition, dropHandlers) {
                    if (data.copy) {
                        dropHandlers.cancelDrop();
                    } else {
                        data.view.getStore().remove(data.records)
                        dropHandlers.cancelDrop();
                    }
                    this.getController('ReportColumnCtrl').validColumn();
                }
            },
            'reportQueryPanel button[action="check"]': {
                click: function (btn) {
                    var value = btn.up('reportQueryPanel').down('textareafield[name="query"]').getValue();
                    this.checkQuery(value);
                }
            }
        });
    },
    getMainPanel: function () {
        return Ext.ComponentQuery.query('#reportMainPanel')[0];
    },
    save: function (btn) {
        var me = this;
        var form = btn.up('form');
        if (form.getForm().isValid() && this.getController('ReportColumnCtrl').validColumn()) {
            var data = this.getFormData(form);
            if (data.type != 'JASPER') {
                Ext.Ajax.request({
                    url: '/report-mod/report/report.json',
                    jsonData: data,
                    success: function (response) {
                        var tree = Ext.ComponentQuery.query('reportTreePanel')[0];
                        tree.getStore().load();
                        var result = Ext.decode(response.responseText);
                        me.edit(result.data);
                    }
                });
            } else
                me.saveWithFile(form, data);
        }
    },
    saveWithFile: function (form, data) {
        var me = this;
        if (window.FormData) {
            var file = form.down('filefield').fileInputEl.dom.files[0];

            var formData = new FormData();

            formData.append('report', Ext.encode(data));
            formData.append('file', file);

            var xhr = new XMLHttpRequest();
            xhr.open('POST', '/report-mod/report/reportJasper.json', true);

            var progressBox = Ext.MessageBox.show({
                title: 'Мэдээлэл',
                msg: 'Хадгалаж байна',
                width: 300,
                progress: true
            });

            xhr.upload.addEventListener('progress', function (e) {
                var loaded = Math.ceil(e.loaded / e.total * 100);
                progressBox.updateProgress(loaded, 'Илгээж байна... ' + loaded + '%');
            }, false);

            xhr.onload = function () {
                progressBox.close();
                var response = xhr;
                if (xhr.status == 200) {
                    var tree = Ext.ComponentQuery.query('reportTreePanel')[0];
                    tree.getStore().load();
                    var result = Ext.decode(response.responseText);
                    me.edit(result.data);
                } else {
                    if (xhr.status == 500) {
                        var result = Ext.decode(response.responseText);
                        Ext.MessageBox.alert('Алдаа', result.message);
                    } else if (xhr.status == 401) {
                        var result = Ext.decode(response.responseText);
                        Ext.MessageBox.alert('Алдаа : <span style="color:red">' + response.status + '</span>', result.message, function () {
                            window.location = "/security/login.jsp"
                        });
                    } else {
                        Ext.MessageBox.alert('Алдаа : <span style="color:red">' + response.status + '</span>', response.statusText);
                    }
                }
            };

            xhr.send(formData);

        } else {
            Ext.MessageBox.alert('Алдаа', 'Таны Веб хөтөч хуучирсан тул уг үйлдлийг хийх боломжгүй байна!!!');
        }
    },
    saveGroup: function (win) {
        var form = win.down('form');
        if (form.getForm().isValid()) {
            var record = form.getRecord();
            record.set('name', form.down('textfield').getValue());
            var group = {
                id: record.get('id'),
                group: true,
                name: record.get('name'),
                parentId: record.get('parentId') == 0 ? null : record.get('parentId'),
                columns: [],
                filters: [],
                chartSerieses: [],
                parameters: []
            };

            Ext.Ajax.request({
                url: '/report-mod/report/report.json',
                jsonData: group,
                success: function () {
                    win.close();
                    var tree = Ext.ComponentQuery.query('reportTreePanel')[0];
                    tree.getStore().load();
                }
            });
        }
    },
    saveReportOrder: function () {

        var recurReport = function (report, children) {
            report.children = [];
            for (var i = 0; i < children.length; i++) {
                var node = children[i];
                report.children[i] = {
                    id: node.get('id')
                };
                recurReport(report.children[i], node.childNodes);
            }
        }

        var tree = Ext.ComponentQuery.query('reportTreePanel')[0];
        var reports = [];
        var rootNode = tree.getRootNode();
        for (var i = 0; i < rootNode.childNodes.length; i++) {
            var node = rootNode.childNodes[i];
            reports[i] = {
                id: node.get('id')
            };
            recurReport(reports[i], node.childNodes);
        }

        Ext.Ajax.request({
            url: '/report-mod/report/reports.json',
            method: 'post',
            jsonData: reports,
            success: function () {
                tree.getStore().load();
            }
        });

    },
    getFormData: function (form) {

        var record = form.getRecord();
        record.set(form.getValues());

        var queryField = form.up('panel').down('textarea[name="query"]');

        var associatedData = record.getAssociatedData();

        for (var i = 0; i < associatedData.filters.length; i++) {
            var filter = associatedData.filters[i];
            var recordData = filter.data;
            if (recordData == "") recordData = null;
            switch (filter.type) {
                case 'RESEARCH':
                    filter.researchId = recordData;
                    break;
                case 'CITY':
                    filter.cityId = recordData;
                    break;
                case 'DISTRICT':
                    filter.districtId = recordData;
                    break;
                default:
                    switch (filter.columnType) {
                        case 'SINGLE_CHOICE':
                        case 'MULTIPLE_CHOICE':
                            filter.choiceIds = recordData
                            break;
                        default:
                            filter.filter = recordData;
                            break;
                    }
                    break;
            }
        }

        for (var i = 0; i < associatedData.parameters.length; i++) {
            var parameter = associatedData.parameters[i];
            parameter.prompt = parameter.prompt ? true : false;

            switch (parameter.type) {
                case 'QUERY':
                    parameter.query = parameter.data;
                    break;
                case 'RESEARCH':
                    parameter.researchId = parameter.data;
                    break;
                case 'CITY':
                    parameter.cityId = parameter.data;
                    break;
                case 'DISTRICT':
                    parameter.districtId = parameter.data;
                    break;
            }
        }

        var data = {
            id: record.get('id'),
            name: form.down('textfield[name="name"]').getValue(),
            type: form.down('combo[name="type"]').getValue(),
            query: (queryField) ? queryField.getValue() : null,
            filterDistrict: form.down('checkbox[name="filterDistrict"]').getValue(),
            parentId: record.get('parentId'),
            blankId: record.get('blankId') == "" ? null : record.get('blankId'),
            chart: record.get('chart') == "" ? null : record.get('chart'),
            chartCategory: record.get('chartCategory') == "" ? null : record.get('chartCategory'),
            group: false,
            order: record.get('order'),
            columns: associatedData.columns,
            filters: associatedData.filters,
            chartSerieses: associatedData.chartSerieses,
            parameters: associatedData.parameters
        };

        return data;
    },
    edit: function (id, node) {
        var me = this;
        if (id != null) {
            Report.model.Report.load(id, {
                success: function (record) {
                    me.buildReportPanel(record);
                }
            });
        } else {
            var record = Ext.create('Report.model.Report');
            record.set('parentId', node.get('id') == 0 ? null : node.get('id'));
            record.set('parentName', node.get('name'));
            me.buildReportPanel(record);
        }
    },
    editGroup: function (record, edit) {
        var win = Ext.createWidget('reportGroupWindow');
        if (edit) {
            win.down('form').loadRecord(record);
        } else {
            var report = Ext.create('Report.model.Report');
            report.set('leaf', false);
            report.set('group', true);
            report.set('parentId', record.get('id') == 0 ? null : record.get('id'));
            win.down('form').loadRecord(report);
        }
    },
    buildReportPanel: function (record) {
        var mainPanel = this.getMainPanel();
        mainPanel.removeAll();
        var panel = Ext.create('Report.view.ReportPanel');
        panel.loadRecord(record);
        mainPanel.add(panel);
    },
    initSimpleGrid: function (record) {
        var columnGrid = Ext.ComponentQuery.query('columnPanel')[0].down('grid[action="columnGrid"]');
        columnGrid.reconfigure(record.columns());
        var filterGrid = Ext.ComponentQuery.query('filterPanel')[0].down('grid[action="filterGrid"]');
        record.filters().each(function (fRecord) {
            switch (fRecord.get('type')) {
                case 'RESEARCH':
                    fRecord.set('data', fRecord.get('researchId'));
                    break;
                case 'CITY':
                    fRecord.set('data', fRecord.get('cityId'));
                    break;
                case 'DISTRICT':
                    fRecord.set('data', fRecord.get('districtId'));
                    break;
                default:
                    switch (fRecord.get('columnType')) {
                        case 'SINGLE_CHOICE':
                        case 'MULTIPLE_CHOICE':
                            fRecord.set('data', fRecord.get('choiceIds'));
                            break;
                        default:
                            fRecord.set('data', fRecord.get('filter'));
                            break;
                    }
            }
        })
        filterGrid.reconfigure(record.filters());
    },
    initQueryGrid: function (record) {
        var queryColumnGrid = Ext.ComponentQuery.query('reportQueryPanel')[0].down('grid[action="queryColumnGrid"]');
        queryColumnGrid.reconfigure(record.columns());
    },
    initChartGrid: function (record) {
        var chartPanel = Ext.ComponentQuery.query('chartPanel')[0];
        var chartColumnGrid = chartPanel.down('grid[action="chartColumnGrid"]');
        chartColumnGrid.reconfigure(record.columns());
        var chartSeriesGrid = chartPanel.down('grid[action="chartSeriesGrid"]');
        chartSeriesGrid.reconfigure(record.chartSerieses());

        chartPanel.down('combo[name="chart"]').setValue(record.get('chart'));
        chartPanel.down('textfield[name="chartCategory"]').setValue(record.get('chartCategory'));
    },
    initParameterGrid: function (record) {
        var parameterPanel = Ext.ComponentQuery.query('reportParameterPanel')[0];
        record.parameters().each(function (record) {
            switch (record.get('type')) {
                case 'QUERY':
                    record.set('data', record.get('query'));
                    break;
                case 'RESEARCH':
                    record.set('data', record.get('researchId'));
                    break;
                case 'CITY':
                    record.set('data', record.get('cityId'));
                    break;
                case 'DISTRICT':
                    record.set('data', record.get('districtId'));
                    break;
            }
        });
        parameterPanel.reconfigure(record.parameters());
    },
    blank: function (cmb, value) {
        if (value)
            Report.model.Blank.load(value, {
                success: function (record) {
                    var grids = Ext.ComponentQuery.query('questionGrid');

                    var store = record.questions();
                    store.insert(0, [
                        Ext.create('Report.model.Question', {
                            code: '$R',
                            text: 'Судалгаа',
                            type: 'TEXT'
                        }),
                        Ext.create('Report.model.Question', {
                            code: '$C',
                            text: 'Хот/Аймаг',
                            type: 'TEXT'
                        }),
                        Ext.create('Report.model.Question', {
                            code: '$D',
                            text: 'Сум/Дүүрэг',
                            type: 'TEXT'
                        })
                    ]);

                    for (var i = 0; i < grids.length; i++) {
                        var grid = grids[i];
                        grid.reconfigure(store);
                    }
                }
            });
    },
    add: function () {
        var tree = Ext.ComponentQuery.query('reportTreePanel')[0];
        var nodes = tree.getSelectionModel().getSelection();
        if (nodes.length == 0) {
            nodes = [tree.getRootNode()];
        }
        this.edit(null, nodes[0]);
    },
    delete: function () {
        var me = this;
        var tree = Ext.ComponentQuery.query('reportTreePanel')[0];
        var nodes = tree.getSelectionModel().getSelection();
        if (nodes.length > 0) {
            Ext.MessageBox.confirm('Асуулт', 'Та устгах үйлдлийг хийхдээ итгэлтэй байна уу!!!', function (btn) {
                if (btn == 'yes') {
                    var data = [];
                    for (var i = 0; i < nodes.length; i++) {
                        var node = nodes[i];
                        data[i] = {
                            id: node.get('id')
                        };
                    }

                    Ext.Ajax.request({
                        url: '/report-mod/report/report.json',
                        method: 'delete',
                        jsonData: data,
                        success: function () {
                            me.getMainPanel().removeAll();
                            tree.getStore().load();
                        }
                    })
                }
            })
        } else {
            Ext.MessageBox.alert('Алдаа', 'Та устгах тайлангаа сонгоно уу!!!');
        }
    },
    checkQuery: function (query) {
        var formData = this.getFormData(Ext.ComponentQuery.query('reportPanel')[0]);
        Ext.Ajax.request({
            url: '/report-mod/report/report-query.json',
            method: 'post',
            jsonData: formData,
            success: function (response) {
                var columns = Ext.decode(response.responseText).data;
                var store = Ext.ComponentQuery.query('reportQueryPanel grid[action="queryColumnGrid"]')[0].getStore();

                for (var i = 0; i < columns.length; i++) {
                    var column = columns[i];
                    var mColumn = Ext.create('Report.model.Column');
                    mColumn.set('code', column.code);
                    mColumn.set('calcType', 'NORMAL');
                    mColumn.set('percent', false);
                    mColumn.set('type', null);
                    mColumn.set('filter', null);

                    var have = false;
                    store.each(function (record) {
                        if (record.get('code') == mColumn.get('code'))
                            have = true;
                    })

                    if (!have)
                        store.add(mColumn);
                }

                var rRecords = [];

                store.each(function (record) {
                    var remove = true;
                    for (var i = 0; i < columns.length; i++)
                        if (columns[i].code == record.get('code')) {
                            remove = false;
                            break;
                        }
                    if (remove)
                        rRecords[rRecords.length] = record;

                })

                store.remove(rRecords);
            }
        })
    }
});
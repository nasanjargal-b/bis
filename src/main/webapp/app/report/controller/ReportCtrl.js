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
                        tab.add({xtype: 'reportQueryPanel'}, {xtype: 'chartPanel'})
                        tab.doLayout();
                        this.initQueryGrid(record)
                        this.initChartGrid(record);
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
        var valid = true;
        if (form.getForm().isValid() && this.getController('ReportColumnCtrl').validColumn()) {
            var data = this.getFormData();
            form.mask('Хадгалаж байна...');
            Ext.Ajax.request({
                url: '/report-mod/report/report.json',
                jsonData: data,
                success: function (response) {
                    form.unmask();
                    var tree = Ext.ComponentQuery.query('reportTreePanel')[0];
                    tree.getStore().load();
                    var result = Ext.decode(response.responseText);
                    me.edit(result.data);
                },
                failure: function () {
                    form.unmask();
                }
            })
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
                chartSerieses: []
            };

            Ext.Ajax.request({
                url: '/report-mod/report/report.json',
                jsonData: group,
                success: function () {
                    win.close();
                    var tree = Ext.ComponentQuery.query('reportTreePanel')[0];
                    tree.getStore().load();
                }
            })
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
    getFormData: function () {
        var form = Ext.ComponentQuery.query('reportPanel')[0];
        var record = form.getRecord();
        record.set(form.getValues());
        var queryField = form.up('panel').down('textarea[name="query"]');
        var data = {
            id: record.get('id'),
            name: form.down('textfield[name="name"]').getValue(),
            type: form.down('combo[name="type"]').getValue(),
            query: (queryField) ? queryField.getValue() : null,
            parentId: record.get('parentId'),
            blankId: record.get('blankId') == "" ? null : record.get('blankId'),
            chart: record.get('chart') == "" ? null : record.get('chart'),
            chartCategory: record.get('chartCategory') == "" ? null : record.get('chartCategory'),
            group: false,
            order: record.get('order'),
            columns: [],
            filters: [],
            chartSerieses: []
        };

        record.columns().each(function (cRecord) {
            var column = {
                id: cRecord.get('id'),
                name: cRecord.get('name'),
                code: cRecord.get('code'),
                type: cRecord.get('type'),
                percent: cRecord.get('percent'),
                calcType: cRecord.get('calcType'),
                columnType: cRecord.get('columnType'),
                summaryType: cRecord.get('summaryType'),
                questionId: cRecord.get('questionId'),
                filter: cRecord.get('filter'),
                choiceId: cRecord.get('choiceId')
            };
            data.columns[data.columns.length] = column;
        });

        record.filters().each(function (fRecord) {
            var filter = {
                id: fRecord.get('id'),
                code: fRecord.get('code'),
                type: fRecord.get('type'),
                columnType: fRecord.get('columnType'),
                prompt: fRecord.get('prompt'),
                questionId: fRecord.get('questionId'),
                filter: null,
                researchId: null,
                cityId: null,
                districtId: null,
                choiceIds: null
            };

            var recordData = fRecord.get('data');
            if (recordData == "") recordData = null;

            switch (fRecord.get('type')) {
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
                    switch (fRecord.get('columnType')) {
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
            data.filters[data.filters.length] = filter;
        })

        record.chartSerieses().each(function (sRecord) {
            var series = {
                id: sRecord.get('id'),
                type: sRecord.get('type'),
                field: sRecord.get('field')
            };

            data.chartSerieses[data.chartSerieses.length] = series;
        });

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
        Ext.Ajax.request({
            url: '/report-mod/report/report-query.json',
            method: 'post',
            params: {
                query: query
            },
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
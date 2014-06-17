Ext.define('Report.controller.ReportCtrl', {
    extend: 'Ext.app.Controller',
    init: function () {
        this.control({
            'reportPanel checkbox[name="fileCheck"]': {
                change: function (checkbox) {
                    var filefield = checkbox.up('panel').down('filefield');
                    filefield.allowBlank = !checkbox.getValue();
                    filefield.clearInvalid();
                    filefield.setDisabled(!checkbox.getValue());
                }
            },
            'reportPanel button[action="save"]': {
                click: function (btn) {
                    var form = btn.up('form');
                    this.submit(form);
                }
            },
            'treepanel[alias="widget.groupTree"]': {
                itemclick: function (tree, record) {
                    var store = tree.up('reportGridPanel').down('grid').getStore();
                    store.load({
                        params: {
                            groupId: record.get('id')
                        }
                    });
                }
            },
            'treepanel[alias="widget.groupTree"] button': {
                click: function (btn) {
                    var tree = btn.up('treepanel');
                    var node = tree.getSelectionModel().getSelection()[0];
                    if (btn.action == 'add') {
                        node = node ? node : tree.getRootNode();
                        this.editGroup(node, Ext.create('Report.model.Group'));
                    } else if (btn.action == 'edit') {
                        if (node && !node.isRoot()) {
                            this.editGroup(node.parentNode, node);
                        } else {
                            Ext.MessageBox.alert('Алдаа', 'Та засах мөрөө сонгоно уу');
                        }
                    } else if (node && !node.isRoot()) {
                        this.deleteGroup(node)
                    } else {
                        Ext.MessageBox.alert('Алдаа', 'Та устгах мөрөө сонгоно уу');
                    }
                }
            },
            'treepanel[alias="widget.groupTree"] treeview': {
                beforedrop: function (node, data, overModel, dropPosition, dropHandlers) {
                    var me = this;
                    var records = data.records[0];
                    if (records.modelName == 'Report.model.Group') {
                        dropHandlers.processDrop();
                    } else {
                        if (overModel.get('id') != 0) {
                            var params = [];
                            for (var i = 0; i < data.records.length; i++) {
                                var record = data.records[i];
                                var reports = record.getData();
                                reports.groupId = overModel.get('id');
                                params[params.length] = reports;
                            }
                            Ext.Ajax.request({
                                url: '/report-mod/report/reports.json',
                                method: 'post',
                                jsonData: params,
                                success: function () {
                                    me.refreshReport();
                                }
                            })
                        }
                        dropHandlers.cancelDrop();
                    }
                },
                drop: function (node, data, parentNode) {
                    var record = data.records[0];
                    this.saveGroup(parentNode, record);
                }
            },
            'grid[alias="widget.reportGrid"] button': {
                click: function (btn) {
                    var grid = btn.up('grid');
                    var record = grid.getSelectionModel().getSelection()[0];
                    if (btn.action == 'add') {
                        var groupNode = btn.up('reportGridPanel').down('treepanel').getSelectionModel().getSelection()[0];
                        if (groupNode && !groupNode.isRoot()) {
                            var report = Ext.create('Report.model.Report');
                            report.set('reportGroupId', groupNode.get('id'));
                            report.set('reportGroupName', groupNode.get('name'));
                            this.editReport(report);
                        } else
                            Ext.MessageBox.alert('Алдаа', 'Та харьяалагдах тайлангын группыг сонгоно уу!!!');
                    } else if (record) {
                        this.deleteReport(record)
                    } else {
                        Ext.MessageBox.alert('Алдаа', 'Та устгах мөрөө сонгоно уу');
                    }
                }
            },
            'grid[alias="widget.reportGrid"]': {
                itemclick: function (view, record) {
                    var me = this;
                    Report.model.Report.load(record.get('id'), {
                        success: function (report) {
                            me.editReport(report);
                        }
                    });
                }
            },
            'grid[alias="widget.reportGrid"] gridview': {
                beforedrop: function (node, data, overModel, dropPosition, dropHandlers) {
                    dropHandlers.cancelDrop();
                }
            },
            'groupWindow button[action="save"]': {
                click: function (btn) {
                    var win = btn.up('window');
                    var form = win.down('form');
                    if (form.getForm().isValid()) {
                        var record = form.getRecord();
                        record.set(form.getValues());
                        record.set('text', record.get('name'));

                        this.saveGroup(win.parentNode, record, win);
                    }
                }
            }
        });
    },
    getMainPanel: function () {
        return Ext.ComponentQuery.query('#reportMainPanel')[0];
    },
    editGroup: function (parent, node) {
        var win = Ext.create('Report.view.GroupWindow');
        win.down('form').loadRecord(node);
        win.parentNode = parent;
        win.show();
    },
    deleteGroup: function (node) {
        var me = this;
        Ext.MessageBox.confirm('Асуулт', 'Та устгах үйлдлийг хийхдээ итгэлтэй байна уу?', function (btn) {
            if (btn == 'yes')
                Ext.Ajax.request({
                    url: '/report-mod/group/group/' + node.get('id') + '.json',
                    method: 'delete',
                    success: function () {
                        me.refreshGroup();
                        me.refreshReport(true);
                    }
                });
        });
    },
    saveGroup: function (parent, record, win) {
        var me = this;
        var data = {
            id: record.get('id'),
            name: record.get('name'),
            parentId: parent ? parent.get('id') : null
        };

        Ext.Ajax.request({
            url: '/report-mod/group/group.json',
            method: 'post',
            jsonData: data,
            success: function () {
                me.refreshGroup();
                if (win)
                    win.close();
            }
        });
    },
    refreshGroup: function () {
        var tree = Ext.ComponentQuery.query('reportGridPanel treepanel')[0];
        tree.reconfigure(Ext.create('Report.store.Group'));
    },
    editReport: function (record) {
        var mainPanel = this.getMainPanel();
        mainPanel.removeAll();
        var form = Ext.create('Report.view.ReportPanel');
        mainPanel.add(form);

        form.loadRecord(record);
        form.down('grid[action="queryGrid"]').reconfigure(record.queries());
        form.down('grid[action="paramGrid"]').reconfigure(record.params());
    },
    deleteReport: function (record) {
        var me = this;
        Ext.MessageBox.confirm('Асуулт', 'Та устгах үйлдлийг хийхдээ итгэлтэй байна уу?', function (btn) {
            if (btn == 'yes')
                Ext.Ajax.request({
                    url: '/report-mod/report/report/' + record.get('id') + '.json',
                    method: 'delete',
                    success: function () {
                        me.refreshReport();
                    }
                });
        });
    },
    refreshReport: function (clear) {
        var grid = Ext.ComponentQuery.query('reportGridPanel grid')[0];
        if(clear)
            grid.getStore().removeAll();
        else
        grid.getStore().reload();
    },
    submit: function (form) {
        var me = this;
        if (form.getForm().isValid()) {

            var data = {
                params: [],
                queries: []
            };
            form.down('grid[action="paramGrid"]').getStore().each(function (record) {
                data.params[data.params.length] = record.getData();
            });
            form.down('grid[action="queryGrid"]').getStore().each(function (record) {
                var query = record.getData();
                query.params = [];
                record.params().each(function (pRecord) {
                    query.params[query.params.length] = pRecord.getData();
                });
                data.queries[data.queries.length] = query;
            });

            var params = form.getValues();

            for (var i = 0; i < data.params.length; i++) {
                var param = data.params[i];
                params['params[' + i + '].id'] = param.id;
                params['params[' + i + '].name'] = param.name;
                params['params[' + i + '].label'] = param.label;
                params['params[' + i + '].type'] = param.type;
                params['params[' + i + '].query'] = param.query;
                params['params[' + i + '].order'] = param.order;
            }

            for (var i = 0; i < data.queries.length; i++) {
                var query = data.queries[i];
                params['queries[' + i + '].id'] = query.id;
                params['queries[' + i + '].query'] = query.query;
                params['queries[' + i + '].name'] = query.name;
                for (var j = 0; j < query.params.length; j++) {
                    var param = query.params[j];
                    params['queries[' + i + '].params[' + j + '].id'] = param.id;
                    params['queries[' + i + '].params[' + j + '].name'] = param.name;
                    params['queries[' + i + '].params[' + j + '].label'] = param.label;
                    params['queries[' + i + '].params[' + j + '].type'] = param.type;
                    params['queries[' + i + '].params[' + j + '].query'] = param.query;
                    params['queries[' + i + '].params[' + j + '].order'] = param.order;
                }
            }

            var xhr = new XMLHttpRequest();

            var fd = new FormData();

            for (var param in params) {
                var value = params[param];
                if (value != null)
                    fd.append(param, value);
            }

            var file = form.down('filefield').fileInputEl.dom.files[0];
            if (file)
                fd.append('file', file);

            xhr.open("POST", "/report-mod/report/report.json");

            var waitMsg;

            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    waitMsg.close();
                    if (xhr.status == 200) {
                        me.refreshReport();
                        me.getMainPanel().removeAll();
                    } else if (xhr.status == 500) {
                        var result = Ext.decode(xhr.responseText);
                        Ext.MessageBox.alert('Алдаа', result.message);
                    } else
                        Ext.MessageBox.alert('Алдаа : <span style="color:red">' + xhr.status + '</span>', xhr.statusText);
                }
            };

            waitMsg = Ext.MessageBox.wait("Файлыг илгээж байна...")
            xhr.send(fd);
        }
    }
});
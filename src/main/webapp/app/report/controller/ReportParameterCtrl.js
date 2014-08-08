Ext.define('Report.controller.ReportParameterCtrl', {
    extend: 'Ext.app.Controller',
    init: function () {
        this.control({
            'reportParameterPanel button[action="add"]': {
                click: function (btn) {
                    btn.up('grid').getStore().add(Ext.create('Report.model.Parameter'));
                }
            },
            'reportParameterPanel button[action="delete"]': {
                click: function (btn) {
                    var grid = btn.up('grid');
                    var store = grid.getStore();

                    var records = grid.getSelectionModel().getSelection();
                    if (records.length > 0) {
                        store.remove(records);
                    }

                }
            },
            'reportParameterPanel button[action="sql"]': {
                click: function (btn) {
                    var record = btn.up('reportParameterPanel').getSelectionModel().getSelection()[0];
                    if (record.get('type') == 'QUERY') {
                        var win = Ext.createWidget('queryWindow');
                        win.record = record;
                        win.down('textarea').setValue(record.get('data'));
                    } else {
                        this.showSqlBtn(false);
                    }
                }
            },
            'queryWindow button[action="save"]': {
                click: function (btn) {
                    var win = btn.up('window');
                    var query = win.down('textarea').getValue();
                    win.record.set('data', query);
                    win.close();
                }
            },
            'reportParameterPanel': {
                edit: function (editor) {
                    var record = editor.context.record;
                    if (record.get('type') == 'QUERY') {
                        this.showSqlBtn(true);
                    } else {
                        this.showSqlBtn(false);
                    }
                },
                itemclick: function (grid, record) {
                    if (record.get('type') == 'QUERY') {
                        this.showSqlBtn(true);
                    } else {
                        this.showSqlBtn(false);
                    }
                }
            }
        })
    },
    showSqlBtn: function (show) {
        var sqlBtn = Ext.ComponentQuery.query('reportParameterPanel')[0].down('button[action="sql"]');
        if (show) {
            sqlBtn.show();
        } else {
            sqlBtn.hide();
        }
    }
});
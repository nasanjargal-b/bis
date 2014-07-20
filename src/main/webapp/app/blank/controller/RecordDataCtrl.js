Ext.define('Blank.controller.RecordDataCtrl', {
    extend: 'Ext.app.Controller',
    init: function () {
        this.control({
            'recordGrid button[action="save"]': {
                click: this.save
            },
            'menuitem[action="delete"]': {
                click: this.delete
            },
            'menuitem[action="deleteAll"]': {
                click: this.deleteAll
            },
            'recordGrid button[action="refresh"]': {
                click: function () {
                    this.getRecordGrid().getStore().reload();
                }
            },
            'recordGrid': {
                afterrender: function (grid) {
                    var me = this;
                    grid.getStore().on('beforesync', function (options, eOpts) {
                        var records = [];
                        if (options.create)
                            for (var i = 0; i < options.create.length; i++) {
                                var record = options.create[i];
                                records.push(record);
                            }
                        if (options.update)
                            for (var i = 0; i < options.update.length; i++) {
                                var record = options.update[i];
                                records.push(record);
                            }
                        me.clearEmptyRecords(grid.getStore(), records);
                    })
                },
                edit: function (editor, e) {
                    var store = e.grid.getStore();
                    var record = e.record;

                    var isEmpty = true;
                    var isLast = (record == store.last());
                    var fields = store.model.getFields();
                    for (var i = 0; i < fields.length; i++) {
                        var field = fields[i];
                        var value = record.get(field.name);
                        if (value != '' && value != null) {
                            isEmpty = false;
                        }
                    }

                    if (isLast && !isEmpty) {
                        store.add({});
                    } else if (!isLast && isEmpty) {
                        store.remove(record);
                    }
                }
            },
            'recordGrid button[action="download"]': {
                click: this.download
            },
            'recordGrid button[action="upload"]': {
                click: function (btn) {
                    var recordGrid = btn.up('recordGrid');
                    var win = Ext.create('Blank.view.RecordUploadWindow');
                    win.down('form').getForm().setValues({
                        blankId: recordGrid.blankId,
                        researchId: recordGrid.researchId,
                        districtId: recordGrid.down('combo[name="district"]').getValue()
                    });
                    win.show();
                }
            },
            'recordUploadWindow button[action="upload"]': {
                click: this.upload
            }
        });
    },
    getRecordGrid: function () {
        var recordGrid = Ext.ComponentQuery.query('recordGrid')[0];
        return recordGrid;
    },
    findRecord: function (districtId) {
        var me = this;
        var store = this.getRecordGrid().getStore();
        store.getProxy().extraParams.districtId = districtId;
        store.load({
            callback: function () {
                me.getRecordGrid().getStore().add({});
            }
        });
    },
    clearEmptyRecords: function (store, records) {
        for (var i = 0; i < records.length; i++) {
            var record = records[i];
            var fields = store.model.getFields();
            for (var j = 0; j < fields.length; j++) {
                var field = fields[j];
                if (record.get(field.name) == '')
                    record.set(field.name, null);
            }
        }
    },
    save: function () {
        var store = this.getRecordGrid().getStore();
        store.sync({
            success: function () {
                store.reload();
            }
        });
    },
    delete: function (menuItem) {
        if (menuItem.record) {
            this.getRecordGrid().getStore().remove(menuItem.record);
        }
    },
    deleteAll: function (menuItem) {
//        if (menuItem.record) {
            this.getRecordGrid().getStore().removeAll();
//        }
    },
    download: function (btn) {
        var grid = btn.up('recordGrid');
        var blankId = grid.blankId;
        var districtId = grid.down('combo[name="district"]').getValue();
        var researchId = grid.researchId;

        window.location = '/blank-mod/record/file.xlsx?blankId=' + blankId + '&researchId=' + researchId + '&districtId=' + districtId;
    },
    upload: function (btn) {
        var form = btn.up('window').down('form');
        if (form.getForm().isValid()) {
            form.mask('Файлыг илгээж байна...');
            form.submit({
                success: function (f, action) {
                    form.unmask();
                    Ext.MessageBox.alert('Мэдээлэл', 'Амжилттай хуулагдлаа');
                },
                failure: function (f, action) {
                    form.unmask();
                    Ext.MessageBox.alert('Алдаа', action.result.message);
                }
            });
        }
    }
});
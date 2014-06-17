Ext.define('Report.controller.ParamCtrl', {
    extend: 'Ext.app.Controller',
    init: function () {
        this.control({
            'grid[action="paramGrid"] button[action="add"],grid[action="paramGrid"] button[action="edit"]': {
                click: function (btn) {
                    var grid = btn.up('grid');
                    var store = grid.getStore();
                    var selected = grid.getSelectionModel().getSelection()[0];
                    if (btn.action == 'add')
                        this.edit(store, Ext.create('Report.model.Param'), false);
                    else if (selected)
                        this.edit(store, selected, true);
                    else
                        Ext.MessageBox.alert('Алдаа', 'Засах мөрөө сонгоно уу!!!');

                }
            },
            'grid[action="paramGrid"]': {
                itemdblclick: function (view, record) {
                    this.edit(view.getStore(), record, true);
                }
            },
            'grid[action="paramGrid"] button[action="delete"]': {
                click: this.delete
            },
            'paramWindow button[action="save"]': {
                click: function (btn) {
                    var form = btn.up('window').down('form');
                    this.save(form);
                }
            },
            'paramWindow combo[name="type"]': {
                change: function (cmb, value) {
                    switch (value) {
                        case 'MULTIPLE_CHOICE':
                        case 'SINGLE_CHOICE':
                            cmb.up('form').down('textarea').setVisible(true);
                            break;
                        default:
                            cmb.up('form').down('textarea').setVisible(false);
                            break;
                    }
                }
            }
        });
    },
    edit: function (store, record, edit) {
        var win = Ext.create('Report.view.ParamWindow');
        win.store = store;
        win.edit = edit;
        win.down('form').loadRecord(record);
        win.show();
    },
    save: function (form) {
        var win = form.up('window');
        if (form.getForm().isValid()) {
            var record = form.getRecord();
            var values = form.getValues();
            record.set(values);
            if (!win.edit) {
                win.store.add(record);
            }
            form.up('window').close();
        }
    },
    delete: function (btn) {
        var grid = btn.up('grid');
        var store = grid.getStore();
        var selected = grid.getSelectionModel().getSelection()[0];
        if (selected)
            Ext.MessageBox.confirm('Асуулт', 'Та устгах үйлдлийг хийхдээ итгэлтэй байна уу?', function (cBtn) {
                if (cBtn == 'yes')
                    store.remove(selected);
            })
        else
            Ext.MessageBox.alert('Алдаа', 'Устгах мөрөө сонгоно уу!!!');
    }
});
Ext.define('Report.controller.QueryCtrl', {
    extend: 'Ext.app.Controller',
    init: function () {
        this.control({
            'textarea[name="query"]': {
                afterrender: function (textarea) {
                    var el = textarea.inputEl.dom;
                    var editor = CodeMirror.fromTextArea(el, {
                        mode: 'text/x-sql',
                        indentWithTabs: true,
                        smartIndent: true,
                        matchBrackets: true,
                        autofocus: true
                    });

                    editor.on('change', function (cm) {
                        textarea.setValue(editor.getValue());
                    })
                }
            },
            'grid[action="queryGrid"] button[action="add"],grid[action="queryGrid"] button[action="edit"]': {
                click: function (btn) {
                    var grid = btn.up('grid');
                    var store = grid.getStore();
                    var selected = grid.getSelectionModel().getSelection()[0];
                    if (btn.action == 'add')
                        this.edit(store, Ext.create('Report.model.Query'), false);
                    else if (selected)
                        this.edit(store, selected, true);
                    else
                        Ext.MessageBox.alert('Алдаа', 'Засах мөрөө сонгоно уу!!!');

                }
            },
            'grid[action="queryGrid"]': {
                itemdblclick: function (view, record) {
                    this.edit(view.getStore(), record, true);
                }
            },
            'grid[action="queryGrid"] button[action="delete"]': {
                click: this.delete
            },
            'queryWindow button[action="save"]': {
                click: function (btn) {
                    var form = btn.up('window').down('form');
                    this.save(form);
                }
            }
        });
    },
    edit: function (store, record, edit) {
        var win = Ext.create('Report.view.QueryWindow');
        win.store = store;
        win.edit = edit;
        win.down('form').loadRecord(record);
        win.down('grid').reconfigure(record.params());
        win.show();
    },
    save: function (form) {
        var win = form.up('window');
        if (form.getForm().isValid()) {
            var record = form.getRecord();
            var values = form.getValues();
            record.set(values);
            record.setDirty(true);

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
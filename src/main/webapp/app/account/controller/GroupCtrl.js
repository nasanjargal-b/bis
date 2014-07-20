Ext.define('Account.controller.GroupCtrl', {
    extend: 'Ext.app.Controller',
    models: ['Group'],
    stores: ['Groups'],
    views: ['GroupGrid', 'GroupPanel'],
    init: function () {
        this.control({
            'groupGrid gridview': {
                itemdblclick: this.edit
            },
            'groupGrid button[alias="edit"]': {
                click: function (btn) {
                    var grid = btn.up('grid');
                    var model = grid.getSelectionModel().getSelection()[0];
                    if (model) {
                        this.edit(grid, model);
                    } else {
                        Ext.MessageBox.alert("Алдаа", "Та засах мөрөө сонгоно уу?");
                    }
                }
            },
            'groupGrid component[action="search"]': {
                click: function (btn) {
                    var text = btn.up('grid').down('textfield[action="search"]').getValue();
                    this.search(text, btn)
                },
                keyup: function (field, e) {
                    if (e.getKey() == e.ENTER) {
                        this.search(field.getValue(), field)
                    }
                }
            },
            'groupGrid button[alias="add"]': {
                click: this.add
            },
            'groupGrid button[alias="delete"]': {
                click: this.delete
            },
            'groupPanel button[action="save"]': {
                click: this.save
            }
        });
    },
    edit: function (view, record) {
        var win = this.getGroupPanelView().create();
        win.down('form').loadRecord(record);

        var array = record.get('roles').split('\,');
        if (array.length > 0 && array[0]!="") {
            for (var obj in array) {
                var field = array[obj];
                win.down('checkboxfield[inputValue="' + field + '"]').setValue(1)
            }
        }
    },
    add: function () {
        var win = this.getGroupPanelView().create();
    },
    delete: function (btn) {
        var grid = Ext.ComponentQuery.query('groupGrid')[0];
        var model = grid.getSelectionModel().getSelection()[0];
        if (model) {
//           var form = this.getGroupModel().load(model);
            Ext.MessageBox.confirm('Асуулт', 'Та устгах үйлдэлийг хийхдээ итгэлтэй байна уу!!!<br/>' +
                '<span style="color: red;">Та устгах үйлдлийг хийснээр үүнтэй холбоотой бусад мэдээллүүд мөн устах болно гэдэгийг анхаарана уу.</span>', function (btn) {
                if (btn == 'yes')
                    Ext.Ajax.request({
                        url: '/account-mod/group/single.json?id=' + model.get('id'),
                        method: 'delete',
                        success: function () {
                            grid.getStore().reload();
                        }
                    });
            });
        } else {
            Ext.MessageBox.alert('Алдаа', 'Та устгах мөрөө сонгонуу?');
        }
    },
    save: function (btn) {
        var form = btn.up('window').down('form');
        if (form.getForm().isValid()) {
            form.getForm().submit({
                url: '/account-mod/group/single.json',
                method: 'post',
                success: function () {
                    btn.up('window').close();
                    var grid = Ext.ComponentQuery.query('groupGrid')[0];
                    grid.getStore().reload();
                }
            })
        }
    },
    search: function (text, btn) {
        btn.up('grid').getStore().reload({
            params: {
                text: text
            }
        })
    }
});
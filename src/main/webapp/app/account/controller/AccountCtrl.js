Ext.define('Account.controller.AccountCtrl', {
    extend: 'Ext.app.Controller',
    models: ['Account', 'Group'],
    stores: ['Accounts', 'Groups', 'Cities', 'Districts'],
    views: ['AccountGrid', 'AccountPanel'],
    init: function () {
        this.control({
            'accountGrid': {
                afterrender: function (grid) {
                    var combo = grid.down('combo[action="search"]');
                    combo.setValue('ACTIVE');
                    this.getAccountsStore().load({
                        params: {
                            text:'',
                            status:'ACTIVE'
                        }
                    })
                    this.getCitiesStore().load();
                }
            },
            'accountGrid gridview': {
                itemdblclick: this.edit
            },
            'accountGrid button[alias="edit"]': {
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
            'accountGrid button[alias="add"]': {
                click: this.add
            },
            'accountGrid component[action="search"]': {
                click: function (btn) {
                    var text = btn.up('grid').down('textfield[alias="searchText"]').getValue();
                    var combo = btn.up('grid').down('combo[alias="searchCombo"]').getValue();
                    this.search(text, btn,combo);
                },
                keyup: function (field, e) {
                    if (e.getKey() == e.ENTER) {
                        var combo = field.up('grid').down('combo[alias="searchCombo"]').getValue();
                        this.search(field.getValue(), field,combo);
                    }
                },
                select:function(combo){
                    var text = combo.up('grid').down('textfield[alias="searchText"]').getValue();
                    this.search(text, combo,combo.getValue());
                }
            },
            'accountPanel button[action="save"]': {
                click: this.save
            },
            'accountGrid button[alias="delete"]': {
                click: function (btn) {
                    var grid = btn.up('grid');
                    var me = this;
                    var model = grid.getSelectionModel().getSelection()[0];
                    if (model) {
                        Ext.MessageBox.confirm('Асуулт', 'Та устгах үйлдэлийг хийхдээ итгэлтэй байна уу!!!<br/>' +
                            '<span style="color: red;">Та устгах үйлдлийг хийснээр үүнтэй холбоотой бусад мэдээллүүд мөн устах болно гэдэгийг анхаарана уу.</span>', function (btn) {
                            if (btn == 'yes')
                                me.delete(model);
                        });
                    } else {
                        Ext.MessageBox.alert("Алдаа", "Та устгах мөрөө сонгоно уу?");
                    }
                }
            }
        });
    },
    add: function (btn) {
        var win = this.getAccountPanelView().create();
        var model = this.getAccountModel().create();
        win.down('form').load(model);
    },
    edit: function (view, record) {
        var win = this.getAccountPanelView().create();

        Account.model.Account.load(record.get('id'), {
            success: function (model) {
                win.down('form').loadRecord(model);
                var grid = win.down('grid');
                var array = new Array();
                var index = 0;
                model.groups().each(function (rex) {
                    array[index] = rex;
                    index++;
                })
                grid.getSelectionModel().select(array)
            }
        })
    },
    save: function (btn) {
        var form = btn.up('window').down('form');
        var grid = form.down('grid');
        var gridModels = grid.getSelectionModel().getSelection();
        var massive = new Array();
        var index = 0;
        for (var obj in gridModels) {
            var o = {
                id: gridModels[obj].data.id,
                description: gridModels[obj].data.description,
                name: gridModels[obj].data.name
            }
            massive[index] = o;
            index++;
        }
        var values = form.getForm().getValues();
        values.groups = massive;
        if (form.getForm().isValid()) {
            Ext.Ajax.request({
                url: '/account-mod/account/single.json',
                method: 'post',
                jsonData: values,
                success: function () {
                    btn.up('window').close();
                    var grid = Ext.ComponentQuery.query('accountGrid')[0];
                    grid.getStore().reload();
                }
            })
        }
    },
    delete: function (model) {
        var o = {
            id: model.get('id')
        }
        Ext.Ajax.request({
            url: '/account-mod/account/single.json',
            method: 'delete',
            jsonData: o,
            success: function () {
                var grid = Ext.ComponentQuery.query('accountGrid')[0];
                grid.getStore().reload();
            }
        })
    },
    search: function (text, btn,status) {
        btn.up('grid').getStore().reload({
            params: {
                text: text,
                status:status
            }
        })
    }
});
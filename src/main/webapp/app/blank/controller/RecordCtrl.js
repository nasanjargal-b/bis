Ext.define('Blank.controller.RecordCtrl', {
    extend: 'Ext.app.Controller',
    init: function () {
        this.control({
            'recordBlankGrid toolbar combo': {
                change: this.reloadBlanks,
                afterrender: function (cmb) { //todo delete
                    window.setTimeout(function () {
                        cmb.setValue(1);
                    }, 500)
                }
            },
            'recordBlankGrid gridview': {
                itemclick: function (view, record) {
                    var researchId = view.up('grid').down('combo').getValue();
                    var blankId = record.get('id');
                    this.reloadRecords(blankId, researchId);
                }
            },
            'grid[action="recordGrid"] combo[name="cityId"]': {
                change: function (cmb, value) {
                    var record = cmb.getStore().getById(value);
                    var districtCmb = cmb.up('toolbar').down('combo[name="districtId"]');
                    if (record)
                        districtCmb.bindStore(record.districts());
                    else
                        districtCmb.bindStore(Ext.create('Ext.data.ArrayStore'));
                    districtCmb.setValue(null);
                }
            },
            'grid[action="recordGrid"] component[action="search"]': {
                click: function (cmp) {
                    this.search(cmp.up('toolbar'));
                },
                keypress: function (cmp, e) {
                    if (e.keyCode == 13) this.search(cmp.up('toolbar'), false);
                }
            },
            'grid[action="recordGrid"] component[action="clear"]': {
                click: function (cmp) {
                    this.search(cmp.up('toolbar'), true);
                }
            },
            'grid[action="recordGrid"] button[action="add"]': {
                click: function (btn) {
                    var grid = btn.up('grid');
                    this.editRecord(grid.blankId, grid.researchId);
                }
            },
            'grid[action="recordGrid"] button[action="edit"]': {
                click: function (btn) {
                    var grid = btn.up('grid');
                    var record = grid.getSelectionModel().getSelection()[0];
                    if (record)
                        this.editRecord(grid.blankId, grid.researchId, record);
                    else
                        Ext.MessageBox.alert('Алдаа', 'Засах бичлэгийн мөрөө сонгоно уу!!!');
                }
            },
            'grid[action="recordGrid"] button[action="delete"]': {
                click: function (btn) {
                    var grid = btn.up('grid');
                    var records = grid.getSelectionModel().getSelection();
                    if (records && records.length > 0)
                        this.deleteRecord(grid.blankId, grid.researchId, records);
                    else
                        Ext.MessageBox.alert('Алдаа', 'Устгах бичлэгээ сонгоно уу!!!');
                }
            },
            'grid[action="recordGrid"]': {
                itemdblclick: function (view, record) {
                    var grid = view.up('grid');
                    this.editRecord(grid.blankId, grid.researchId, record);
                }
            },
            'window[action="recordWindow"] combo[name="cityId"]': {
                change: function (cmb, value) {
                    var record = cmb.getStore().getById(value);
                    var districtCmb = cmb.up('fieldset').down('combo[name="districtId"]');
                    if (record)
                        districtCmb.bindStore(record.districts());
                    else
                        districtCmb.bindStore(Ext.create('Ext.data.ArrayStore'));
                    districtCmb.setValue(null);
                }
            },
            'window[action="recordWindow"] button[action="save"]': {
                click: function (btn) {
                    this.save(btn.up('window'), false);
                }
            },
            'window[action="recordWindow"] button[action="saveNew"]': {
                click: function (btn) {
                    this.save(btn.up('window'), true);
                }
            }
        });
    },
    editRecord: function (blankId, researchId, record) {
        Ext.Ajax.request({
            url: '/blank-mod/record/edit.js',
            method: 'get',
            params: {
                blankId: blankId,
                researchId: researchId
            },
            success: function (response) {
                var win = eval(response.responseText);
                win.show();
                if (record) {
                    var form = win.down('form');

                    var data = record.get('data');
                    for (var key in  data) {
                        var cmp = form.down('component[name="' + key + '"]');
                        if (cmp.isXType('radiogroup') || cmp.isXType('checkboxgroup')) {
                            var obj = {};
                            obj[key] = data[key];
                            cmp.setValue(obj);
                        } else
                            cmp.setValue(data[key]);
                    }
                    form.loadRecord(record);
                }
            }
        });
    },
    reloadBlanks: function (cmb, value) {
        var record = cmb.getStore().getById(value);
        if (record.get('active'))
            cmb.setFieldStyle('color:green');
        else
            cmb.setFieldStyle('color:red');
        var me = this;//todo delete
        cmb.up('recordBlankGrid').getStore().load({
            params: {researchId: record.get('id')},
            callback: function (records) { //todo delete
                var blankId = records[1].get('id');
                me.reloadRecords(blankId, value);
            }
        });
    },
    reloadRecords: function (blankId, researchId) {
        Ext.Ajax.request({
            url: '/blank-mod/record/grid.js',
            method: 'get',
            params: {
                blankId: blankId,
                researchId: researchId
            },
            success: function (response) {
                var grid = eval(response.responseText);

                var mainPanel = Ext.ComponentQuery.query('#recordMainPanel')[0];
                mainPanel.removeAll()
                mainPanel.add(grid);
                var store = grid.getStore();
                store.getProxy().extraParams = {
                    blankId: blankId,
                    researchId: researchId
                };
                store.loadPage(1)

            }
        });
    },
    search: function (toolbar, clear) {

        var params = {
            blankId: toolbar.down('hidden[name="blankId"]').getValue(),
            researchId: toolbar.down('hidden[name="researchId"]').getValue()
        };

        if (clear) {
            toolbar.down('combo[name="cityId"]').setValue(null);
            toolbar.down('combo[name="districtId"]').setValue(null);
            toolbar.down('textfield[name="researcher"]').setValue(null);
            toolbar.down('datefield[name="createDate"]').setValue(null);
            toolbar.down('textfield[name="username"]').setValue(null);
        } else {
            if (toolbar.down('combo[name="cityId"]').getValue()) params.cityId = toolbar.down('combo[name="cityId"]').getValue();
            if (toolbar.down('combo[name="districtId"]').getValue()) params.districtId = toolbar.down('combo[name="districtId"]').getValue();
            if (toolbar.down('textfield[name="researcher"]').getValue()) params.researcher = toolbar.down('textfield[name="researcher"]').getValue();
            if (toolbar.down('datefield[name="createDate"]').getValue()) params.createDate = toolbar.down('datefield[name="createDate"]').getValue();
            if (toolbar.down('textfield[name="username"]').getValue()) params.username = toolbar.down('textfield[name="username"]').getValue();
        }
        var store = toolbar.up('grid').getStore();
        store.getProxy().extraParams = params;
        store.loadPage(1);
    },
    save: function (win, isNew) {
        var me = this;
        var form = win.down('form');
        if (form.getForm().isValid()) {

            var values = form.getValues();

            var record = {
                id: null,
                accountName: null,
                researchId: null,
                cityId: null,
                districtId: null,
                description: null,
                createDate: null,
                fillWorker: null,
                fillPosition: null,
                fillPhone: null,
                fillDate: null,
                researcher: null,
                accountName: null,
                cityName: null,
                districtName: null,
                data: {}
            };
            for (var key in record) {
                record[key] = values[key] == '' ? null : values[key];
                delete values[key];
            }

            for (var key in values) {
                values[key] = values[key] == '' ? null : values[key];
            }

            record.data = values;
            Ext.Ajax.request({
                url: '/blank-mod/record/record.json',
                method: 'post',
                jsonData: record,
                params: {
                    blankId: win.blankId,
                    researchId: win.researchId
                },
                success: function () {
                    var grid = Ext.ComponentQuery.query('grid[action="recordGrid"]')[0];
                    grid.getStore().reload();
                    grid.getSelectionModel().deselectAll();
                    win.close();
                    if (isNew) {
                        me.editRecord(win.blankId, win.researchId);
                    }
                }
            });
        }
    },
    deleteRecord: function (blankId, researchId, records) {
        var me = this;

        var ids = [];
        for (var i = 0; i < records.length; i++) {
            var record = records[i];
            ids[i] = record.get('id');
        }

        Ext.MessageBox.confirm('Асуулт', 'Та уг бичлэгийг устгахдаа итгэлтэй байна уу!!!', function (btn) {
            if (btn == 'yes')
                Ext.Ajax.request({
                    url: '/blank-mod/record/record.json',
                    method: 'delete',
                    jsonData: ids,
                    params: {
                        blankId: blankId,
                        researchId: researchId
                    },
                    success: function () {
                        var grid = Ext.ComponentQuery.query('grid[action="recordGrid"]')[0];
                        grid.getStore().reload();
                        grid.getSelectionModel().deselectAll();
                    }
                });
        })
    }
});
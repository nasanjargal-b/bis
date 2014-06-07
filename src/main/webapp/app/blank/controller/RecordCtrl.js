Ext.define('Blank.controller.RecordCtrl', {
    extend: 'Ext.app.Controller',
    init: function () {
        this.control({
            'recordBlankGrid toolbar combo': {
                change: this.reloadBlanks,
                afterrender: function (cmb) {
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
            }
        });
    },
    reloadBlanks: function (cmb, value) {
        var record = cmb.getStore().getById(value);
        if (record.get('active'))
            cmb.setFieldStyle('color:green');
        else
            cmb.setFieldStyle('color:red');
        cmb.up('recordBlankGrid').getStore().load({
            params: {researchId: record.get('id')}
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

                grid.getStore().load({
                    params: {
                        blankId: blankId,
                        researchId: researchId
                    }
                })

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

        toolbar.up('grid').getStore().load({
            params: params
        });
    }
});
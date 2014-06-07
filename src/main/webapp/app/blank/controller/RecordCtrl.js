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

    }
});
Ext.define('Blank.view.RecordUploadWindow', {
    extend: 'Ext.window.Window',
    title: 'Файл илгээх',
    layout: 'fit',
    width: 500,
    height: 118,
    alias: 'widget.recordUploadWindow',
    modal: true,
    border: false,
    items: {
        xtype: 'form',
        frame: true,
        method: 'post',
        url: '/blank-mod/record/file.json',
        defaults: {
            width: 480
        },
        items: [
            {
                xtype: 'hiddenfield',
                name: 'blankId'
            },
            {
                xtype: 'hiddenfield',
                name: 'researchId'
            },
            {
                xtype: 'hiddenfield',
                name: 'districtId'
            },
            {
                xtype: 'filefield',
                name: 'file',
                fieldLabel: 'Илгээх файл',
                allowBlank: false,
                listeners: {
                    change: function (fld, value) {
                        var newValue = value.replace(/C:\\fakepath\\/g, '');
                        fld.setRawValue(newValue);
                    }
                }
            },
            {
                xtype: 'numberfield',
                fieldLabel: 'Код агуулах мөр',
                name: 'codeRow',
                allowBlank: false,
                allowDecimals: false,
                value: 2
            }
        ]
    },
    buttons: [
        {
            text: 'Илгээх',
            icon: '/resources/images/upload-16px.png',
            action: 'upload'
        },
        {
            text: 'Болих',
            icon: '/resources/images/close-16px.png',
            handler: function (btn) {
                btn.up('window').close();
            }
        }
    ]
});
Ext.define('Report.view.GroupWindow', {
    extend: 'Ext.window.Window',
    title: 'Групп',
    layout: 'fit',
    modal: true,
    alias: 'widget.groupWindow',
    border: false,
    resizable: false,
    parentNode: null,
    items: {
        xtype: 'form',
        frame: true,
        defaults: {
            labelWidth: 90,
            width: 300
        },
        items: [
            {
                xtype: 'hiddenfield',
                name: 'id'
            },
            {
                xtype: 'hiddenfield',
                name: 'order'
            },
            {
                xtype: 'textfield',
                allowBlank: false,
                padding:'5 5 0 5',
                name: 'name',
                fieldLabel: 'Нэр'
            }
        ]
    },
    buttons: [
        {
            text: 'Хадгалах',
            icon: '/resources/images/save-16px.png',
            action: 'save'
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
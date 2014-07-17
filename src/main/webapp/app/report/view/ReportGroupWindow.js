Ext.define('Report.view.ReportGroupWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.reportGroupWindow',
    title: 'Групп',
    height: 91,
    width: 320,
    modal: true,
    autoShow: true,
    layout: 'fit',
    record: null,
    border: false,
    items: {
        xtype: 'form',
        frame: true,
        items: {
            xtype: 'textfield',
            name: 'name',
            allowBlank: false,
            width: 300,
            labelWidth: 100,
            fieldLabel: 'Группын нэр'
        }

    },
    buttons: [
        {
            text: 'Хадгалах',
            action: 'save',
            icon: '/resources/images/save-16px.png'
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
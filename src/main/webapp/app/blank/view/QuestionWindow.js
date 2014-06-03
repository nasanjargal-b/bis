Ext.define('Blank.view.QuestionWindow', {
    extend: 'Ext.window.Window',
    title: 'Асуулт',
    layout: 'fit',
    modal: true,
    alias: 'widget.questionWindow',
    parent: null,
    border: false,
    items: {
        xtype: 'form',
        frame: true,
        defaults: {
            labelWidth: 90,
            width: 350
        },
        items: [
            {
                xtype: 'textfield',
                allowBlank: false,
                name: 'id',
                fieldLabel: 'Асуултын код',
                regex: /^[A-Za-z]{1}[A-Za-z0-9]*$/i,
                maskRe: /^[A-Za-z0-9]$/i
            },
            {
                xtype: 'textarea',
                allowBlank: false,
                fieldLabel: 'Асуулт',
                name: 'text'
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
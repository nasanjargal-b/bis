Ext.define('Report.view.ParamWindow', {
    extend: 'Ext.window.Window',
    title: 'Параметер',
    layout: 'fit',
    modal: true,
    alias: 'widget.paramWindow',
    border: false,
    resizable: false,
    store: null,
    items: {
        xtype: 'form',
        frame: true,
        defaults: {
            labelWidth: 90,
            width: 500
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
                name: 'label',
                fieldLabel: 'Гарчиг'
            },
            {
                xtype: 'textfield',
                allowBlank: false,
                name: 'name',
                fieldLabel: 'Нэр'
            },
            {
                xtype: 'combo',
                allowBlank: false,
                name: 'type',
                fieldLabel: 'Төрөл',
                valueField: 'value',
                displayField: 'name',
                editable: false,
                store: Ext.create('Ext.data.Store', {
                    fields: ['value', 'name'],
                    data: [
                        {value: 'INTEGER', name: 'Бүхэл тоо'},
                        {value: 'DECIMAL', name: 'Бутархай тоо'},
                        {value: 'TEXT', name: 'Текст'},
                        {value: 'BOOLEAN', name: 'Тийм/Үгүй'},
                        {value: 'MULTIPLE_CHOICE', name: 'Олон сонголттой'},
                        {value: 'SINGLE_CHOICE', name: 'Нэг сонголттой'},
                        {value: 'CITY', name: 'Аймаг/Хот'},
                        {value: 'DISTRICT', name: 'Сум/Дүүрэг'}
                    ]
                })
            },
            {
                xtype: 'textarea',
                fieldLabel: 'Query',
                height: 300,
                name: 'query'
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
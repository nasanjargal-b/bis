Ext.define('Report.view.ReportPanel', {
    extend: 'Ext.form.Panel',
    alias: 'widget.reportPanel',
    title: 'Тайлан',
    layout: {
        type: 'border',
        padding: 5
    },
    dockedItems: {
        xtype: 'toolbar',
        items: [
            {
                text: 'Хадгалах',
                icon: '/resources/images/save-16px.png',
                action: 'save'
            },
            {
                text: 'Болих',
                icon: '/resources/images/close-16px.png',
                action: 'cancel'
            }
        ]
    },
    items: [
        {
            xtype: 'panel',
            region: 'north',
            bodyStyle: 'background-color:' + PANEL_COLOR + '',
            border: false,
            defaults: {
                labelWidth: 120,
                width: 500
            },
            items: [
                {
                    xtype: 'hiddenfield',
                    name: 'id'
                },
                {
                    xtype: 'hiddenfield',
                    name: 'parentId'
                },
                {
                    xtype: 'textfield',
                    name: 'name',
                    fieldLabel: 'Нэр',
                    allowBlank: false
                },
                {
                    xtype: 'textfield',
                    readOnly: true,
                    name: 'parentName',
                    fieldLabel: 'Групын нэр'
                },
                {
                    xtype: 'combo',
                    name: 'type',
                    action:'comboType',
                    query: 'local',
                    fieldLabel: 'Төрөл',
                    allowBlank: false,
                    valueField: 'id',
                    displayField: 'name',
                    editable: false,
                    store: Ext.create('Ext.data.Store', {
                        fields: ['id', 'name'],
                        data: [
                            { id: 'SIMPLE', name: 'Энгийн'},
                            { id: 'QUERY', name: 'Мэргэжлийн'}
                        ]
                    })
                },
                {
                    xtype: 'combo',
                    name: 'blankId',
                    hidden: true,
                    query: 'local',
                    fieldLabel: 'Анкет',
                    allowBlank: false,
                    valueField: 'id',
                    displayField: 'name',
                    editable: false,
                    store: 'Blanks'
                }
            ]
        },
        {
            xtype: 'tabpanel',
            region: 'center'
        }
    ]
});

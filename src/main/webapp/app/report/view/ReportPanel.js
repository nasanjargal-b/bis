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
            bodyStyle: 'background-color:#dfe9f6',
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
                    name: 'blankId',
                    query: 'local',
                    fieldLabel: 'Маягт',
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
            region: 'center',
            items: [
                {xtype: 'columnPanel'},
                {xtype: 'filterPanel'},
                {xtype: 'chartPanel'}
            ]
        }
    ]
});

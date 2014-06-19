Ext.define('Report.view.ParamPanel', {
    extend: 'Ext.form.Panel',
    title: 'Шүүлтүүр',
    alias: 'widget.paramPanel',
    bodyStyle: 'background-color:#dfe9f6',
    width: 400,
    dockedItems: {
        xtype: 'toolbar',
        items: [
            '->',
            {
                text: 'Хайх',
                icon: '/resources/images/search-16px.png',
                action: 'search'
            }
        ]
    },
    layout: {
        type: 'vbox',
        align: 'center',
        padding: 5
    },
    items: [
        {
            xtype: 'fieldset',
            title: 'Шүүх Query',
            width: '100%',
            items: {
                xtype: 'combo',
                displayField: 'name',
                action: 'query',
                name: 'queryId',
                valueField: 'id',
                queryMode: 'local',
                allowBlank: false,
                editable: false,
                width: 366,
                padding: '5 0 7 0',
                store: 'Queries'
            }
        }
    ]
});
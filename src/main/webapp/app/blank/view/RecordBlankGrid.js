Ext.define('Blank.view.RecordBlankGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.recordBlankGrid',
    title: 'Маягтын жагсаалт',
    width: 400,
    forceFit: true,
    dockedItems: [
        {
            xtype: 'toolbar',
            items: [
                '->',
                {
                    xtype: 'combo',
                    fieldLabel: 'Судагаа',
                    labelWidth: 50,
                    width: 390,
                    valueField: 'id',
                    tpl: '<tpl for=".">' +
                        '<tpl if="active == true">' +
                        '<div class="x-boundlist-item" style="color:green;">{year} - {description}</div>' +
                        '</tpl>' +
                        '<tpl if="active == false">' +
                        '<div class="x-boundlist-item" style="color:red;">{year} - {description}</div>' +
                        '</tpl>' +
                        '</tpl>',
                    displayTpl: '<tpl for=".">{year} - {description}</tpl>',
                    store: 'Researches'
                }
            ]
        }
    ],
    store: 'Blanks',
    features: [
        {
            ftype: 'grouping',
            groupHeaderTpl: '{name}'
        }
    ],
    columns: [
        {
            text: 'Маягтын код',
            width: 80,
            dataIndex: 'id'
        },
        {
            text: 'Маягтын Нэр',
            flex: 1,
            dataIndex: 'name'
        }
    ]
});

Ext.define('Blank.view.RecordBlankGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.recordBlankGrid',
    title: 'Анкетийн жагсаалт',
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
                    action:'research',
                    labelWidth: 50,
                    width: 390,
                    valueField: 'id',
                    queryMode: 'local',
                    tpl: '<tpl for=".">' +
                        '<tpl if="active == true">' +
                        '<div class="x-boundlist-item" style="color:green;">{year} - {name}</div>' +
                        '</tpl>' +
                        '<tpl if="active == false">' +
                        '<div class="x-boundlist-item" style="color:red;">{year} - {name}</div>' +
                        '</tpl>' +
                        '</tpl>',
                    displayTpl: '<tpl for=".">{year} - {name}</tpl>',
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
            text: 'Анкетийн код',
            width: 80,
            dataIndex: 'id'
        },
        {
            text: 'Анкетийн Нэр',
            flex: 1,
            dataIndex: 'name'
        }
    ]
});

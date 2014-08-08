Ext.define('Report.model.ChartSeries', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id', type: 'int', useNull: true},
        {name: 'type', type: 'string'},
        {name: 'field', type: 'string'}
    ]
})
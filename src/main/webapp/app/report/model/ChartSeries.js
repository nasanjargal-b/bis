Ext.define('Report.model.ChartSeries', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id', type: 'string'},
        {name: 'type', type: 'string'},
        {name: 'field', type: 'string'}
    ]
})
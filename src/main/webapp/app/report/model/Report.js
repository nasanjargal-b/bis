Ext.define('Report.model.Report', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id', type: 'int', useNull: true},
        {name: 'name', type: 'string', useNull: true},
        {name: 'text', type: 'string', mapping: 'name'},
        {name: 'parentId', type: 'int', useNull: true},
        {name: 'parentName', type: 'string', useNull: true},
        {name: 'blankId', type: 'string', useNull: true},
        {name: 'blankName', type: 'string', useNull: true},
        {name: 'group', type: 'boolean', useNull: true},
        {name: 'chart', type: 'string', useNull: true},
        {name: 'chartCategory', type: 'string', useNull: true},
        {name: 'order', type: 'int', useNull: true}
    ],
    hasMany: [
        {model: 'Report.model.Column', name: 'columns'},
        {model: 'Report.model.Filter', name: 'filters'},
        {model: 'Report.model.ChartSeries', name: 'chartSerieses'}
    ],
    proxy: {
        type: 'ajax',
        url: '/report-mod/report/report.json',
        reader: {
            type: 'json',
            root: 'data'
        }
    }
})
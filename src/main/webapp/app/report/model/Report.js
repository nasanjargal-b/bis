Ext.define('Report.model.Report', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id', type: 'int'},
        {name: 'name', type: 'string'},
        {name: 'reportGroupId', type: 'int'},
        {name: 'reportGroupName', type: 'string'},
        {name: 'order', type: 'int'}
    ],
    hasMany: [
        {model: 'Report.model.Param', name: 'params'},
        {model: 'Report.model.Query', name: 'queries'}
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
Ext.define('Report.model.Query', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id', type: 'int'},
        {name: 'name', type: 'string'},
        {name: 'query', type: 'string'}
    ],
    hasMany: {model: 'Report.model.Param', name: 'params'}
})
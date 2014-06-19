Ext.define('Report.model.City', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id', type: 'int'},
        {name: 'name', type: 'string'}
    ],
    hasMany: {model: 'Report.model.District', name: 'districts'}
})
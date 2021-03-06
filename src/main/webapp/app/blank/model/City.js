Ext.define('Blank.model.City', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id', type: 'int'},
        {name: 'name', type: 'string'}
    ],
    hasMany: {model: 'Blank.model.District', name: 'districts'}
})
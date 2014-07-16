Ext.define('Report.model.Question', {
    extend: 'Ext.data.TreeModel',
    fields: [
        {name: 'id', type: 'int', useNull: true},
        {name: 'code', type: 'string', useNull: true},
        {name: 'text', type: 'string', useNull: true},
        {name: 'type', type: 'string', useNull: true}
    ],
    hasMany: {model: 'Report.model.Choice', name: 'choices'}
})
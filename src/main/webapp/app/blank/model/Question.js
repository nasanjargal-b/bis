Ext.define('Blank.model.Question', {
    extend: 'Ext.data.TreeModel',
    fields: [
        {name: 'id', type: 'int', useNull: true},
        {name: 'code', type: 'string', useNull: true},
        {name: 'text', type: 'string', useNull: true},
        {name: 'type', type: 'string', useNull: true},
        {name: 'format', type: 'string', useNull: true},
        {name: 'order', type: 'int', useNull: true}
    ],
    hasMany: {model: 'Blank.model.Choice', name: 'choices'}
})
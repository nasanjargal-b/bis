Ext.define('Report.model.Filter', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id', type: 'int', useNull: true},
        {name: 'type', type: 'string', useNull: true},
        {name: 'prompt', type: 'boolean', useNull: true},
        {name: 'filter', type: 'string', useNull: true},
        {name: 'questionId', type: 'int', useNull: true}
    ],

    hasMany: [
        {model: 'Report.model.Choice', name: 'choices'},
        {model: 'Report.model.Choice', name: 'qChoices'}
    ]
})
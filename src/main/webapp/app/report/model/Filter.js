Ext.define('Report.model.Filter', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id', type: 'int', useNull: true},
        {name: 'code', type: 'string', useNull: true},
        {name: 'type', type: 'string', useNull: true},
        {name: 'columnType', type: 'string', useNull: true},
        {name: 'prompt', type: 'boolean', useNull: true},
        {name: 'filter', type: 'string', useNull: true},
        {name: 'questionId', type: 'int', useNull: true},
        {name: 'choiceIds', type: 'auto', useNull: true, defaultValue: []},
        {name: 'researchId', type: 'int', useNull: true},
        {name: 'cityId', type: 'int', useNull: true},
        {name: 'districtId', type: 'int', useNull: true},
        {name: 'data', type: 'auto', useNull: true}
    ],

    hasMany: [
        {model: 'Report.model.Choice', name: 'choices'}
    ]
})
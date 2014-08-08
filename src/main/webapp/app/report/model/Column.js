Ext.define('Report.model.Column', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id', type: 'int', useNull: true},
        {name: 'name', type: 'string', useNull: true},
        {name: 'type', type: 'string', useNull: true},
        {name: 'calcType', type: 'string', useNull: true},
        {name: 'columnType', type: 'string', useNull: true},
        {name: 'summaryType', type: 'string', useNull: true, defaultValue: null},
        {name: 'percent', type: 'boolean', useNull: true},
        {name: 'questionId', type: 'int', useNull: true},
        {name: 'code', type: 'string', useNull: true},
        {name: 'filter', type: 'string', useNull: true},
        {name: 'choiceId', type: 'int', useNull: true},
        {name: 'error', type: 'boolean', useNull: true},
        {name: 'errorMsg', type: 'string', useNull: true}
    ],

    hasMany: {model: 'Report.model.Choice', name: 'choices'}
})
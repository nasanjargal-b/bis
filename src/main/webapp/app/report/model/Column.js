Ext.define('Report.model.Column', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id', type: 'int', useNull: true},
        {name: 'name', type: 'string', useNull: true},
        {name: 'type', type: 'string', useNull: true},
        {name: 'calcType', type: 'string', useNull: true},
        {name: 'columnType', type: 'string', useNull: true},
        {name: 'questionId', type: 'int', useNull: true},
        {name: 'code', type: 'string', useNull: true},
        {name: 'filter', type: 'string', useNull: true},
        {name: 'choiceId', type: 'int', useNull: true}
    ]
})
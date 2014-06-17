Ext.define('Report.model.Param', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id', type: 'int'},
        {name: 'name', type: 'string'},
        {name: 'label', type: 'string'},
        {name: 'type', type: 'string'},
        {name: 'order', type: 'int'},
        {name: 'query', type: 'string', useNull: true}
    ]
})
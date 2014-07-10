Ext.define('Report.model.Choice', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id', type: 'int', useNull: true},
        {name: 'code', type: 'string', useNull: true},
        {name: 'text', type: 'string', useNull: true}
    ]
})
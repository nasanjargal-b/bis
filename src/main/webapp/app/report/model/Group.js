Ext.define('Report.model.Group', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id', type: 'int'},
        {name: 'name', type: 'string'},
        {name: 'text', type: 'string', mapping: 'name'},
        {name: 'parentId', type: 'int', useNull: true}
    ]
})

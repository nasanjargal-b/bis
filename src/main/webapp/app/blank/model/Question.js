Ext.define('Blank.model.Question', {
    extend: 'Ext.data.TreeModel',
    fields: [
        {name: 'id', type: 'string'},
        {name: 'text', type: 'string'},
        {name: 'name', type: 'string'},
        {name: 'group', type: 'boolean'},
        {name: 'grid', type: 'boolean'},
        {name: 'type', type: 'string', useNull: true},
        {name: 'choices', type: 'auto', useNull: true}
    ]
})
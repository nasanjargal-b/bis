Ext.define('Blank.model.Question', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id', type: 'string'},
        {name: 'text', type: 'string'},
        {name: 'name', type: 'string'},
        {name: 'group', type: 'boolean'},
        {name: 'grid', type: 'boolean'},
        {name: 'type', type: 'string', useNull: true},
        {name: 'choices', type: 'auto', useNull: true}
    ],
    proxy: {
        type: 'ajax',
        url: '/blank-mod/blank/blank.json',
        reader: {
            type: 'json',
            root: 'data'
        }
    }
})
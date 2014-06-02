Ext.define('Blank.model.Question', {
    extend: 'Ext.data.TreeModel',
    fields: [
        {name: 'id', type: 'string'},
        {name: 'text', type: 'string'},
        {name: 'group', type: 'boolean'},
        {name: 'type', type: 'string'},
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
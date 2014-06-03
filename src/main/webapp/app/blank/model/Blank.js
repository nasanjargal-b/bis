Ext.define('Blank.model.Blank', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id', type: 'string'},
        {name: 'name', type: 'string'},
        {name: 'blankGroupId', type: 'string'},
        {name: 'questions', type: 'auto'}
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
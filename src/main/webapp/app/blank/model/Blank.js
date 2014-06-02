Ext.define('Blank.model.Blank', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id', type: 'string'},
        {name: 'name', type: 'string'},
        {name: 'blankGroupId', type: 'string'}
    ],
    hasMany: {model: 'Blank.model.Question', name: 'questions'},
    proxy: {
        type: 'ajax',
        url: '/blank-mod/blank/blank.json',
        reader: {
            type: 'json',
            root: 'data'
        }
    }
})
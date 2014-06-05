Ext.define('Account.model.Group', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id', type: 'string'},
        {name: 'name', type: 'string'},
        {name: 'description', type: 'string'}
    ],
    hasMany: {model: 'Account.model.Blank', name: 'blanks'},
    proxy: {
        type: 'ajax',
        url: '/blank-mod/research/research.json',
        reader: {
            type: 'json',
            root: 'data'
        }
    }
})
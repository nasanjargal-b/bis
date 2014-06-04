Ext.define('Account.model.Group', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id', type: 'string'},
        {name: 'name', type: 'string'},
        {name: 'description', type: 'string'}
    ],
    proxy: {
        type: 'ajax',
        url: '/account-mod/group/single.json',
        reader: {
            type: 'json',
            root: 'data'
        }
    }
})
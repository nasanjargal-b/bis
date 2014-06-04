Ext.define('Account.store.Groups', {
    extend: 'Ext.data.Store',
    fields: [
        {name: 'id', type: 'string'},
        {name: 'name', type: 'string'},
        {name: 'roles', type: 'string'},
        {name: 'accountCount', type: 'int'},
        {name: 'description', type: 'string'}
    ],
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: '/account-mod/group/list.json',
        reader: {
            type: 'json',
            root: 'data'
        }
    }
});
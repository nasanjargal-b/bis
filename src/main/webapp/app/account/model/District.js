Ext.define('Account.model.District', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id', type: 'int'},
        {name: 'name', type: 'string'}
    ],
    proxy: {
        type: 'ajax',
        url: '/account-mod/account/district.json',
        reader: {
            type: 'json',
            root: 'data'
        }
    }
})
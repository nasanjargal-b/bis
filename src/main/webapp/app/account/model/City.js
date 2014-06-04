Ext.define('Account.model.City', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id', type: 'int'},
        {name: 'name', type: 'string'}
    ],
    hasMany: {model: 'Account.model.District', name: 'districts'},
    proxy: {
        type: 'ajax',
        url: '/account-mod/account/city.json',
        reader: {
            type: 'json',
            root: 'data'
        }
    }
})
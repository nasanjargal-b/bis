Ext.define('Account.model.Account', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id', type: 'int'},
        {name: 'username', type: 'string'},
        {name: 'password', type: 'string'},
        {name: 'name', type: 'string'},
        {name: 'gender', type: 'string'},
        {name: 'email', type: 'string'},
        {name: 'phone', type: 'string'},
        {name: 'status', type: 'string'},
        {name: 'address', type: 'string'},
        {name: 'cityId', type: 'int'},
        {name: 'districtId', type: 'int'}
    ],
    hasMany: {model: 'Account.model.Group', name: 'groups',foreignKey: 'accountId',
        primaryKey : 'id'},
    proxy: {
        type: 'ajax',
        url: '/account-mod/account/single.json',
        reader: {
            type: 'json',
            root: 'data'
        }
    }
})
Ext.define('Account.store.Accounts', {
    extend: 'Ext.data.Store',
    model:'Account.model.Account',
    autoLoad:false,
    proxy: {
        type: 'ajax',
        url: '/account-mod/account/list.json',
        reader: {
            type: 'json',
            root: 'data'
        }
    }
})
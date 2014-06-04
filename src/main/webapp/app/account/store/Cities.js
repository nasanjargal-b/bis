Ext.define('Account.store.Cities', {
    extend: 'Ext.data.Store',
    model:'Account.model.City',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: '/account-mod/account/city.json',
        reader: {
            type: 'json',
            root: 'data'
        }
    }
});
Ext.define('Account.store.Districts', {
    extend: 'Ext.data.Store',
    model:'Account.model.District',
    autoLoad: false,
    proxy: {
        type: 'ajax',
        url: '/account-mod/account/district.json',
        reader: {
            type: 'json',
            root: 'data'
        }
    }
});
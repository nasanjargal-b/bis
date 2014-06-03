Ext.define('Blank.store.Groups', {
    extend: 'Ext.data.Store',
    fields: [
        {name: 'id', type: 'string'},
        {name: 'name', type: 'string'}
    ],
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: '/blank-mod/blank/groups.json',
        reader: {
            type: 'json',
            root: 'data'
        }
    }
});
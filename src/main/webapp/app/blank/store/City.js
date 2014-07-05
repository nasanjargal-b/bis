Ext.define('Blank.store.City', {
    extend: 'Ext.data.Store',
    model:'Blank.model.City',
    autoLoad:true,
    proxy: {
        type: 'ajax',
        url: '/blank-mod/cities.json',
        reader: {
            type: 'json',
            root: 'data'
        }
    }
});
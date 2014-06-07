Ext.define('Blank.store.Record', {
    extend: 'Ext.data.Store',
    model: 'Blank.model.Record',
    proxy: {
        type: 'ajax',
        url: '/blank-mod/record/records.json',
        reader: {
            type: 'json',
            root: 'data'
        }
    }
});
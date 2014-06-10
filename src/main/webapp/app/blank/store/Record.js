Ext.define('Blank.store.Record', {
    extend: 'Ext.data.Store',
    model: 'Blank.model.Record',
    pageSize: 100,
    proxy: {
        type: 'ajax',
        url: '/blank-mod/record/records.json',
        reader: {
            type: 'json',
            root: 'data',
            totalProperty: 'total'
        }
    }
});
Ext.define('Report.store.City', {
    extend: 'Ext.data.Store',
    model: 'Report.model.City',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: '/report-mod/helper/cities.json',
        reader: {
            type: 'json',
            root: 'data'
        }
    }
});
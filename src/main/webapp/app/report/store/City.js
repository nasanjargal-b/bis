Ext.define('Report.store.City', {
    extend: 'Ext.data.Store',
    model: 'Report.model.City',
    autoLoad: false,
    proxy: {
        type: 'ajax',
        url: '/report-mod/report/view/cities.json',
        reader: {
            type: 'json',
            root: 'data'
        }
    }
});
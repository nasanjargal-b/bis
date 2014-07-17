Ext.define('Report.store.District', {
    extend: 'Ext.data.Store',
    model: 'Report.model.District',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: '/report-mod/helper/districts.json',
        reader: {
            type: 'json',
            root: 'data'
        }
    }
});
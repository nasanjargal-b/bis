Ext.define('Report.store.Research', {
    extend: 'Ext.data.Store',
    model: 'Report.model.Research',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: '/report-mod/helper/researches.json',
        reader: {
            type: 'json',
            root: 'data'
        }
    }
});
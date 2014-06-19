Ext.define('Report.store.Queries', {
    extend: 'Ext.data.Store',
    model: 'Report.model.Query',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: '/report-mod/report/view/queries.json?id=' + reportId,
        reader: {
            type: 'json',
            root: 'data'
        }
    }
});
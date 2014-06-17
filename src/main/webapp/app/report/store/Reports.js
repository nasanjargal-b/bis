Ext.define('Report.store.Reports', {
    extend: 'Ext.data.Store',
    fields: [
        {name: 'id', type: 'int'},
        {name: 'name', type: 'string'},
        {name: 'groupId', type: 'int'}
    ],
    autoLoad: false,
    proxy: {
        type: 'ajax',
        url: '/report-mod/report/reports.json',
        reader: {
            type: 'json',
            root: 'data'
        }
    }
});
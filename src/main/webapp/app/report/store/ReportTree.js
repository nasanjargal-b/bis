Ext.define('Report.store.ReportTree', {
    extend: 'Ext.data.TreeStore',
    fields: [
        {name: 'id', type: 'int'},
        {name: 'name', type: 'string'},
        {name: 'text', type: 'string', mapping: 'name'},
        {name: 'order', type: 'int'},
        {name: 'groupId', type: 'int', useNull: true}
    ],
    root: {
        id: 0,
        text: 'Үндсэн груп'
    },
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: '/report-mod/report/reports.json',
        reader: {
            type: 'json',
            root: 'data'
        }
    }
});
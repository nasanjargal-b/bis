Ext.define('Report.store.Blanks', {
    extend: 'Ext.data.Store',
    fields: [
        {name: 'id', type: 'string'},
        {name: 'name', type: 'string'}
    ],
    autoLoad: true,
    groupField: 'blankGroupName',
    proxy: {
        type: 'ajax',
        url: '/report-mod/blank/blanks.json',
        reader: {
            type: 'json',
            root: 'data'
        }
    }
});
Ext.define('Report.store.Group', {
    extend: 'Ext.data.TreeStore',
    model:'Report.model.Group',
    autoLoad: true,
    root: {
        id: 0,
        text: 'Үндсэн групп',
        parentId: null
    },
    proxy: {
        type: 'ajax',
        url: '/report-mod/group/groups.json',
        reader: {
            type: 'json',
            root: 'data'
        }
    }
});
Ext.define('Blank.store.Blanks', {
    extend: 'Ext.data.Store',
    fields: [
        {name: 'id', type: 'string'},
        {name: 'name', type: 'string'},
        {name: 'blankGroupName', type: 'string'}
    ],
    groupField: 'blankGroupName',
    proxy: {
        type: 'ajax',
        url: '/blank-mod/blank/blanks.json',
        reader: {
            type: 'json',
            root: 'data'
        }
    }
});
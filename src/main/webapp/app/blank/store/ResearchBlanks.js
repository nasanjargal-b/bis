Ext.define('Blank.store.ResearchBlanks', {
    extend: 'Ext.data.Store',
    fields: [
        {name: 'id', type: 'string'},
        {name: 'name', type: 'string'},
        {name: 'blankGroupName', type: 'string'}
    ],
    groupField: 'blankGroupName',
    autoLoad: true
});
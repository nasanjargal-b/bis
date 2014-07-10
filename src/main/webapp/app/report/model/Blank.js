Ext.define('Report.model.Blank', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id', type: 'string'},
        {name: 'name', type: 'string'}
    ],
    hasMany: {model: 'Report.model.Question', name: 'questions'},
    proxy: {
        type: 'ajax',
        url: '/report-mod/blank/blank.json',
        reader: {
            type: 'json',
            root: 'data'
        }
    }
})
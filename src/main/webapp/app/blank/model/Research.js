Ext.define('Blank.model.Research', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id', type: 'int',useNull:true},
        {name: 'year', type: 'int'},
        {name: 'startDate', type: 'date'},
        {name: 'active', type: 'boolean'},
        {name: 'description', type: 'text',useNull:true},
        {name: 'endDate', type: 'date'}
    ],
    proxy: {
        type: 'ajax',
        url: '/blank-mod/research/research.json',
        reader: {
            type: 'json',
            root: 'data'
        }
    }
})
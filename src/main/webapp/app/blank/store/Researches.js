Ext.define('Blank.store.Researches', {
    extend: 'Ext.data.Store',
    model:'Blank.model.Research',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: '/blank-mod/research/researches.json',
        reader: {
            type: 'json',
            root: 'data'
        }
    }
});
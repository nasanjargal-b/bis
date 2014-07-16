Ext.define('Blank.store.Questions', {
    extend: 'Ext.data.TreeStore',
    model: 'Blank.model.Question',
    autoLoad: false,
    root: {
        id: 0,
        code: 'ROOT',
        expanded: true
    },
    sorters: [
        {
            property: 'order',
            direction: 'ASC'
        }
    ],
    listeners: {
        load: function (store, node, records, successful, eOpts) {
            var treePanel = Ext.ComponentQuery.query('questionTreePanel')[0];
            if (treePanel)
                for (var i = 0; i < records.length; i++) {
                    var record = records[i];
                    if (!record.isLeaf())
                        treePanel.expandNode(record);
                }

        }
    },
    proxy: {
        type: 'ajax',
        url: '/blank-mod/blank/questions.json',
        extraParams: {
            blankId: null
        },
        reader: {
            type: 'json',
            root: 'data'
        }
    }
});
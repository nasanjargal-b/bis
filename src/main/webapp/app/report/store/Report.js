Ext.define('Report.store.Report', {
    extend: 'Ext.data.TreeStore',
    model: 'Report.model.Report',
    autoLoad: false,
    root: {
        id: 0,
        text: 'Тайлангууд',
        expanded: true
    },
    sorters: [
        {
            property: 'order',
            direction: 'ASC'
        }
    ],
    listeners: {
        load: function (store, node, records) {
            var treePanel = Ext.ComponentQuery.query('reportTreePanel')[0];
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
        url: '/report-mod/report/reports.json',
        reader: {
            type: 'json',
            root: 'data'
        }
    }
});
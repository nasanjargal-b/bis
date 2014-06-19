Ext.application({
    name: 'Report',
    controllers: ['ReportViewCtrl'],
    models: ['Query', 'City', 'District'],
    stores: ['Queries', 'City'],
    views: ['ParamPanel', 'ReportViewPanel'],
    appFolder: '/app/report',
    launch: function () {
        Ext.create('Ext.container.Viewport', {
            layout: 'border',
            items: [
                {
                    region: 'west',
                    xtype: 'paramPanel'
                },
                {
                    xtype: 'reportViewPanel',
                    itemId: 'reportMainPanel',
                    region: 'center'
                }
            ]
        });
    }
});
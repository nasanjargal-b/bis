Ext.application({
    name: 'Report',
    controllers: ['DashboardCtrl', 'ReportViewCtrl'],
    models: ['Report', 'City', 'District'],
    stores: ['Report', 'City'],
    views: ['ReportViewTreePanel', 'ReportViewWindow'],
    appFolder: '/app/report',
    launch: function () {
        Ext.create('Ext.container.Viewport', {
            layout: 'border',
            items: [
                {
                    width: 300,
                    xtype: 'reportViewTreePanel',
                    region: 'west',
                    title: 'Эрэлт, нийллүүлэлтийн тайлан',
                    collapsible: true,
                    collapsed: true
                },
                {
                    xtype: 'DashboardPanel',
                    border: false,
                    layout: 'fit',
                    region: 'center',
                    bodyStyle: 'background-color:' + PANEL_COLOR + ''
                }
            ]
        });
    }
});
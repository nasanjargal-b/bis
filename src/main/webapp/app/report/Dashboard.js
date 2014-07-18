Ext.application({
    name: 'Report',
    controllers: ['DashboardCtrl','ReportViewCtrl'],
    models: ['Report'],
    stores: ['Report'],
    views: ['ReportViewTreePanel', 'ReportViewWindow'],
    appFolder: '/app/report',
    launch: function () {
        Ext.create('Ext.container.Viewport', {
            layout: 'border',
            items: [
                {
                    xtype: 'DashboardPanel',
                    border: true,
                    layout: 'fit',
                    region: 'center',
                    bodyStyle: 'background-color:#dfe9f6'
                }
                ,
                {
                    border: false,
                    layout: 'fit',
                    height:'100%',
                    collapsible: true,
                    width:300,
                    xtype:'reportViewTreePanel',
                    region: 'west',
                    bodyStyle: 'background-color:white'
                }
            ]
        });
    }
});
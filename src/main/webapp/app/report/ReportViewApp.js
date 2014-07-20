Ext.application({
    name: 'Report',
    controllers: ['ReportViewCtrl'],
    models: ['Report'],
    stores: ['Report'],
    views: ['ReportViewTreePanel', 'ReportViewWindow'],
    appFolder: '/app/report',
    launch: function () {
        Ext.create('Ext.container.Viewport', {
            layout: 'border',
            items: [
                {
                    region: 'west',
                    xtype: 'reportViewTreePanel'
                },
                {
                    xtype: 'panel',
                    border: false,
                    itemId: 'reportViewMainPanel',
                    layout: 'fit',
                    region: 'center',
                    bodyStyle: 'background-color:'+PANEL_COLOR+''
                }
            ],
            renderTo: Ext.getBody('mainBody')
        });
    }
});
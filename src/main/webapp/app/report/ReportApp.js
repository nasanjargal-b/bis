Ext.application({
    name: 'Report',
    controllers: ['ReportCtrl', 'ParamCtrl', 'QueryCtrl'],
    models: ['Group','Report', 'Param', 'Query'],
    stores: ['Group', 'Reports'],
    views: ['ReportGridPanel', 'GroupWindow', 'ReportPanel', 'ParamWindow', 'QueryWindow'],
    appFolder: '/app/report',
    launch: function () {
        Ext.create('Ext.container.Viewport', {
            layout: 'border',
            items: [
                {
                    region: 'west',
                    xtype: 'reportGridPanel'
                },
                {
                    xtype: 'panel',
                    border: false,
                    itemId: 'reportMainPanel',
                    layout: 'fit',
                    region: 'center',
                    bodyStyle: 'background-color:#dfe9f6'
                }
            ]
        });
    }
});
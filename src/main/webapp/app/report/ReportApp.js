Ext.application({
    name: 'Report',
    controllers: ['ReportCtrl'],
    models: ['Report', 'Column', 'Choice', 'City', 'District', 'Blank', 'Question'],
    stores: ['Report', 'City', 'Blanks'],
    views: ['ReportTreePanel', 'ReportPanel', 'QuestionGrid', 'ColumnPanel', 'FilterPanel'],
    appFolder: '/app/report',
    launch: function () {
        Ext.create('Ext.container.Viewport', {
            layout: 'border',
            items: [
                {
                    region: 'west',
                    xtype: 'reportTreePanel'
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
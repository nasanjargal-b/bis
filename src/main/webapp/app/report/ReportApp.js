Ext.application({
    name: 'Report',
    controllers: ['ReportCtrl', 'ReportColumnCtrl'],
    models: ['Report', 'Column', 'Choice', 'City', 'District', 'Blank', 'Question', 'Filter'],
    stores: ['Report', 'City', 'Blanks'],
    views: ['ReportTreePanel', 'ReportPanel', 'QuestionGrid', 'ColumnPanel', 'FilterPanel', 'ChartPanel'],
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
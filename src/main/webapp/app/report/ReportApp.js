Ext.application({
    name: 'Report',
    controllers: ['ReportCtrl', 'ReportColumnCtrl', 'ReportFilterCtrl'],
    models: ['Report', 'Column', 'Choice', 'City', 'District', 'Research', 'Blank', 'Question', 'Filter'],
    stores: ['Report', 'City', 'District', 'Research', 'Blanks'],
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
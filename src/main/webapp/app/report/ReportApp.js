Ext.application({
    name: 'Report',
    controllers: ['ReportCtrl', 'ReportColumnCtrl', 'ReportFilterCtrl', 'ReportChartCtrl', 'ReportParameterCtrl'],
    models: ['Report', 'Column', 'Choice', 'City', 'District', 'Research', 'Blank', 'Question', 'Filter', 'ChartSeries', 'Parameter'],
    stores: ['Report', 'City', 'District', 'Research', 'Blanks'],
    views: ['ReportTreePanel', 'ReportPanel', 'QuestionGrid', 'ColumnPanel', 'FilterPanel', 'ChartPanel', 'ReportContextMenu', 'ReportGroupWindow', 'ReportQueryPanel', 'ReportFilePanel', 'ReportParameterPanel', 'QueryWindow'],
    appFolder: '/app/report',
    launch: function () {
        Ext.create('Ext.container.Viewport', {
            layout: 'border',
            items: [
                {
                    region: 'west',
                    xtype: 'reportTreePanel',
                    width:300
                },
                {
                    xtype: 'panel',
                    border: false,
                    itemId: 'reportMainPanel',
                    layout: 'fit',
                    region: 'center',
                    bodyStyle: 'background-color:' + PANEL_COLOR + ''
                }
            ]
        });
    }
});
Ext.define('Report.view.ReportFilePanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.reportFilePanel',
    title: 'Тайлан',
    bodyStyle: 'background-color:' + PANEL_COLOR + '',
    layout: {
        type: 'hbox',
        align: 'top',
        padding: 5
    },
    items: {
        xtype: 'filefield',
        flex:.5,
        fieldLabel: 'JasperReport'
    }
});

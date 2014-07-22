Ext.define('Report.view.ReportViewWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.reportViewWindow',
    width: 800,
    height: 600,
    modal: true,
    maximizable: true,
    autoShow: true,
    chart: null,
    layout: 'fit',
    dockedItems: {
        xtype: 'toolbar',
        items: [
            '->',
            /*{
             text: 'PDF',
             icon: '/resources/images/pdf-16px.png',
             data: 'PDF',
             action: 'download'
             },*/
            {
                text: 'Excel',
                icon: '/resources/images/excel-16px.png',
                data: 'XLSX',
                action: 'download'
            },
            {
                text: 'Doc',
                icon: '/resources/images/word-16px.png',
                data: 'DOCX',
                action: 'download'
            }
        ]
    }
});
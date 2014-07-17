Ext.define('Report.view.ReportViewWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.reportViewWindow',
    width: 800,
    height: 600,
    modal: true,
    autoShow: true,
    layout:'fit',
    dockedItems: {
        xtype: 'toolbar',
        items: [
            {
                text: 'Ахин ачааллах',
                icon: '/resources/images/refresh-16px.png',
                action: 'refresh'
            },
            '->',
            {
                text: 'PDF',
                icon: '/resources/images/pdf-16px.png',
                data: 'pdf',
                action: 'download'
            },
            {
                text: 'Excel',
                icon: '/resources/images/excel-16px.png',
                data: 'xlsx',
                action: 'download'
            },
            {
                text: 'Doc',
                icon: '/resources/images/word-16px.png',
                data: 'docx',
                action: 'download'
            }
        ]
    }
});
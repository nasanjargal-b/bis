Ext.define('Report.view.ReportViewPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.reportViewPanel',
    title: 'Тайлан',
    border: 'fit',
    params: null,
    dockedItems: {
        xtype: 'toolbar',
        items: [
            {
                icon: '/resources/images/refresh-16px.png',
                text: 'Ахин ачааллах',
                action: 'refresh'
            },
            '->',
            {
                icon: '/resources/images/printer-16px.png',
                text: 'Хэвлэх',
                action: 'print'
            },
            {
                icon: '/resources/images/excel-16px.png',
                text: 'Excel',
                action: 'download',
                data: 'XLSX'
            },
            {
                icon: '/resources/images/word-16px.png',
                text: 'Word',
                action: 'download',
                data: 'DOC'
            },
            {
                icon: '/resources/images/pdf-16px.png',
                text: 'PDF',
                action: 'download',
                data: 'PDF'
            }
        ]
    },
    items: {
        frame: false,
        border: false,
        xtype: 'component',
        id: 'reportFrame',
        autoEl: {
            tag: 'iframe',
            src: '',
            width: '100%',
            height: '100%'
        }
    }
});
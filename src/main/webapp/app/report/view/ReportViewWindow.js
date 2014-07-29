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
            {
                xtype: 'combo',
                fieldLabel: 'Аймаг/Хот',
                name: 'cityId',
                labelWidth: 55,
                hidden: true,
                queryMode: 'local',
                editable: false,
                padding: '0 10 0 0',
                store: 'City',
                displayField: 'name',
                valueField: 'id'
            },
            {
                xtype: 'combo',
                fieldLabel: 'Сум/Дүүрэг',
                queryMode: 'local',
                editable: false,
                name: 'districtId',
                labelWidth: 65,
                hidden: true,
                displayField: 'name',
                valueField: 'id'
            },
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
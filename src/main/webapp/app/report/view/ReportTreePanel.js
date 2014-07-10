Ext.define('Report.view.ReportTreePanel', {
    extend: 'Ext.tree.Panel',
    alias: 'widget.reportTreePanel',
    title: 'Тайлангын жагсаалт',
    width: 400,
    dockedItems: [
        {
            xtype: 'toolbar',
            items: [
                {
                    text: 'Нэмэх',
                    icon: '/resources/images/add-16px.png',
                    action: 'add'

                },
                {
                    text: 'Устгах',
                    icon: '/resources/images/delete-16px.png',
                    action: 'delete'
                }
            ]
        }
    ],
    store: 'Report'
});

Ext.define('Report.view.ReportContextMenu', {
    extend: 'Ext.menu.Menu',
    alias:'widget.reportContextMenu',
    record: null,
    items: [
        {
            text: 'Групп нэмэх',
            action: 'add',
            icon: '/resources/images/add-16px.png'
        },
        {
            text: 'Групп засах',
            action: 'edit',
            icon: '/resources/images/edit-16px.png'
        }
    ]
});

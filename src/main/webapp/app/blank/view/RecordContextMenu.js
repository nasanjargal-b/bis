Ext.define('Blank.view.RecordContextMenu', {
    extend: 'Ext.menu.Menu',
    items: [
        {
            text: 'Устгах',
            action: 'delete',
            icon: '/resources/images/delete-16px.png',
            record: null
        },
        {
            text: 'Бүгдийн устгах',
            action: 'deleteAll',
            icon: '/resources/images/delete-16px.png',
            record: null
        }
    ]
});

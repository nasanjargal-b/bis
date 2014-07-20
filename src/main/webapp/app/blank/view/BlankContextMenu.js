Ext.define('Blank.view.BlankContextMenu', {
    extend: 'Ext.menu.Menu',
    items: [
        {
            text: 'Шинээр үүсгэх',
            action: 'add',
            icon: '/resources/images/add-16px.png',
            record: null
        }
    ]
});

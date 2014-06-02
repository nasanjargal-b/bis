Ext.application({
    name: 'MainApp',
    appFolder: '/app/main',
    launch: function () {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: {
                xtype: 'panel',
                title: 'MainApp'
            }
        });
    }
});
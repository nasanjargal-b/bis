Ext.application({
    name: 'MainApp',
    appFolder: '/app/main',
    controllers: ['MainCtrl'],
    launch: function () {
        Ext.create('Ext.container.Viewport', {
            action:'mainViewport',
            layout: 'border',
            items: [
                /*{
                    xtype: 'mainPanel',
                    itemId: 'main',
                    region: 'north'
                },*/
                {
                    region: 'center',
                    xtype: 'component',
                    style: 'background:#ffffff; border:1px solid #99bce8;',
                    id: 'mainFrame',
                    autoEl: {
                        tag: 'iframe',
                        frameBorder: '0',
                        name: 'mainFrame'
                    }
                }
            ]
        });
    }
});
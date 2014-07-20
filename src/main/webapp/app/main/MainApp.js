Ext.application({
    name: 'MainApp',
    appFolder: '/app/main',
    controllers: ['MainCtrl'],
    launch: function () {
        Ext.create('Ext.container.Viewport', {
            action: 'mainViewport',
            layout: 'border',
            items: [
                {
                    region: 'center',
                    xtype: 'component',
                    style: 'background:#ffffff; border:1px solid '+BORDER_COLOR+';',
                    id: 'mainFrame',
                    autoEl: {
                        tag: 'iframe',
                        frameBorder: '0',
                        name: 'mainFrame',
                        src: '/dashboard.jsp'
                    }
                }
            ]
        });
    }
});
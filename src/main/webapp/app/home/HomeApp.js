Ext.application({
    name: 'Home',
    controllers: ['HomeCtrl'],
    views: ['HomePanel'],
    appFolder: '/app/home',
    launch: function () {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: {xtype: 'homePanel'},
            renderTo: Ext.getBody()
        });
    }
});
Ext.application({
    name: 'Dashboard',
    controllers: ['DashboardCtrl'],
    appFolder: '/app/dashboard',
    launch: function () {
        Ext.create('Ext.container.Viewport', {
            layout: 'border',
            items: [
                {
                    xtype: 'DashboardPanel',
                    border: false,
                    layout: 'fit',
                    region: 'center',
                    bodyStyle: 'background-color:#dfe9f6'
                }
//                ,
//                {
//                    border: false,
//                    layout: 'fit',
//                    region: 'west',
//                    bodyStyle: 'background-color:#dfe9f6'
//                }
            ]
        });
    }
});
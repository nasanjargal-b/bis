Ext.application({
    name: 'Account',
    controllers: ['GroupCtrl'],
    appFolder: '/app/account',
    launch: function () {
        Ext.create('Ext.container.Viewport', {
            layout: 'border',
            items: [
//                {
//                    xtype: 'groupGrid',
//                    region: 'west'
//                },
                {
                    xtype: 'groupGrid',
                    border: false,
//                    itemId: 'blankMainPanel',
                    layout: 'fit',
                    region: 'center'
                }
            ]
        });
    }
});
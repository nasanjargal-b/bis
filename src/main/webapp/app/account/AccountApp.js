Ext.application({
    name: 'Account',
    controllers: ['AccountCtrl'],
    appFolder: '/app/account',
    launch: function () {
        Ext.create('Ext.container.Viewport', {
            layout: 'border',
            items: [

                {
                    xtype: 'accountGrid',
                    border: false,
                    layout: 'fit',
                    region: 'center'
                }
            ]
        });
    }
});
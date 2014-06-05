Ext.application({
    name: 'Blank',
    controllers: ['ResearchCtrl'],
    appFolder: '/app/blank',
    launch: function () {
        Ext.create('Ext.container.Viewport', {
            layout: 'border',
            items: [
                {
                    xtype: 'researchGrid',
                    region: 'west'
                },
                {
                    xtype: 'researchPanel',
                    border: false,
                    layout: 'fit',
                    region: 'center',
                    bodyStyle: 'background-color:#dfe9f6'
                }
            ]
        });
    }
});
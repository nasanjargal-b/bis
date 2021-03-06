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
                    xtype: 'panel',
                    border: false,
                    itemId: 'researchMainPanel',
                    layout: 'fit',
                    region: 'center',
                    bodyStyle: 'background-color:'+PANEL_COLOR+''
                }
            ]
        });
    }
});
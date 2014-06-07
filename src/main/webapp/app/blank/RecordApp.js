Ext.application({
    name: 'Blank',
    controllers: ['RecordCtrl'],
    models: ['Record','Research'],
    stores: ['Blanks', 'Researches', 'Record'],
    views: ['RecordBlankGrid'],
    appFolder: '/app/blank',
    launch: function () {
        Ext.create('Ext.container.Viewport', {
            layout: 'border',
            items: [
                {
                    xtype: 'recordBlankGrid',
                    region: 'west'
                },
                {
                    xtype: 'panel',
                    border: false,
                    itemId: 'recordMainPanel',
                    layout: 'fit',
                    region: 'center',
                    bodyStyle: 'background-color:#dfe9f6'
                }
            ]
        });
    }
});
Ext.application({
    name: 'Blank',
    controllers: ['RecordCtrl', 'RecordFileCtrl'],
    models: ['Record', 'Research', 'City', 'District'],
    stores: ['Blanks', 'Researches', 'Record', 'City'],
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
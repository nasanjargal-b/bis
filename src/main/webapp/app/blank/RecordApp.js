Ext.application({
    name: 'Blank',
    controllers: ['RecordCtrl', 'RecordDataCtrl'],
    models: ['Research', 'City', 'District'],
    stores: ['Researches', 'Blanks', 'City'],
    views: ['RecordBlankGrid', 'RecordGrid', 'RecordContextMenu', 'RecordUploadWindow'],
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
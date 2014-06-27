Ext.application({
    name: 'Blank',
    controllers: ['BlankCtrl', 'QuestionCtrl'],
    models: ['Blank', 'Question', 'Choice'],
    stores: ['Blanks', 'Groups', 'Questions'],
    views: ['BlankGrid', 'BlankPanel', 'QuestionTreePanel', 'ChoiceWindow'],
    appFolder: '/app/blank',
    launch: function () {
        Ext.create('Ext.container.Viewport', {
            layout: 'border',
            items: [
                {
                    xtype: 'blankGrid',
                    region: 'west'
                },
                {
                    xtype: 'panel',
                    border: false,
                    itemId: 'blankMainPanel',
                    layout: 'fit',
                    region: 'center',
                    bodyStyle: 'background-color:#dfe9f6'
                }
            ]
        });
    }
});
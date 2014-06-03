Ext.application({
    name: 'Blank',
    controllers: ['BlankCtrl', 'QuestionCtrl', 'QuestionMenuCtrl'],
    models: ['Blank', 'Question'],
    stores: ['Blanks', 'Groups'],
    views: ['BlankGrid', 'BlankPanel', 'QuestionWindow', 'ChoiceGrid'],
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
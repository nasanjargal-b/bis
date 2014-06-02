Ext.define('Blank.controller.BlankCtrl', {
    extend: 'Ext.app.Controller',
    models: ['Blank', 'Question'],
    stores: ['Blanks'],
    views: ['BlankGrid', 'BlankPanel'],
    init: function () {
        this.control({
            'blankGrid gridview': {
                itemclick: this.editBlank
            }
        });
    },
    getMainPanel: function () {
        return Ext.ComponentQuery.query('#blankMainPanel')[0];
    },
    editBlank: function (view, record) {
        var mainPanel = this.getMainPanel();
        mainPanel.removeAll();

        var blankPanel = Ext.create('Blank.view.BlankPanel');
        mainPanel.add(blankPanel);

    }
});
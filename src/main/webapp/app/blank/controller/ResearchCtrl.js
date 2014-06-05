Ext.define('Blank.controller.ResearchCtrl', {
    extend: 'Ext.app.Controller',
    models:['Blank','Research'],
    stores:['Researches','Blanks'],
    views:['ResearchPanel','ResearchGrid'],
    init: function () {
        this.control({

        });
    }
});
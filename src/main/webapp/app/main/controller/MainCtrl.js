Ext.define('MainApp.controller.MainCtrl', {
    extend: 'Ext.app.Controller',
    views: ['MainPanel'],
    init: function () {
        this.control({
            'viewport[action="mainViewport"]': {
                afterrender: function (viewport) {
                    Ext.Ajax.request({
                        url: '/main.js',
                        method: 'get',
                        success: function (response) {
                            var menuBar = eval(response.responseText);
                            viewport.add(menuBar);
                        }
                    });
                }
            }
        });
    }
});
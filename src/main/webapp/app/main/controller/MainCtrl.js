Ext.define('MainApp.controller.MainCtrl', {
    extend: 'Ext.app.Controller',
    views:['MainPanel'],
    init: function () {
        this.control({
            'mainPanel':{
                afterrender:function(panel){
                    Ext.Ajax.request({
                        //78bc7a9e
                        url: '/main.js',
                        method: 'get',
                        success: function (response) {
                            var grid = eval(response.responseText);
                            console.log(grid);
                            var mainPanel = Ext.ComponentQuery.query('#main')[0];
                            var mainMenu = mainPanel
                            console.log(mainMenu);
                            mainMenu.add(grid);

                        }
                    });
                }
            }
        });
    }
});
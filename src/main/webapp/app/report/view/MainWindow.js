Ext.define('Report.view.MainWindow', {
        extend: 'Ext.window.Window',
        title: 'Гарчиг тодорхойгүй',
        autoShow: true,
        width: 800,
        height: 600,
        layout: 'fit',
        alias: 'widget.MainWindow',
        items: [
            {
                layout: 'hbox',
                xtype:'form',
                margin:'5 5 0 5',
                bodyStyle: 'background-color:#dfe9f6',
                border: false,
                items: [
                    {
                        layout:'fit',
                        flex:.5,
                        margin:'5 5 5 5',
                        height:'100%',
                        html:'1'
                    },
                    {
                        layout:'fit',
                        flex:.5,
                        margin:'5 5 5 5',
                        height:'100%',
                        html:'2'
                    }
                ]
            }
        ],
        buttons: [
            {
                text: 'Хадгалах',
                icon:'/resources/images/save-16px.png',
                action: 'save'
            },
            {
                text: 'Хаах',
                icon:'/resources/images/close-16px.png',
                action: 'close',
                listeners:{
                    click:function(btn){
                        btn.up('window').close();
                    }
                }
            }
        ]
    }

);
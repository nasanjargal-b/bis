Ext.define('Account.view.GroupPanel', {
        extend: 'Ext.window.Window',
        title: 'Групп',
        autoShow: true,
        width: 320,
        resizable:false,
        height: 250,
        layout: 'fit',
        alias: 'widget.groupPanel',
        items: [
            {
                layout: 'hbox',
                xtype:'form',
                margin: '5 0 0 5',
                border: false,
                bodyStyle: 'background-color:'+PANEL_COLOR+'',
                items: [
                    {
                        width: 300,
                        layout: 'vbox',
                        border: false,
                        bodyStyle: 'background-color:'+PANEL_COLOR+'',
                        items: [
                            {
                                xtype: 'hiddenfield',
                                name: 'id'
                            },
                            {
                                xtype: 'textfield',
                                allowBlank:false,
                                fieldLabel: 'Нэр',
                                width: 300,
                                name: 'name'
                            },
                            {
                                xtype: 'textareafield',
                                fieldLabel: 'Тайлбар',
                                width: 300,
                                name: 'description'
                            },
                            {
                                xtype:'fieldset',
                                layout: 'fit',
                                title: 'Эрхээ сонгох',
                                items:[{
                                    layout: 'hbox',
                                    columnWidth: 0.5,
                                    margin:'0 0 10 0',
                                    bodyStyle: 'background-color:'+PANEL_COLOR+'',
                                    border:false,
                                    items: [
                                        {
                                            layout: 'vbox',
                                            bodyStyle: 'background-color:'+PANEL_COLOR+'',
                                            border:false,
                                            items: [
                                                {
                                                    margin: '5 0 0 0',
                                                    xtype: 'checkboxfield',
                                                    inputValue: 'ROLE_ADMINISTRATOR',
                                                    name:'roles',
                                                    fieldLabel: 'Админ'
                                                },
                                                {
                                                    margin: '10 0 0 0',
                                                    xtype: 'checkboxfield',
                                                    name:'roles',
                                                    inputValue: 'ROLE_REGISTER',
                                                    fieldLabel: 'Бүртгэл'
                                                }
                                            ]
                                        },
                                        {
                                            layout: 'vbox',
                                            margin:'0 0 0 40',
                                            bodyStyle: 'background-color:'+PANEL_COLOR+'',
                                            border:false,
                                            items: [
                                                {
                                                    margin: '5 0 0 0',
                                                    xtype: 'checkboxfield',
                                                    name:'roles',
                                                    inputValue: 'ROLE_REPORTER',
                                                    fieldLabel: 'Тайлан'
                                                },
                                                {
                                                    margin: '5 0 0 0',
                                                    xtype: 'checkboxfield',
                                                    name:'roles',
                                                    inputValue: 'ROLE_VIEWER',
                                                    fieldLabel: 'Харах'
                                                }
                                            ]
                                        }
                                    ]
                                }]

                            }
                        ]
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
Ext.define('MainApp.view.PasswordWindow', {
    extend: 'Ext.window.Window',
    title: 'Нууц үг солих',
    autoShow:true,
    height: 165,
    width: 450,
    resizable:false,
    layout: 'fit',
    bodyStyle: 'background-color:#dfe9f6',
    alias: 'widget.passwordWindow',
    items:[
        {
            layout:'vbox',
            xtype:'form',
            bodyStyle: 'background-color:#dfe9f6',
            border:false,
            margin:'5 5 5 5',
            items:[
                {
                    xtype: 'textfield',
                    inputType:'password',
                    labelWidth:110,
                    width:425,
                    fieldLabel: 'Хуучин нууц үг:',
                    name: 'oldPassword',
                    allowBlank: false
                },
                {
                    xtype: 'textfield',
                    width:425,
                    labelWidth:110,
                    inputType:'password',
                    fieldLabel: 'Шинэ нууц үг:',
                    name: 'newPassword',
                    allowBlank: false
                },
                {
                    xtype: 'textfield',
                    inputType:'password',
                    width:425,
                    labelWidth:110,
                    fieldLabel: 'Шинэ нууц үгээ давт:',
                    name: 'rePassword',
                    allowBlank: false
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
            text: 'Болих',
            action: 'close',
            icon:'/resources/images/delete-16px.png',
            listeners:{
                click:function(btn){
                    btn.up('window').close();
                }
            }
        }
    ]
});
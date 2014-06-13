Ext.define('MainApp.view.PasswordWindow', {
    extend: 'Ext.window.Window',
    title: 'Нууц үг солих',
    autoShow:true,
    height: 165,
    width: 350,
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
                    width:325,
                    fieldLabel: 'Хуучин нууц үг:',
                    name: 'oldPassword',
                    allowBlank: false
                },
                {
                    xtype: 'textfield',
                    width:325,
                    inputType:'password',
                    fieldLabel: 'Шинэ нууц үг:',
                    name: 'newPassword',
                    allowBlank: false
                },
                {
                    xtype: 'textfield',
                    inputType:'password',
                    width:325,
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
            action: 'save'
        },
        {
            text: 'Болих',
            action: 'close',
            listeners:{
                click:function(btn){
                    btn.up('window').close();
                }
            }
        }
    ]
});
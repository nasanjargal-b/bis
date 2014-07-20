Ext.define('MainApp.controller.MainCtrl', {
    extend: 'Ext.app.Controller',
    views: ['MainPanel', 'PasswordWindow'],
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
            },
            'button[action="login"]': {
                click: function () {
                    window.location = '/security/login.jsp';
                }
            },
            'viewport component[action="changePassword"]': {
                click: this.changePassword
            },
            'passwordWindow component[action="save"]': {
                click: function (btn) {
                    this.changePasswordSave(btn.up('window'))
                }
            }
        });
    },
    changePassword: function (btn) {
        var win = this.getPasswordWindowView().create();
    },
    changePasswordSave: function (win) {
        var passwordOld = win.down('textfield[name="oldPassword"]').getValue();
        var newPassword = win.down('textfield[name="newPassword"]').getValue();
        var rePassword = win.down('textfield[name="rePassword"]').getValue();
        if (win.down('form').isValid()) {
            if (newPassword == rePassword) {
                Ext.Ajax.request({
                    url: '/account-mod/account/password.json',
                    params: {
                        oldPassword: passwordOld,
                        password: newPassword
                    },
                    method: 'post',
                    success: function (response) {
                        var text = Ext.decode(response.responseText).data;
                        if (text == 'success') {
                            Ext.MessageBox.alert('Мессеж', 'Амжилттай шинэчлэгдлээ');
                            win.close();
                        } else {
                            Ext.MessageBox.alert('Алдаа!!!', 'Амжилтгүй боллоо. Та дахин оролдоно уу!');
                        }
                    }
                })
            } else {
                Ext.MessageBox.alert('Алдаа!!!', 'Амжилтгүй боллоо. Таны нууц үг зөрсөн тул та дахин оролдоно уу!');
            }
        }
    }
});
<%--
  Created by IntelliJ IDEA.
  User: nyamaa
  Date: 6/10/14
  Time: 4:49 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Барилгын эрэлт, нийлүүлэтийн судалгааны мэдээллийн сан</title>
    <link rel="stylesheet" href="/resources/ext/resources/css/ext-all.css"/>
    <script type="application/javascript" src="/resources/ext/ext-all-dev.js"></script>
    <script type="application/javascript" src="/resources/ext/ext-override.js"></script>
</head>
<body>
<script type="text/javascript">
    Ext.onReady(function () {

        var win = Ext.create('Ext.Window', {
            height: 125,
            width: 420,
            title: 'Нэвтрэх хэсэг${not empty param.error?": <span style=\"color:red\">Хэрэглэгчийн нэр эсвэл нууц үг буруу байна!!!</span>":""}',
            layout: 'border',
            closable: false,
            frame: true,
            draggable: false,
            resizable: false,
            shadow: false,
            items: [
                {
                    region: 'west',
                    xtype: 'imagecomponent',
                    src: '/resources/images/password-128px.png',
                    width: 64
                },
                {
                    region: 'center',
                    xtype: 'form',
                    layout: 'form',
                    border: false,
                    bodyBorder: false,
                    padding: 5,
                    bodyStyle: 'background-color: #dfe8f6',
                    defaultType: 'textfield',
                    fieldDefaults: {
                        labelWidth: 110
                    },
                    items: [
                        {
                            fieldLabel: 'Хэрэглэгчийн нэр',
                            name: 'username',
                            allowBlank: false,
                            listeners: {
                                scope: this,
                                specialkey: function (f, e) {
                                    if (e.getKey() == e.ENTER) {
                                        f.up('window').submitForm();
                                    }
                                }
                            }
                        },
                        {
                            fieldLabel: 'Нууц үг',
                            inputType: 'password',
                            name: 'password',
                            allowBlank: false,
                            listeners: {
                                scope: this,
                                specialkey: function (f, e) {
                                    if (e.getKey() == e.ENTER) {
                                        f.up('window').submitForm();
                                    }
                                }
                            }
                        }
                    ]
                }
            ],
            buttons: [
                {
                    text: 'Нэвтрэх',
                    icon: '/resources/images/login-16px.png',
                    onClick: function () {
                        this.up('window').submitForm();
                    }
                }
            ],
            submitForm: function () {
                this.down('form').submit({
                    url: '/security/login-process',
                    standardSubmit: true,
                    method: 'post'
                });
            }
        });
        win.show();
        /*win.down('textfield[name="register_id"]').focus();
         if (window.location.hash == '#NOT_VALID') {
         win.setTitle(win.title + '<span style="font-weight: normal;color: #ff0000;"> Хэрэглэгчийн нэр эсвэл нууц үг буруу байна.</span>');
         } else if (window.location.hash == '#ACCESS_DENIED') {
         win.setTitle(win.title + '<span style="font-weight: normal;color: #ff0000;"> Хандах эрх хүрсэнгүй.</span>');
         }*/
    });
</script>
</body>
</html>

Ext.create('Ext.toolbar.Toolbar', {
    region: 'north',
    defaults: {
        hrefTarget: 'mainFrame'
    },
    border: false,

    items: [
        {

            defaults: {
                hrefTarget: 'mainFrame'
            },
            text: 'Бүртгэл',
            menu: [
                {
                    text: 'Судалгаа',
                    hrefTarget: 'mainFrame',
                    icon: '',
                    href: 'research.jsp'
                },
                {
                    text: 'Маягт',
                    hrefTarget: 'mainFrame',
                    icon: '',
                    href: 'blank.jsp'
                },
                {
                    text: 'Бичлэг',
                    hrefTarget: 'mainFrame',
                    icon: '',
                    href: 'record.jsp'
                }

            ]
        },
        {

            text: 'Тайлан',
            defaults: {
                hrefTarget: 'mainFrame'
            },
            menu: [
                {
                    text: 'Тайлан үүсгэх',
                    hrefTarget: 'mainFrame',
                    icon: '',
                    href: 'report.jsp'
                },
                '-'
                ,
                {
                    text: "\u042D\u0440\u044D\u043B\u0442",
                    icon: '',
                    menu: [
                        {
                            text: "QG2",
                            icon: ''
                        },
                        {
                            text: "R01",
                            icon: '',
                            hrefTarget: 'mainFrame',
                            href: '/report-mod/report/view/$report.id.html'
                        }
                    ]
                }                    ,
                {
                    text: "\u041D\u0438\u0439\u043B\u04AF\u04AF\u043B\u044D\u043B\u0442",
                    icon: '',
                    menu: [
                        {
                            text: "QG1",
                            icon: ''
                        }
                    ]
                }
            ]
        },
        {

            text: 'Админ',
            defaults: {
                hrefTarget: 'mainFrame'
            },
            menu: [
                {
                    text: 'Групп',
                    icon: '',
                    hrefTarget: 'mainFrame',
                    href: 'group.jsp'
                },
                {
                    text: 'Хэрэглэгч',
                    hrefTarget: 'mainFrame',
                    icon: '',
                    href: 'account.jsp'
                }
            ]
        },
        ,
        '->',
        {

            text: 'admin',
            defaults: {
                hrefTarget: 'mainFrame'
            },
            menu: [
                {
                    text: 'Нууц үг солих',
                    icon: '/resources/images/password-16px.png',
                    action: 'changePassword'
                },
                '-'
                ,
                {
                    text: 'Гарах',
                    icon: '/resources/images/cancel-window-16px.png',
                    handler: function () {
                        window.location = '/security/logout-process';
                    }
                }

            ]
        },
    ]
});
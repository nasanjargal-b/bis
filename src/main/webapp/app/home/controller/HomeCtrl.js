Ext.define('Home.controller.HomeCtrl', {
    extend: 'Ext.app.Controller',
    init: function () {
        this.control({
            'panel[action="logoPanel"]': {
                afterrender: function (panel) {
                    var logos = panel.query('panel[action="logo"]');
                    this.fadeInLogo(logos, 2, 'CENTER');
                }
            },
            'component[action="home"]': {
                afterrender: function (cmp) {
                    cmp.el.on('click', function () {
                        window.location = '/home.jsp'
                    });
                }
            }
        });
    },
    fadeInLogo: function (logos, i, type) {
        var me = this;
        window.setTimeout(function () {
            var logo = logos[i];
            logo.el.fadeIn({
                opacity: 1,
                easing: 'easeOut',
                duration: 700
            });

            if (type == 'CENTER') {
                me.fadeInLogo(logos, i + 1, 'RIGHT');
                me.fadeInLogo(logos, i - 1, 'LEFT');
            } else if (type == 'RIGHT') {
                if (i < 4) {
                    me.fadeInLogo(logos, i + 1, type);
                } else {
                    window.setTimeout(function () {
                        me.fadeInName();
                    }, 500);
                }
            } else {
                if (i > 0) {
                    me.fadeInLogo(logos, i - 1, type);
                }
            }
        }, 500)
    },
    fadeInName: function () {
        Ext.get('nameLabel').fadeIn({
            opacity: 1,
            easing: 'easeOut',
            duration: 700
        });
        window.setTimeout(function () {
            Ext.get('homeLabel').fadeIn({
                opacity: 1,
                easing: 'easeOut',
                duration: 700
            });
        }, 500);
    }
});
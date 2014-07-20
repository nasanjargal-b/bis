Ext.define('Home.view.HomePanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.homePanel',
    layout: 'border',
    border: false,
    items: [
        {
            region: 'north',
            border: false,
            height: 150,
            xtype: 'panel',
            action: 'logoPanel',
            layout: {
                type: 'hbox',
                padding: '5',
                pack: 'stretch',
                align: 'middle'
            },
            defaults: {
                xtype: 'panel',
                border: false,
                layout: {
                    type: 'hbox',
                    pack: 'center',
                    align: 'middle'
                },
                style: 'opacity:0;filter: alpha(opacity=0);',
                margin: 5,
                flex: 1,
                width: 150,
                height: 150
            },
            items: [
                {
                    action: 'logo',
                    items: {
                        xtype: 'component',
                        width: 150,
                        height: 89,
                        autoEl: {
                            tag: 'img',
                            src: '/resources/images/mnca-logo.png'
                        }
                    }
                },
                {
                    action: 'logo',
                    items: {
                        xtype: 'component',
                        width: 120,
                        height: 90,
                        autoEl: {
                            tag: 'img',
                            src: '/resources/images/mmcg-logo.png'
                        }
                    }
                },
                {
                    action: 'logo',
                    items: {
                        xtype: 'component',
                        width: 150,
                        height: 150,
                        autoEl: {
                            tag: 'img',
                            src: '/resources/images/logo-mon.png'
                        }
                    }
                },
                {
                    action: 'logo',
                    items: {
                        xtype: 'component',
                        width: 120,
                        height: 90,
                        autoEl: {
                            tag: 'img',
                            src: '/resources/images/barilga-logo.png'
                        }
                    }
                },
                {
                    action: 'logo',
                    items: {
                        xtype: 'component',
                        width: 90,
                        height: 78,
                        autoEl: {
                            tag: 'img',
                            src: '/resources/images/monsource-logo.png'
                        }
                    }
                }
            ]
        },
        {
            xtype: 'panel',
            region: 'center',
            border: false,
            layout: {
                type: 'vbox',
                pack: 'center',
                align: 'center'
            },
            items: [
                {
                    xtype: 'component',
                    action: 'home',
                    id: 'nameLabel',
                    html: 'ОРОН СУУЦНЫ ЭРЭЛТ, НИЙЛҮҮЛЭЛТИЙН СУДАЛГААНЫ <br/>МЭДЭЭЛЛИЙН САНД ТАВТАЙ МОРИЛНО УУ'
                },
                {
                    xtype: 'label',
                    action: 'home',
                    id: 'homeLabel',
                    text: 'Нэвтрэх'
                }
            ]
        },
        {
            region: 'south',
            border: false,
            height: 150,
            xtype: 'panel'
        }
    ]
});
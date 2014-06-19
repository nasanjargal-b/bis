Ext.define('Report.view.ReportGridPanel', {
    extend: 'Ext.panel.Panel',
    border: false,
    alias: 'widget.reportGridPanel',
    layout: {
        type: 'vbox',
        align: 'center'
    },
    items: [
        {
            xtype: 'treepanel',
            title: 'Групп',
            alias: 'widget.groupTree',
            width: 400,
            flex: .4,
            store: 'Group',
            forceFit: true,
            rootVisible: true,
            dockedItems: [
                {
                    xtype: 'toolbar',
                    items: [
                        {
                            text: 'Нэмэх',
                            icon: '/resources/images/add-16px.png',
                            action: 'add'

                        },
                        {
                            text: 'Засах',
                            icon: '/resources/images/edit-16px.png',
                            action: 'edit'

                        },
                        {
                            text: 'Устгах',
                            icon: '/resources/images/delete-16px.png',
                            action: 'delete'
                        }
                    ]
                }
            ],
            viewConfig: {
                plugins: {
                    ptype: 'treeviewdragdrop',
                    ddGroup: 'selDD'
                }
            }
        },
        {
            xtype: 'grid',
            title: 'Тайлангын жагсаалт',
            alias: 'widget.reportGrid',
            store: 'Reports',
            width: 400,
            flex: .6,
            forceFit: true,
            selModel: { mode: 'MULTI'},
            dockedItems: [
                {
                    xtype: 'toolbar',
                    items: [
                        {
                            text: 'Нэмэх',
                            icon: '/resources/images/add-16px.png',
                            action: 'add'

                        },
                        {
                            text: 'Устгах',
                            icon: '/resources/images/delete-16px.png',
                            action: 'delete'
                        }
                    ]
                }
            ],
            columns: [
                {
                    text: '',
                    width: 10,
                    dataIndex: 'name',
                    renderer: function (value) {
                        return '<img src="/resources/images/report-16px.png">';
                    }
                },
                {
                    text: 'Нэр',
                    dataIndex: 'name'
                }
            ],
            viewConfig: {
                plugins: {
                    ptype: 'gridviewdragdrop',
                    ddGroup: 'selDD'
                }
            }
        }
    ]
});
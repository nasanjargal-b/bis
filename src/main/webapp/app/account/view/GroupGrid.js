Ext.define('Account.view.GroupGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.groupGrid',
    title: 'Групп',
    width: 400,
    forceFit: true,
    dockedItems: [
        {
            xtype: 'toolbar',
            items: [
                {
                    text: 'Нэмэх',
                    icon: '/resources/images/add-16px.png',
                    alias: 'add'

                },
                {
                    text: 'Засах',
                    icon: '/resources/images/edit-16px.png',
                    alias: 'edit'
                },
                {
                    text: 'Устгах',
                    icon: '/resources/images/delete-16px.png',
                    alias: 'delete'
                },'->',
                {
                    xtype:'textfield',
                    action: 'search',
                    width:300,
                    enableKeyEvents:true,
                    blankText:'Хайх'
                },
                {
                    text: 'Хайх',
                    icon: '/resources/images/search-16px.png',
                    action: 'search'
                }
            ]
        }
    ],
    store: 'Groups',
//    features: [
//        {
//            ftype: 'grouping',
//            groupHeaderTpl: '{name}'
//        }
//    ],
    columns: [
        {
            text: 'Группын код',
            width: 80,
            dataIndex: 'id'
        },
        {
            text: 'Группын нэр',
            flex:.5,
            dataIndex: 'name'
        },
        {
            text: 'Тайлбар',
            flex:.5,
            dataIndex: 'description'
        },
        {
            text: 'Эрх',
            flex:.5,
            dataIndex: 'roles'
        },
        {
            text: 'Нийт хэрэглэгч',
            flex:.5,
            dataIndex: 'accountCount'
        }
    ]
});

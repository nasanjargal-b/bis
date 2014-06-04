Ext.define('Account.view.AccountGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.accountGrid',
    title: 'Груп',
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
                    width:230,
                    action:'search',
                    alias:'searchText',
                    enableKeyEvents:true,
                    blankText:'Хайх'
                },
                {
                    width:150,
                    xtype: 'combo',
                    alias:'searchCombo',
                    allowBlank:false,
//                    fieldLabel: 'Төлөв',
                    editable:false,
                    store:Ext.create('Ext.data.Store',{
                        fields:[
                            {name:'id'},
                            {name:'value'}
                        ],
                        autoLoad:true,
                        data:[
                            {id:'ACTIVE',value:'Идэвхитэй'},
                            {id:'BLOCKED',value:'Идэвхигүй'},
                            {id:'EXPIRED',value:'Дууссан'},
                            {id:'LOCKED',value:'Цоожлогдсон'}
                        ]
                    }),
                    displayField:'value',
                    valueField:'id',
                    action: 'search'
                },
                {
                    text: 'Хайх',
                    icon: '/resources/images/search-16px.png',
                    action: 'search'
                }
            ]
        }
    ],
    store: 'Accounts',
//    features: [
//        {
//            ftype: 'grouping',
//            groupHeaderTpl: '{name}'
//        }
//    ],
    columns: [
        {
            text: '#',
            width: 80,
            dataIndex: 'id'
        },
        {
            text: 'Нэвтрэх нэр',
            dataIndex: 'username'
        },
        {
            text: 'Нэр',
            dataIndex: 'name'
        },
        {
            text: 'Хүйс',
            dataIndex: 'gender',
            renderer:function(val){
                switch (val){
                    case 'MALE':return 'Эрэгтэй';break;
                    case 'FEMALE':return 'Эмэгтэй';break;
                }
            }
        },
        {
            text: 'И-мэйл',
            dataIndex: 'email'
        },
        {
            text: 'Утас',
            dataIndex: 'phone'
        },
        {
            text: 'Төлөв',
            dataIndex: 'status',
            renderer:function(val){
                switch (val){
                    case 'ACTIVE':return 'Идэвхитэй';break;
                    case 'BLOCK':return 'Хаалттай';break;
                    case 'LOCKED':return 'Цоожтой';break;
                    case 'EXPIRED':return 'Хугацаа дууссан';break;
                }
            }
        },
        {
            text: 'Хаяг',
            dataIndex: 'address'
        }
    ]
});
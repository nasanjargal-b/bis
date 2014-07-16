Ext.define('Account.view.AccountPanel', {
        extend: 'Ext.window.Window',
        title: 'Групп',
        autoShow: true,
        width: 600,
        height: 405,
        layout: 'fit',
        alias: 'widget.accountPanel',
        items: [
            {
                layout: 'hbox',
                xtype:'form',
                margin:'5 5 0 5',
                bodyStyle: 'background-color:#dfe9f6',
                border: false,
                items: [
                    {
                        layout: 'form',
                        width: 250,
                        bodyStyle: 'background-color:#dfe9f6',
                        border: false,
                        items: [
                            {
                                xtype: 'hiddenfield',
                                name: 'id'
                            },
                            {
                                xtype: 'textfield',
                                fieldLabel: 'Хэрэглэгчийн нэр',
                                allowBlank:false,
                                name: 'username'
                            },
                            {
                                xtype: 'combo',
                                allowBlank:false,
                                fieldLabel: 'Төлөв',
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
                                name: 'status'
                            },
                            {
                                xtype: 'textfield',
                                fieldLabel: 'Нэр',
                                allowBlank:false,
                                name: 'name'
                            },
                            {
                                xtype: 'combo',
                                editable:false,
                                allowBlank:false,
                                store:Ext.create('Ext.data.Store',{
                                    fields:[
                                        {name:'id'},
                                        {name:'value'}
                                    ],
                                    autoLoad:true,
                                    data:[
                                        {id:'MALE',value:'Эрэгтэй'},
                                        {id:'FEMALE',value:'Эмэгтэй'}
                                    ]
                                }),
                                displayField:'value',
                                valueField:'id',
                                fieldLabel: 'Хүйс',
                                name: 'gender'
                            },
                            {
                                xtype: 'textfield',
                                fieldLabel: 'Э-шуудан',
                                regex: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/i,
                                name: 'email'
                            },
                            {
                                xtype: 'textfield',
                                fieldLabel: 'утас',
                                name: 'phone'
                            },
                            {
                                xtype: 'combo',
                                allowBlank:false,
                                store:'Cities',
                                fieldLabel: 'Аймаг/Хот',
                                displayField:'name',
                                queryMode:'local',
                                valueField:'id',
                                action:'city',
                                editable:false,
                                name: 'cityId',
                                listeners:{
                                    change: function (cmb, value) {
                                        var districtCmb = cmb.up('form').down('combo[name="districtId"]');
                                        var districtStore = cmb.findRecordByValue(value).districts();
                                        districtCmb.bindStore(districtStore);
                                        districtCmb.setValue(null);
                                    }
                                }
                            },
                            {
                                xtype: 'combo',
                                allowBlank:false,
//                                store:Ext.create('Account.store.Districts'),
                                displayField:'name',
                                queryMode:'local',
                                valueField:'id',
                                fieldLabel: 'Сум/Дүүрэг',
                                editable:false,
                                name: 'districtId'
                            },
                            {
                                xtype: 'textareafield',
                                allowBlank:false,
                                fieldLabel: 'Хаяг',
                                name: 'address'
                            }
                        ]
                    },
                    {
                        margin:'3 0 0 5',
                        selType: 'checkboxmodel',
                        xtype: 'grid',
                        width:320,
                        name:'groups',
                        renderTo: Ext.getBody(),
                        store: Ext.create('Account.store.Groups'),
                        columns: [
                            {
                                text: '#',
                                dataIndex: 'id'
                            },
                            {
                                text: 'Группын нэр',
                                dataIndex: 'name'
                            },
                            {
                                flex:.5,
                                text: 'Группын эрх',
                                dataIndex: 'roles'
                            }
                        ]
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
                text: 'Хаах',
                icon:'/resources/images/close-16px.png',
                action: 'close',
                listeners:{
                    click:function(btn){
                        btn.up('window').close();
                    }
                }
            }
        ]
    }
);
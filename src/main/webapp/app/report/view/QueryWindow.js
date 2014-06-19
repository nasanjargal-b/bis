Ext.define('Report.view.QueryWindow', {
    extend: 'Ext.window.Window',
    title: 'Query',
    layout: 'fit',
    modal: true,
    alias: 'widget.queryWindow',
    border: false,
    resizable: false,
    store: null,
    items: {
        xtype: 'form',
        frame: true,
        layout: 'hbox',
        items: [
            {
                xtype: 'panel',
                layout: 'vbox',
                border:false,
                bodyStyle: 'background-color:#dfe9f6',
                defaults: {
                    labelWidth: 90,
                    width: 500
                },
                items: [
                    {
                        xtype: 'hiddenfield',
                        name: 'id'
                    },
                    {
                        xtype: 'textfield',
                        allowBlank: false,
                        name: 'name',
                        fieldLabel: 'Нэр'
                    },
                    {
                        xtype: 'textarea',
                        fieldLabel: 'Query',
                        height: 300,
                        name: 'query'
                    }
                ]
            },
            {
                xtype: 'grid',
                action: 'paramGrid',
                width: 400,
                height: '100%',
                title: 'Параметер',
                margin: '0 0 0 5',
                forceFit: true,
                dockedItems: {
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
                },
                columns: [
                    {
                        text: 'Гарчиг',
                        dataIndex: 'label'
                    },
                    {
                        text: 'Нэр',
                        dataIndex: 'name'
                    },
                    {
                        text: 'Төрөл',
                        dataIndex: 'type',
                        renderer: function (value) {
                            switch (value) {
                                case 'CITY':
                                    return 'Аймга/Хот';
                                case 'DISTRICT':
                                    return 'Сум/Дүүрэг';
                                case 'INTEGER':
                                    return 'Бүхэл тоо';
                                case 'DECIMAL':
                                    return 'Бутархай тоо';
                                case 'DATE':
                                    return 'Огноо';
                                case 'TIME':
                                    return 'Цаг';
                                case 'TEXT':
                                    return 'Текст';
                                case 'BOOLEAN':
                                    return 'Тийм/Үгүй';
                                case 'MULTIPLE_CHOICE':
                                    return 'Олон сонголт';
                                case 'SINGLE_CHOICE':
                                    return 'Нэг сонголт';
                            }
                        }
                    }
                ]
            }
        ]
    },
    buttons: [
        {
            text: 'Хадгалах',
            icon: '/resources/images/save-16px.png',
            action: 'save'
        },
        {
            text: 'Болих',
            icon: '/resources/images/close-16px.png',
            handler: function (btn) {
                btn.up('window').close();
            }
        }
    ]
});
Ext.define('Report.view.ReportPanel', {
    extend: 'Ext.form.Panel',
    url: '/report-mod/report/report.json',
    method: 'post',
    title: 'Тайлан',
    alias: 'widget.reportPanel',
    layout: 'border',
//    standardSubmit: true,
    dockedItems: {
        xtype: 'toolbar',
        items: [
            {
                text: 'Хадгалах',
                icon: '/resources/images/save-16px.png',
                action: 'save'

            },
            {
                text: 'Болих',
                icon: '/resources/images/close-16px.png',
                action: 'cancel'
            }
        ]
    },
    items: [
        {
            xtype: 'panel',
            region: 'north',
            margin: '5 5 5 5',
            border: false,
            bodyStyle: 'background-color:#dfe9f6',
            border: false,
            defaults: {
                labelWidth: 120,
                width: 500
            },
            items: [
                {
                    xtype: 'hiddenfield',
                    name: 'id'
                },
                {
                    xtype: 'hiddenfield',
                    name: 'reportGroupId'
                },
                {
                    xtype: 'textfield',
                    allowBlank: false,
                    fieldLabel: 'Нэр',
                    name: 'name'
                },
                {
                    xtype: 'textfield',
                    allowBlank: false,
                    readOnly: true,
                    fieldLabel: 'Групп',
                    name: 'reportGroupName'
                },
                {
                    xtype: 'checkbox',
                    formBind: false,
                    name: 'fileCheck',
                    fieldLabel: 'Файл илгээх'
                },
                {
                    xtype: 'filefield',
                    fieldLabel: 'Тайлангын файл',
                    name: 'file',
                    disabled: true
                }
            ]
        },
        {
            xtype: 'panel',
            region: 'center',
            border: false,
            bodyStyle: 'background-color:#dfe9f6',
            layout: {
                type: 'hbox',
                align: 'middle',
                padding: 5
            },
            items: [
                {
                    xtype: 'grid',
                    action: 'queryGrid',
                    flex: 1,
                    height: '100%',
                    title: 'Шүүх Queries',
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
                            text: 'Нэр',
                            dataIndex: 'name',
                            flex: .3
                        },
                        {
                            text: 'Параметер',
                            dataIndex: 'name',
                            flex: .7,
                            renderer: function (value, meta, record) {
                                var paramNames = [];
                                record.params().each(function (param) {
                                    paramNames.push(param.get('label'))
                                });

                                return paramNames.join(", ")
                            }
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
        }
    ]
});
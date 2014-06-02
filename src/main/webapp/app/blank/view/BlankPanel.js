Ext.define('Blank.view.BlankPanel', {
    extend: 'Ext.form.Panel',
    title: 'Маягт',
    layout: 'fit',
    alias: 'widget.blankPanel',
    dockedItems: {
        xtype: 'toolbar',
        items: [
            {
                text: 'Хадгалах',
                icon: '/resources/images/save-16px.png',
                alias: 'save'
            },
            {
                text: 'Болих',
                icon: '/resources/images/close-16px.png',
                alias: 'cancel'
            }
        ]
    },
    items: [
        {
            xtype: 'panel',
            border: false,
            layout: {
                type: 'border',
                padding: 5
            },
            items: [
                {
                    xtype: 'panel',
                    region: 'north',
                    bodyStyle: 'background-color:#dfe9f6',
                    border: false,
                    defaults: {
                        labelWidth: 120,
                        width: 500
                    },
                    items: [
                        {
                            xtype: 'textfield',
                            allowBlank: false,
                            fieldLabel: 'Маягтын код',
                            name: 'id',
                            regex: /^[A-Za-z]{1}[A-Za-z0-9]*$/i,
                            maskRe: /^[A-Za-z0-9]*$/i
                        },
                        {
                            xtype: 'textfield',
                            allowBlank: false,
                            fieldLabel: 'Маягтын нэр',
                            name: 'name'
                        },
                        {
                            xtype: 'combobox',
                            allowBlank: false,
                            fieldLabel: 'Маягтын ангилал',
                            name: 'blankGroupId',
                            displayField: 'name',
                            valueField: 'id'
                        }
                    ]
                },
                {
                    xtype: 'treepanel',
                    title: 'Асуултын жагсаалт',
                    region: 'center',
                    forceFit: true,
                    viewConfig: {
                        toggleOnDblClick: false,
                        plugins: {
                            ptype: 'treeviewdragdrop'
                        }
                    },
                    columns: [
                        {
                            xtype: 'treecolumn',
                            text: 'Код',
                            width: 150,
                            sortable: true,
                            dataIndex: 'id'
                        },
                        {
                            text: 'Асуулт',
                            flex: 1,
                            dataIndex: 'text'
                        },
                        {
                            xtype: 'checkcolumn',
                            text: 'Хүснэгт',
                            width: 50,
                            dataIndex: 'grid'
                        },
                        {
                            text: 'Багана',
                            width: 150,
                            dataIndex: 'name'
                        },
                        {
                            text: 'Төрөл',
                            width: 150,
                            dataIndex: 'type',
                            renderer: function (value) {
                                if (value == 'TEXT') return 'Текст';
                                if (value == 'DECIMAL') return 'Бутархай тоо';
                                if (value == 'INTEGER') return 'Бүхэл тоо';
                                if (value == 'BOOLEAN') return 'Тийм/Үгүй';
                                if (value == 'DATE') return 'Огноо';
                                if (value == 'SINGLE_CHOICE') return 'Нэг сонголттой';
                                if (value == 'MULTIPLE_CHOICE') return 'Олон сонголттой';

                                return '';
                            }
                        }
                    ]
                }
            ]
        }
    ]
});
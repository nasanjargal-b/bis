Ext.define('Blank.view.ResearchPanel', {
    extend: 'Ext.form.Panel',
    title: 'Судалгаа',
    layout: 'fit',
    bodyStyle: 'background-color:'+PANEL_COLOR+'',
    alias: 'widget.researchPanel',
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
            xtype: 'form',
            margin: '5 5 5 5',
            border: false,
            bodyStyle: 'background-color:'+PANEL_COLOR+'',
            border: false,
            height: '100%',
            layout: 'vbox',
            items: [
                {
                    xtype: 'hiddenfield',
                    name: 'id'
                },
                {
                    xtype: 'textfield',
                    width: 500,
                    allowBlank: false,
                    fieldLabel: 'Нэр',
                    name: 'name'
                },
                {
                    xtype: 'numberfield',
                    width: 500,
                    allowBlank: false,
                    fieldLabel: 'Он',
                    name: 'year'
                },
                {
                    xtype: 'checkboxfield',
                    width: 500,
                    fieldLabel: 'Идэвхитэй',
                    name: 'active'
                },
                {
                    xtype: 'datefield',
                    allowBlank: false,
                    width: 500,
                    format: 'Y-m-d',
                    editable: false,
                    fieldLabel: 'Эхлэх хугацаа',
                    name: 'startDate'
                },
                {
                    xtype: 'datefield',
                    fieldLabel: 'Дуусах хугацаа',
                    allowBlank: false,
                    format: 'Y-m-d',
                    editable: false,
                    width: 500,
                    name: 'endDate'
                },
                {
                    xtype: 'textareafield',
                    fieldLabel: 'Тайлбар',
                    width: 500,
                    name: 'description'
                }
                ,
                {
                    layout: 'hbox',
                    xtype: 'panel',
                    flex: 1,
                    style: {
                        "height": "100%"
                    },
                    width: '100%',
                    bodyStyle: 'background-color:'+PANEL_COLOR+'',
                    border: false,
                    items: [
                        {
                            width: '100%',
                            height: '100%',
                            xtype: 'blankFirstGrid'

                        },
                        {
                            width: '100%',
                            height: '100%',
                            xtype: 'blankSecondGrid'
                        }
                    ]
                }
            ]
        }
    ]
});
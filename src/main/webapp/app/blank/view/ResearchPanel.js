Ext.define('Blank.view.ResearchPanel', {
    extend: 'Ext.form.Panel',
    title: 'Судалгаа',
    layout: 'fit',
    bodyStyle: 'background-color:#dfe9f6',
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
            margin:'5 5 5 5',
            border: false,
            bodyStyle: 'background-color:#dfe9f6',
            border: false,
            layout: 'vbox',
            items: [
                {
                    xtype:'hiddenfield',
                    name:'id'
                },
                {
                    xtype:'numberfield',
                    width:500,
                    allowBlank:false,
                    fieldLabel:'Он',
                    name:'year'
                },
                {
                    xtype:'checkboxfield',
                    width:500,
                    fieldLabel:'Идэвхитэй',
                    name:'active'
                },
                {
                    xtype:'datefield',
                    allowBlank:false,
                    width:500,
                    format:'m-d-Y',
                    editable:false,
                    fieldLabel:'Эхлэх хугацаа',
                    name:'startDate'
                },
                {
                    xtype:'datefield',
                    fieldLabel:'Дуусах хугацаа',
                    allowBlank:false,
                    format:'m-d-Y',
                    editable:false,
                    width:500,
                    name:'endDate'
                },
                {
                    xtype:'textareafield',
                    fieldLabel:'Тайлбар',
                    width:500,
                    name:'description'
                }
                ,
                {
                    layout: 'hbox',
                    xtype: 'panel',
                    bodyStyle: 'background-color:#dfe9f6',
                    border: false,
                    items: [
                        {
                            xtype: 'blankFirstGrid'

                        },
                        {
                            xtype: 'blankSecondGrid'
                        }
                    ]
                }
            ]
        }
    ]
});
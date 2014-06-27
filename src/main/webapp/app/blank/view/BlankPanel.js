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
                            editable: false,
                            queryMode: 'local',
                            displayField: 'name',
                            valueField: 'id',
                            store: 'Groups'
                        }
                    ]
                },
                {
                    xtype:'questionTreePanel'
                }
            ]
        }
    ]
});
Ext.define('Blank.view.ChoiceWindow', {
    extend: 'Ext.window.Window',
    title: 'Хариулт кодлох',
    layout: 'fit',
    width: 500,
    height: 500,
    alias: 'widget.choiceWindow',
    modal: true,
    border: false,
    dockedItems: {
        xtype: 'toolbar',
        items: [
            {
                text: 'Хадгалах',
                icon: '/resources/images/save-16px.png',
                action: 'save',
                handler: function (btn) {
                    btn.up('window').close();
                }
            },
            {
                text: 'Устгах',
                icon: '/resources/images/delete-16px.png'
            }
        ]
    },
    items: {
        xtype: 'grid',
        plugins: Ext.create('Ext.grid.plugin.CellEditing', {
            clicksToEdit: 2
        }),
        forceFit: true,
        height: 300,
        selModel: {
            mode: 'MULTI'
        },
        columns: [
            {
                text: 'Код',
                dataIndex: 'code',
                width: 100,
                field: {
                    type: 'textfield'
                }
            },
            {
                text: 'Хариулт',
                dataIndex: 'text',
                flex: 1,
                field: {
                    type: 'textfield'
                }
            }
        ]
    }
});
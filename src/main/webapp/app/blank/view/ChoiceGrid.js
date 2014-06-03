Ext.define('Blank.view.ChoiceGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.choiceGrid',
    viewConfig: {
        plugins: {
            ptype: 'gridviewdragdrop'
        },
        listeners: {
            drop: function (node, data, overModel, dropPosition, eOpts) {
                this.fireEvent('edit');
            }
        }
    },
    plugins: Ext.create('Ext.grid.plugin.CellEditing', {
        clicksToEdit: 1
    }),
    forceFit: true,
    height: 300,
    columns: [
        {
            text: 'Хариулт',
            dataIndex: 'choice',
            field: {
                type: 'textfield'
            }
        }
    ],
    store: Ext.create('Ext.data.Store', {
        fields: ['choice']
    })
});

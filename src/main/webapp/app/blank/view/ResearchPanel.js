var columns = [
    {text: "Record Name", flex: 1, sortable: true, dataIndex: 'name'},
    {text: "column1", width: 70, sortable: true, dataIndex: 'column1'},
    {text: "column2", width: 70, sortable: true, dataIndex: 'column2'}
];
var secondGrid = Ext.create('Ext.grid.Panel', {
    viewConfig: {
        plugins: {
            ptype: 'gridviewdragdrop',
            dragGroup: 'secondGridDDGroup',
            dropGroup: 'firstGridDDGroup'
        }

    },
    store: Ext.create('Blank.store.Blanks'),
    width:300,
    columns: columns,
    height:600,
    stripeRows: true,
    title: 'Second Grid',
    margins: '0 0 0 3'
});
var firstGrid = Ext.create('Ext.grid.Panel', {
    multiSelect: true,
    width:300,
    viewConfig: {
        plugins: {
            ptype: 'gridviewdragdrop',
            dragGroup: 'firstGridDDGroup',
            dropGroup: 'secondGridDDGroup'
        }
    },
    store: Ext.create('Blank.store.Blanks'),
    columns: columns,
    stripeRows: true,
    height:600,
    title: 'First Grid',
    margins: '0 2 0 0'
});
Ext.define('Blank.view.ResearchPanel', {
    extend: 'Ext.form.Panel',
    title: 'Маягт',
    layout: 'fit',
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
            xtype: 'panel',
            border: false,
            layout: 'vbox',
            items: [
                {
                    xtype:'hiddenfield',
                    name:'id'
                },
                {
                    xtype:'textfield',
                    fieldLabel:'Он',
                    name:'year'
                },
                {
                    xtype:'checkboxfield',
                    fieldLabel:'Идэвхитэй',
                    name:'active'
                },
                {
                    xtype:'datefield',
                    fieldLabel:'Идэвхитэй',
                    name:'startDate'
                },
                {
                    layout: 'hbox',
                    xtype: 'panel',
//                    width:300,
//                    stretch: 'align:left',
                    items: [
                        {
                            xtype: firstGrid

                        },
                        {
                            xtype: secondGrid
                        }
                    ]
                }
            ]
        }
    ]
});
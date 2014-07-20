Ext.define('Blank.view.BlankFirstGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.blankFirstGrid',
    title: 'Анкетийн жагсаалт',
    width: '100%',
    flex: .5,
    forceFit: true,
    dockedItems: [
        {
            xtype: 'toolbar',
            items: [
                {
                    xtype: 'textfield',
                    isFormField: false,
                    enableKeyEvents: true,
                    action: 'search'
                },
                {
                    xtype: 'button',
                    text: 'Хайх',
                    icon: '/resources/images/search-16px.png',
                    action: 'search'
                }
            ]
        }
    ],
    store: Ext.create('Blank.store.Blanks'),
    features: [
        {
            ftype: 'grouping',
            groupHeaderTpl: '{name}'
        }
    ],
    viewConfig: {
        plugins: {
            ptype: 'gridviewdragdrop',
            dragGroup: 'secondGridDDGroup',
            dropGroup: 'firstGridDDGroup'
        }
    },
    width: 300,
    height: 400,
    stripeRows: true,
    margins: '0 0 0 3',
    columns: [
        {
            text: 'Анкетийн код',
            width: 80,
            dataIndex: 'id'
        },
        {
            text: 'Анкетийн Нэр',
            flex: 1,
            filterable: true,
            dataIndex: 'name',
            filterInput: 'textfield',
            filterOptions: [
                {value: 'startwith', text: 'Start With'},
                {value: 'endwith', text: 'End With'},
                {value: 'contain', text: 'Contain'},
                {value: 'doesnotcontain', text: 'Does Not Contain'}
            ]
        }
    ]
});

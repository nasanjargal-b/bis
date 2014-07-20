Ext.define('Blank.view.BlankSecondGrid', {
    extend: 'Ext.grid.Panel',
    title: 'Судалгааны анкетийн жагсаалт',
    width: '100%',
    flex:.5,
    forceFit: true,
    store: Ext.create('Blank.store.ResearchBlanks'),
    viewConfig: {
        plugins: {
            ptype: 'gridviewdragdrop',
            dragGroup: 'firstGridDDGroup',
            dropGroup: 'secondGridDDGroup'
        }
    },
    alias:'widget.blankSecondGrid',
    width:300,
    height:400,
    stripeRows: true,
    margins: '0 0 0 3',
    features: [
        {
            ftype: 'grouping',
            groupHeaderTpl: '{name}'
        }
    ],
    columns: [
        {
            text: 'Анкетийн код',
            width: 80,
            dataIndex: 'id'
        },
        {
            text: 'Анкетийн Нэр',
            flex: 1,
            dataIndex: 'name'
        }
    ]
});

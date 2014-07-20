Ext.define('Blank.view.BlankGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.blankGrid',
    title: 'Анкетийн жагсаалт',
    width: 400,
    forceFit: true,
    dockedItems: [
        {
            xtype: 'toolbar',
            items: [
                {
                    text: 'Нэмэх',
                    icon: '/resources/images/add-16px.png',
                    action: 'add'

                },
                {
                    text: 'Устгах',
                    icon: '/resources/images/delete-16px.png',
                    action: 'delete'
                }
            ]
        }
    ],
    store: 'Blanks',
    features: [
        {
            ftype: 'grouping',
            groupHeaderTpl: '{name}'
        }
    ],
    selModel: {
        mode: 'MULTI'
    },
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

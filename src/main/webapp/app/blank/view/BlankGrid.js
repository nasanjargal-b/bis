Ext.define('Blank.view.BlankGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.blankGrid',
    title: 'Маягтын жагсаалт',
    width: 400,
    forceFit: true,
    dockedItems: [
        {
            xtype: 'toolbar',
            items: [
                {
                    text: 'Нэмэх',
                    icon: '/resources/images/add-16px.png',
                    alias: 'add'

                },
                {
                    text: 'Устгах',
                    icon: '/resources/images/delete-16px.png',
                    alias: 'delete'
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
    columns: [
        {
            text: 'Маягтын код',
            width: 80,
            dataIndex: 'id'
        },
        {
            text: 'Маягтын Нэр',
            flex: 1,
            dataIndex: 'name'
        }
    ]
});

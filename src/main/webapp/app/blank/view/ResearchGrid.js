Ext.define('Blank.view.ResearchGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.researchGrid',
    title: 'Судалгааны жагсаалт',
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
    store: 'Researches',
    columns: [
        {
            text: 'Нэр',
            flex: 1,
            dataIndex: 'name'
        },
        {
            text: 'Идэвхитэй',
            width: 80,
            dataIndex: 'active',
            renderer: function (value) {
                if (value == true) {
                    return "<span style='color: green'>Идэвхитэй</span>"
                } else {
                    return "<span style='color: red'>Идэвхигүй</span>"
                }
            }
        }/*,
         {
         text: 'Эхлэх огноо',
         flex: 1,
         xtype:'datecolumn',
         format:'Y-m-d',
         dataIndex: 'startDate'
         },
         {
         text: 'Дуусах огноо',
         flex: 1,
         xtype:'datecolumn',
         format:'Y-m-d',
         dataIndex: 'endDate'
         },
         {
         text: 'Тайлбар',
         flex: 1,
         dataIndex: 'description'
         }*/
    ]
});

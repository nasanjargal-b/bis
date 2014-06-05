Ext.define('Blank.view.ResearchGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.researchGrid',
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
//    features: [
//        {
//            ftype: 'grouping',
//            groupHeaderTpl: '{name}'
//        }
//    ],
    columns: [
        {
            text: 'код',
            width: 80,
            dataIndex: 'id'
        },
        {
            text: 'Идэвхитэй',
            flex: 1,
            dataIndex: 'active',
            renderer:function(value){
                if(value==true){
                    return "<span style='color: green'>Идэвхитэй</span>span>"
                }else{
                    return "<span style='color: red'>Идэвхитэй</span>span>"
                }
            }
        },
        {
            text: 'Эхлэх огноо',
            flex: 1,
            dataIndex: 'startDate'
        },
        {
            text: 'Дуусах огноо',
            flex: 1,
            dataIndex: 'endDate'
        },
        {
            text: 'Тайлбар',
            flex: 1,
            dataIndex: 'description'
        }
    ]
});

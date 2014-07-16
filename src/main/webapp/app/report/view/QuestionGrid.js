Ext.define('Report.view.QuestionGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.questionGrid',
    title: 'Асуултын жагсаалт',
    width: 500,
    forceFit: true,
    multiSelect: true,
    viewConfig: {
        copy: true,
        plugins: {
            ptype: 'gridviewdragdrop'
        }
    },
    columns: [
        {
            text: 'Код',
            width: 100,
            dataIndex: 'code'
        },
        {
            text: 'Асуулт',
            flex: 1,
            dataIndex: 'text'
        },
        {
            text: 'Төрөл',
            width: 100,
            dataIndex: 'type',
            renderer: function (value) {
                if (value == 'TEXT') return 'Текст';
                if (value == 'NUMERIC') return 'Тоо';
                if (value == 'SINGLE_CHOICE') return 'Нэг сонголттой';
                if (value == 'MULTIPLE_CHOICE') return 'Олон сонголттой';
                if (value == 'DATE') return 'Огноо';
                if (value == 'TIME') return 'Цаг';
                if (value == 'GROUP') return 'Групп';
            }
        }
    ]
});

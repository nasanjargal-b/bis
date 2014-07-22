Ext.define('Blank.view.QuestionTreePanel', {
    extend: 'Ext.tree.Panel',
    alias: 'widget.questionTreePanel',
    title: 'Асуултын жагсаалт',
    region: 'center',
    forceFit: true,
    rootVisible: false,
    dockedItems: {
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
            },
            '|',
            {
                text: 'Хариулт кодлох',
                icon: '/resources/images/choice-16px.png',
                action: 'choice',
                disabled: true
            }
        ]
    },
    plugins: Ext.create('Ext.grid.plugin.CellEditing', {
        clicksToEdit: 2,
        listeners: {
            'edit': function(e,a) {
                if(a.field=='type' && a.record.raw.id){
                    Ext.MessageBox.confirm('Асуулт', 'Та энэ үйлдэлийг хийхдээ итгэлтэй байна уу!!!<br/>' +
                        '<span style="color: red;">Та энэ үйлдлийг хийснээр үүнтэй холбоотой бусад мэдээллүүд мөн устах болно гэдэгийг анхаарана уу.</span>', function (btn) {
                        if (btn == 'yes') {

                        }else{
                            a.record.set('type',a.record.raw.type)
                            console.log(a.record.raw.id);
                        }
                    });
                }
                console.log(a.field);
            }
        }
    }),
    viewConfig: {
        toggleOnDblClick: false,
        plugins: {
            ptype: 'treeviewdragdrop'
        }
    },
    columns: [
        {
            xtype: 'treecolumn',
            text: 'Код',
            width: 150,
            sortable: true,
            dataIndex: 'code',
            editor: {
                xtype: 'textfield',
                allowBlank: false
            }
        },
        {
            text: 'Төрөл',
            width: 150,
            action:'type',
            dataIndex: 'type',
            renderer: function (value) {
                if (value == 'TEXT') return 'Текст';
                if (value == 'NUMERIC') return 'Тоо';
                if (value == 'SINGLE_CHOICE') return 'Нэг сонголттой';
                if (value == 'MULTIPLE_CHOICE') return 'Олон сонголттой';
                if (value == 'DATE') return 'Огноо';
                if (value == 'TIME') return 'Цаг';
                if (value == 'GROUP') return 'Групп';
            },
            editor: {
                xtype: 'combo',
                allowBlank: false,
                editable: false,
                valueField: 'id',
                displayField: 'value',
                store: Ext.create('Ext.data.Store', {
                    fields: ['id', 'value'],
                    data: [
                        { id: 'TEXT', value: 'Текст'},
                        { id: 'NUMERIC', value: 'Тоо'},
                        { id: 'SINGLE_CHOICE', value: 'Нэг сонголттой'},
                        { id: 'MULTIPLE_CHOICE', value: 'Олон сонголттой'},
                        { id: 'DATE', value: 'Огноо'},
                        { id: 'TIME', value: 'Цаг'},
                        { id: 'GROUP', value: 'Групп'}
                    ]
                })
            }
        },
        {
            text: 'Format',
            width: 100,
            dataIndex: 'format',
            editor: {
                xtype: 'textfield'
            }
        },
        {
            text: 'Асуулт',
            flex: 1,
            dataIndex: 'text',
            editor: {
                xtype: 'textfield',
                allowBlank: false
            }
        }
    ],
    store: 'Questions'
});

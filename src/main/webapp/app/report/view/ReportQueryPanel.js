Ext.define('Report.view.ReportQueryPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.reportQueryPanel',
    title: 'Тайлан',
    layout: {
        type: 'border',
        padding: 5
    },
    items: [
        {
            region: 'center',
            title:'Query',
            dockedItems:{
                xtype:'toolbar',
                items:[
                    {
                        text:'Шалгах'
                    }
                ]
            },
            border:true,
            bodyStyle: 'background-color:'+PANEL_COLOR+'',
            layout:'vbox',
            items:[
                {
                    xtype: 'textareafield',
                    id: 'codearea',
                    resizable:true,
                    name:'query',
                    title: 'query',
                    allowBlank: false,
                    flex: 1,
                    width: '100%',
                    listeners: {
                        afterrender: function () {
                            var textarea = Ext.getCmp('codearea');
                            var codemirror = CodeMirror.fromTextArea(textarea.inputEl.dom, {
                                mode: 'text/x-plsql'
                            });
                            codemirror.on("change", function () {
                                var val = Ext.ComponentQuery.query('textareafield[id="codearea"]')[0].bodyEl.dom.innerText;
                                Ext.ComponentQuery.query('textareafield[id="codearea"]')[0].setValue(val);
                            })

                        }
                    }
                }
            ]
        },
        {
            xtype: 'grid',
            region: 'east',
            width:350,
            title: 'Асуултын жагсаалт',
            action:'queryColumnGrid',
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
        }
    ]
});

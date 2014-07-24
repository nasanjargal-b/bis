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
            title: 'Query',
            dockedItems: {
                xtype: 'toolbar',
                items: [
                    {
                        text: 'Шалгах',
                        action: 'check',
                        icon: '/resources/images/check-query-16px.png'
                    }
                ]
            },
            border: true,
            bodyStyle: 'background-color:' + PANEL_COLOR + '',
            layout: 'vbox',
            items: [
                {
                    xtype: 'textareafield',
                    id: 'codearea',
                    resizable: true,
                    name: 'query',
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
            width: 350,
            title: 'Асуултын жагсаалт',
            action: 'queryColumnGrid',
            forceFit: true,
            multiSelect: true,
            plugins: Ext.create('Ext.grid.plugin.CellEditing', {
                clicksToEdit: 1
            }),
            viewConfig: {
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
                    text: 'Багана',
                    flex: 1,
                    dataIndex: 'name',
                    editor: {
                        xtype: 'textfield',
                        allowBlank: false
                    }
                },
                {
                    text: 'Төрөл',
                    width: 100,
                    dataIndex: 'columnType',
                    editor: {
                        xtype: 'combo',
                        allowBlank: false,
                        displayField: 'value',
                        valueField: 'id',
                        store: Ext.create('Ext.data.Store', {
                            fields: ['id', 'value'],
                            data: [
                                {id: 'TEXT', value: 'Текст'},
                                {id: 'NUMERIC', value: 'Тоо'},
                                {id: 'DATE', value: 'Огноо'},
                                {id: 'TIME', value: 'Цаг'}
                            ]
                        })
                    },
                    renderer: function (value) {
                        if (value == 'TEXT') return 'Текст';
                        if (value == 'NUMERIC') return 'Тоо';
                        if (value == 'DATE') return 'Огноо';
                        if (value == 'TIME') return 'Цаг';
                    }
                },
                {
                    xtype: 'checkcolumn',
                    text: '%',
                    width: 30,
                    dataIndex: 'percent'
                },
                {
                    text: 'Хөлийн дүн',
                    dataIndex: 'summaryType',
                    width: 70,
                    editor: {
                        xtype: 'combo',
                        editable: false,
                        valueField: 'value',
                        displayField: 'display',
                        tpl: new Ext.XTemplate('<tpl for="."><div style="height:22px;" class="x-boundlist-item" role="option">{display}</div></tpl>'),
                        store: Ext.create('Ext.data.Store', {
                            fields: ['value', 'display'],
                            data: [
                                {value: null, display: ''},
                                {value: 'SUM', display: 'SUM'},
                                {value: 'AVG', display: 'AVG'},
                                {value: 'COUNT', display: 'COUNT'},
                                {value: 'MAX', display: 'MAX'},
                                {value: 'MIN', display: 'MIN'}
                            ]
                        })
                    }
                }
            ]
        }
    ]
});

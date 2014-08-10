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
            padding:'0 5 0 0',
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
            layout: 'fit',
            items: [
                {
                    xtype: 'textareafield',
                    resizable: false,
                    autoScroll:false,
                    name: 'query',
                    preventScrollbars: true,
                    allowBlank: false,
                    flex: 1,
                    listeners: {
                        afterrender: function (field) {
                            var codemirror = CodeMirror.fromTextArea(field.inputEl.dom, {
                                mode: 'text/x-plsql'
                            });
                            codemirror.setValue(field.getValue());
                            codemirror.on("change", function () {
                                var val = codemirror.getValue();
                                field.setValue(val);
                            })

                        }
                    }
                }
            ]
        },
        {
            xtype: 'grid',
            region: 'east',
            width: '40%',
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
                },
                getRowClass: function (record, wIndex, rp, ds) {
                    if (record.get('error'))
                        return 'u-row-cell-error';
                },
                listeners: {
                    render: function (view) {
                        view.tip = Ext.create('Ext.tip.ToolTip', {
                            target: view.el,
                            delegate: view.itemSelector,
                            trackMouse: true,
                            renderTo: Ext.getBody(),
                            listeners: {
                                beforeshow: function (tip) {
                                    var record = view.getRecord(tip.triggerElement);
                                    if (!record.get('error')) return false;
                                    var tooltip = record.get('errorMsg');
                                    if (tooltip) {
                                        tip.update(tooltip);
                                    } else {
                                        tip.on('show', function () {
                                            Ext.defer(tip.hide, 10, tip);
                                        }, tip, {single: true});
                                    }
                                }
                            }
                        });
                    }
                }
            },
            forceFit:true,
            columns: [
                {
                    text: 'Код',
                    width: 80,
                    dataIndex: 'code'
                },
                {
                    text: 'Баганы нэр',
                    flex: 1,
                    dataIndex: 'name',
                    editor: {
                        xtype: 'textfield'
                    }
                },
                {
                    text: 'Төрөл',
                    width: 70,
                    dataIndex: 'columnType',
                    editor: {
                        xtype: 'combo',
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

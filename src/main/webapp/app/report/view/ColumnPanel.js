Ext.define('Report.view.ColumnPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.columnPanel',
    title: 'Тайлангын бүтэц',
    layout: {
        type: 'border',
        padding: 5
    },
    items: [
        {
            xtype: 'questionGrid',
            region: 'west',
            padding: '0 5 0 0'
        },
        {
            xtype: 'grid',
            title: 'Багана',
            action: 'columnGrid',
            region: 'center',
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
            forceFit: true,
            multiSelect: true,
            columns: [
                {
                    text: 'Код',
                    dataIndex: 'code',
                    width: 100,
                    editor: {
                        xtype: 'textfield',
                        allowBlank: false
                    }
                },
                {
                    text: 'Нэр',
                    dataIndex: 'name',
                    width: 150,
                    editor: {
                        xtype: 'textfield',
                        allowBlank: false
                    }
                },
                {
                    text: 'Төрөл',
                    width: 100,
                    dataIndex: 'columnType',
                    renderer: function (value) {
                        if (value == 'TEXT') return 'Текст';
                        if (value == 'NUMERIC') return 'Тоо';
                        if (value == 'SINGLE_CHOICE') return 'Нэг сонголттой';
                        if (value == 'MULTIPLE_CHOICE') return 'Олон сонголттой';
                        if (value == 'DATE') return 'Огноо';
                        if (value == 'TIME') return 'Цаг';
                        if (value == 'GROUP') return 'Групп';
                    }
                },
                {
                    text: 'Тооцоолох',
                    dataIndex: 'calcType',
                    width: 100,
                    getEditor: function (record) {
                        var data = [];

                        switch (record.get('columnType')) {
                            case 'TEXT':
                            case 'DATE':
                            case 'TIME':
                                data = [
                                    {value: 'NORMAL', display: ''},
                                    {value: 'GROUP', display: 'GROUP'},
                                    {value: 'COUNT', display: 'COUNT'}
                                ];
                                break;
                            case 'NUMERIC':
                                data = [
                                    {value: 'NORMAL', display: ''},
                                    {value: 'GROUP', display: 'GROUP'},
                                    {value: 'SUM', display: 'SUM'},
                                    {value: 'AVG', display: 'AVG'},
                                    {value: 'COUNT', display: 'COUNT'},
                                    {value: 'MAX', display: 'MAX'},
                                    {value: 'MIN', display: 'MIN'}
                                ];
                                break;
                            case 'SINGLE_CHOICE':
                            case 'MULTIPLE_CHOICE':
                                data = [
                                    {value: 'GROUP', display: 'GROUP'},
                                    {value: 'COUNT', display: 'COUNT'}
                                ];
                                break;
                        }

                        return Ext.create('Ext.grid.CellEditor', {
                            field: Ext.createWidget('combo', {
                                editable: false,
                                valueField: 'value',
                                displayField: 'display',
                                tpl: new Ext.XTemplate('<tpl for="."><div style="height:22px;" class="x-boundlist-item" role="option">{display}</div></tpl>'),
                                store: Ext.create('Ext.data.Store', {
                                    fields: ['value', 'display'],
                                    data: data
                                })
                            })
                        });
                    },
                    renderer: function (value) {
                        if (value == 'NORMAL')
                            return '';

                        return value;
                    }
                },
                {
                    text: 'Нөхцөл',
                    dataIndex: 'filter',
                    flex: .5,
                    renderer: function (value, metaData, record) {
                        switch (record.get('columnType')) {
                            case 'SINGLE_CHOICE':
                            case 'MULTIPLE_CHOICE':
                                record.set('filter', null);
                                var val = '';
                                record.choices().each(function (choice) {
                                    if (choice.get('id') == record.get('choiceId')) {
                                        val = choice.get('text');
                                    }
                                });

                                return val;
                            default:
                                return value;
                        }
                    },
                    getEditor: function (record) {
                        switch (record.get('columnType')) {
                            case 'SINGLE_CHOICE':
                            case 'MULTIPLE_CHOICE':
                                var value = record.get('choiceId');
                                return Ext.create('Ext.grid.CellEditor', {
                                    field: Ext.createWidget('combo', {
                                        editable: false,
                                        valueField: 'id',
                                        displayField: 'text',
                                        queryMode: 'local',
                                        tpl: new Ext.XTemplate('<tpl for="."><div style="height:22px;" class="x-boundlist-item" role="option">{text}</div></tpl>'),
                                        store: record.choices(),
                                        value: value,
                                        listeners: {
                                            select: function (cmb, records) {
                                                var value = records[0].get('id');
                                                record.set('choiceId', value);
                                            }
                                        }
                                    })
                                });
                            default :
                                return Ext.create('Ext.grid.CellEditor', {
                                    field: Ext.createWidget('textfield', {
                                        allowBlank: false
                                    })
                                });
                        }
                    }
                }
            ]
        }
    ]
});
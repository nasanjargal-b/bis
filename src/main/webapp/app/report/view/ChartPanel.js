Ext.define('Report.view.ChartPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.chartPanel',
    title: 'Chart',
    layout: {
        type: 'border',
        padding: 5
    },
    items: [
        {
            xtype: 'grid',
            title: 'Багана',
            action: 'chartColumnGrid',
            region: 'west',
            width: 500,
            plugins: Ext.create('Ext.grid.plugin.CellEditing', {
                clicksToEdit: 1
            }),
            viewConfig: {
                copy: true,
                plugins: {
                    ptype: 'gridviewdragdrop',
                    ddGroup: 'fieldGroup'
                }
            },
            forceFit: true,
            multiSelect: true,
            columns: [
                {
                    text: 'Код',
                    dataIndex: 'code',
                    width: 100
                },
                {
                    text: 'Нэр',
                    dataIndex: 'name',
                    width: 150
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
                    width: 70,
                    renderer: function (value) {
                        if (value == 'NORMAL')
                            return '';

                        return value;
                    }
                }
            ]
        },
        {
            region: 'center',
            xtype: 'panel',
            border: false,
            layout: 'border',
            items: [
                {
                    region: 'north',
                    xtype: 'panel',
                    bodyStyle: 'background-color:'+PANEL_COLOR+'',
                    border: false,
                    defaults: {
                        padding: '0 0 0 5',
                        width: 300
                    },
                    items: [
                        {
                            xtype: 'combo',
                            name: 'chart',
                            fieldLabel: 'Төрөл сонгох',
                            editable: false,
                            valueField: 'id',
                            displayField: 'name',
                            tpl: new Ext.XTemplate('<tpl for="."><div style="height:22px;" class="x-boundlist-item" role="option">{name}</div></tpl>'),
                            store: Ext.create('Ext.data.Store', {
                                fields: ['id', 'name'],
                                data: [
                                    {id: null, name: ''},
                                    {id: 'BAR', name: 'Bar Chart'},
                                    {id: 'PIE', name: 'Pie Chart'},
                                    {id: 'PIED', name: 'Donut Chart'}
                                ]
                            })
                        },
                        {
                            xtype: 'textfield',
                            name: 'chartCategory',
                            ddGroup: 'fieldGroup',
                            readOnly: true,
                            fieldLabel: 'Категори багана'
                        }
                    ]
                },
                {
                    region: 'center',
                    xtype: 'grid',
                    padding: '0 0 0 5',
                    action: 'chartSeriesGrid',
                    plugins: Ext.create('Ext.grid.plugin.CellEditing', {
                        clicksToEdit: 1
                    }),
                    viewConfig: {
                        plugins: {
                            ptype: 'gridviewdragdrop',
                            ddGroup: 'fieldGroup'
                        }
                    },
                    multiSelect: true,
                    columns: [
                        {
                            text: 'Код',
                            dataIndex: 'field',
                            width: 100
                        },
                        {
                            text: 'Төрөл',
                            width: 100,
                            dataIndex: 'type',
                            editor: {
                                xtype: 'combo',
                                allowBlank: false,
                                editable: false,
                                valueField: 'id',
                                displayField: 'name',
                                store: Ext.create('Ext.data.Store', {
                                    fields: ['id', 'name'],
                                    data: [
                                        {id: 'COLUMN', name: 'Багана'},
                                        {id: 'LINE', name: 'Шугаман'}
                                    ]
                                })
                            },
                            renderer: function (value) {
                                switch (value) {
                                    case 'COLUMN':
                                        return'Багана';
                                    case 'LINE':
                                        return'Шугаман';
                                    case 'PIE':
                                        return'Pie';
                                }
                            }
                        }
                    ]
                }
            ]
        }
    ]
});
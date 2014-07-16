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
                    ptype: 'gridviewdragdrop'
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
                }
            ]
        }
    ]
});
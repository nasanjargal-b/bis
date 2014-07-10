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
                    editor: {
                        xtype: 'combo',
                        editable: false,
                        valueField: 'value',
                        displayField: 'display',
                        tpl: new Ext.XTemplate('<tpl for="."><div style="height:22px;" class="x-boundlist-item" role="option">{display}</div></tpl>'),
                        store: Ext.create('Ext.data.Store', {
                            fields: ['value', 'display']
                        })
                    },
                    renderer: function (value) {
                        if (value == 'NORMAL')
                            return '';

                        return value;
                    }
                },
                {
                    text: 'Тооцоолуур',
                    flex: .5
                }
            ]
        }
    ]
});
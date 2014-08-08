Ext.define('Report.view.ReportParameterPanel', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.reportParameterPanel',
    title: 'Параметер',
    forceFit: true,
    multiSelect: true,
    plugins: Ext.create('Ext.grid.plugin.CellEditing', {
        clicksToEdit: 1
    }),
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
            {
                text: 'Query засах',
                icon: '/resources/images/sql-16px.png',
                hidden: true,
                action: 'sql'
            }
        ]
    },
    columns: [
        {
            text: 'Код',
            dataIndex: 'code',
            width: 150,
            editor: {
                xtype: 'textfield',
                allowBlank: false
            }
        },
        {
            text: 'Төрөл',
            dataIndex: 'type',
            width: 150,
            editor: {
                xtype: 'combo',
                allowBlank: false,
                editable: false,
                valueField: 'id',
                displayField: 'value',
                queryMode: 'local',
                store: Ext.create('Ext.data.Store', {
                    fields: ['id', 'value'],
                    data: [
                        {id: 'QUERY', value: 'Query'},
                        {id: 'RESEARCH', value: 'Судалгаа'},
                        {id: 'DISTRICT', value: 'Сум/Дүүрэг'},
                        {id: 'CITY', value: 'Хот/Аймаг'}
                    ]
                })
            },
            renderer: function (value) {
                if (value == 'QUERY') return 'Query';
                if (value == 'RESEARCH') return 'Судалгаа';
                if (value == 'DISTRICT') return 'Сум/Дүүрэг';
                if (value == 'CITY') return 'Хот/Аймаг';
            }
        },
        {
            xtype: 'checkcolumn',
            text: 'Асуух',
            dataIndex: 'prompt',
            width: 50
        },
        {
            text: 'Үндсэн утга',
            dataIndex: 'data',
            flex: 1,
            renderer: function (value, metaData, record) {
                var valStr = '';
                switch (record.get('type')) {
                    case 'RESEARCH':
                        Ext.getStore('Research').each(function (rec) {
                            if (value == rec.get('id'))
                                valStr = rec.get('year') + ' - ' + rec.get('name');
                        });
                        return valStr;
                    case 'CITY':
                        Ext.getStore('City').each(function (rec) {
                            if (value == rec.get('id'))
                                valStr = rec.get('name');
                        });
                        return valStr;
                    case 'DISTRICT':
                        Ext.getStore('District').each(function (rec) {
                            if (value == rec.get('id'))
                                valStr = rec.get('cityName') + ', ' + rec.get('name');
                        });
                        return valStr;
                    default:
                        return value;
                }
            },
            getEditor: function (record) {
                switch (record.get('type')) {
                    case 'RESEARCH':
                        return Ext.create('Ext.grid.CellEditor', {
                            field: Ext.createWidget('combo', {
                                editable: false,
                                valueField: 'id',
                                displayField: 'year',
                                tpl: new Ext.XTemplate('<tpl for="."><div style="height:22px;" class="x-boundlist-item" role="option">{year} - {name}</div></tpl>'),
                                displayTpl: '<tpl for=".">{year} - {name}</tpl>',
                                queryMode: 'local',
                                store: 'Research'
                            })
                        });
                    case 'CITY':
                        return Ext.create('Ext.grid.CellEditor', {
                            field: Ext.createWidget('combo', {
                                editable: false,
                                valueField: 'id',
                                displayField: 'name',
                                queryMode: 'local',
                                store: 'City'
                            })
                        });
                    case 'DISTRICT':
                        return Ext.create('Ext.grid.CellEditor', {
                            field: Ext.createWidget('combo', {
                                forceSelection: true,
                                valueField: 'id',
                                displayField: 'name',
                                tpl: new Ext.XTemplate('<tpl for="."><div style="height:22px;" class="x-boundlist-item" role="option">{cityName}, {name}</div></tpl>'),
                                displayTpl: '<tpl for=".">{cityName}, {name}</tpl>',
                                queryMode: 'local',
                                store: 'District'
                            })
                        });
                    default:
                        return false;
                }
            }
        }
    ]
});

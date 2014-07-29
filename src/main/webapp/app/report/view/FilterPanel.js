Ext.define('Report.view.FilterPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.filterPanel',
    title: 'Шүүлтүүр',
    layout: {
        type: 'border',
        padding: 5
    },
    border: false,
    items: [
        {
            xtype: 'questionGrid',
            region: 'west',
            padding: '0 5 0 0'
        },
        {
            xtype: 'grid',
            action: 'filterGrid',
            title: 'Шүүлтүүр',
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
                    width: 100
                },
                {
                    text: 'Төрөл',
                    dataIndex: 'columnType',
                    width: 100,
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
                    text: 'Шүүлтүүр',
                    dataIndex: 'data',
                    minWidth: 200,
                    flex: 1,
                    renderer: function (value, metaData, record) {
                        var valStr = '';
                        switch (record.get('type')) {
                            case 'RESEARCH':
                                Ext.getStore('Research').each(function (rec) {
                                    if (value == rec.get('id'))
                                        valStr = '$ = \'' + rec.get('year') + ' - ' + rec.get('name') + '\'';
                                });
                                return valStr;
                            case 'CITY':
                                Ext.getStore('City').each(function (rec) {
                                    if (value == rec.get('id'))
                                        valStr = '$ = \'' + rec.get('name') + '\'';
                                });
                                return valStr;
                            case 'DISTRICT':
                                Ext.getStore('District').each(function (rec) {
                                    if (value == rec.get('id'))
                                        valStr = '$ = \'' + rec.get('cityName') + ', ' + rec.get('name') + '\'';
                                });
                                return valStr;
                            default:
                                switch (record.get('columnType')) {
                                    case 'SINGLE_CHOICE':
                                    case 'MULTIPLE_CHOICE':
                                        var val = [];
                                        record.choices().each(function (choice) {
                                            for (var i = 0; i < value.length; i++) {
                                                if (choice.get('id') == value[i]) {
                                                    val[val.length] = choice.get('text');
                                                }
                                            }
                                        });
                                        return '$ IN (\'' + val.join("\', \'") + '\')';
                                    default :
                                        return value;
                                }
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
                                switch (record.get('columnType')) {
                                    case 'SINGLE_CHOICE':
                                    case 'MULTIPLE_CHOICE':
                                        return Ext.create('Ext.grid.CellEditor', {
                                            field: Ext.createWidget('combo', {
                                                editable: false,
                                                valueField: 'id',
                                                displayField: 'text',
                                                multiSelect: true,
                                                queryMode: 'local',
                                                store: record.choices()
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
                }
            ]
        }
    ]
});
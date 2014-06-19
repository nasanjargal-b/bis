Ext.define('Report.controller.ReportViewCtrl', {
    extend: 'Ext.app.Controller',
    init: function () {
        this.control({
            'paramPanel': {
                afterrender: function (panel) {
                    var me = this;
                    Ext.Ajax.request({
                        url: '/report-mod/report/view/params.json?reportId=' + reportId,
                        success: function (response) {
                            var result = Ext.decode(response.responseText);
                            var paramViews = result.data;
                            if (paramViews && paramViews.length > 0) {
                                var baseParamPanel = panel.add({
                                    xtype: 'fieldset',
                                    width: '100%',
                                    title: 'Үндсэн параметер'
                                });
                                me.initParam(baseParamPanel, paramViews);
                            }
                        }
                    })
                }
            },
            'combobox[action="query"]': {
                change: function (cmb, value) {
                    var me = this;
                    var panel = cmb.up('paramPanel');
                    Ext.Ajax.request({
                        url: '/report-mod/report/view/params.json?queryId=' + value,
                        success: function (response) {

                            var oldPanel = panel.down('fieldset[action="queryFieldSet"]');
                            if (oldPanel) {
                                panel.remove(oldPanel);
                            }


                            var result = Ext.decode(response.responseText);
                            var paramViews = result.data;
                            if (paramViews && paramViews.length > 0) {
                                var queryParamPanel = panel.add({
                                    xtype: 'fieldset',
                                    action: 'queryFieldSet',
                                    width: '100%',
                                    title: 'Query Параметер'
                                });
                                me.initParam(queryParamPanel, paramViews);
                            }
                        }
                    })
                }
            },
            'paramPanel button[action="search"]': {
                click: function (btn) {
                    this.showReport('HTML');
                }
            },
            'reportViewPanel button[action="refresh"]': {
                click: function (btn) {
                    this.showReport('HTML');
                }
            },
            'reportViewPanel button[action="download"]': {
                click: function (btn) {
                    this.showReport(btn.data);
                }
            },
            'reportViewPanel button[action="print"]': {
                click: function (btn) {
                    this.printReport();
                }
            }
        });
    },
    initParam: function (panel, paramViews) {
        for (var i = 0; i < paramViews.length; i++) {
            var paramView = paramViews[i];
            var field = this.getFieldByParam(paramView);
            if (field) {
                panel.add(field);
            }
        }
    },
    getFieldByParam: function (paramView) {
        switch (paramView.param.type) {
            case 'INTEGER':
                return {
                    xtype: 'numberfield',
                    allowDecimal: false,
                    fieldLabel: paramView.param.label,
                    name: paramView.param.name,
                    allowBlank: false,
                    width: 360
                };
            case 'DECIMAL':
                return {
                    xtype: 'numberfield',
                    fieldLabel: paramView.param.label,
                    name: paramView.param.name,
                    allowBlank: false,
                    width: 360
                };
            case 'DATE':
                return {
                    xtype: 'datefield',
                    fieldLabel: paramView.param.label,
                    name: paramView.param.name,
                    allowBlank: false,
                    format: 'Y-m-d',
                    width: 360
                };
            case 'TIME':
                return {
                    xtype: 'timefield',
                    fieldLabel: paramView.param.label,
                    name: paramView.param.name,
                    allowBlank: false,
                    format: 'H:i:s',
                    width: 360
                };
            case 'TEXT':
                return {
                    xtype: 'textfield',
                    fieldLabel: paramView.param.label,
                    name: paramView.param.name,
                    allowBlank: false,
                    width: 360
                };
            case 'BOOLEAN':
                return {
                    xtype: 'radiogroup',
                    fieldLabel: paramView.param.label,
                    name: paramView.param.name,
                    allowBlank: false,
                    width: 230,
                    items: [
                        {
                            boxLabel: 'Тийм',
                            name: paramView.param.name,
                            inputValue: true
                        },
                        {
                            boxLabel: 'Үгүй',
                            name: paramView.param.name,
                            inputValue: false
                        }
                    ]
                };
            case 'CITY':
                return this.getCityField(paramView);
            case 'DISTRICT':
                return this.getDistrictField(paramView);
            case 'SINGLE_CHOICE':
                return this.getSingleField(paramView);
            case 'MULTIPLE_CHOICE':
                return this.getMultipleField(paramView);

        }
    },
    getCityField: function (paramView) {
        return {
            xtype: 'combo',
            fieldLabel: paramView.param.label,
            allowBlank: false,
            queryMode: 'local',
            editable: false,
            name: paramView.param.name,
            width: 360,
            store: Ext.create('Report.store.City'),
            valueField: 'id',
            displayField: 'name'
        };
    },
    getDistrictField: function (paramView) {
        return {
            xtype: 'fieldset',
            title: paramView.param.label,
            items: [
                {
                    xtype: 'combo',
                    fieldLabel: 'Аймаг/Хот',
                    allowBlank: false,
                    queryMode: 'local',
                    editable: false,
                    width: 343,
                    store: Ext.create('Report.store.City'),
                    valueField: 'id',
                    displayField: 'name',
                    listeners: {
                        change: function (cmb, value) {
                            var record = cmb.getStore().getById(value);
                            var districtCmb = cmb.up('fieldset').down('combo[action="district"]');
                            if (record) {
                                districtCmb.bindStore(record.districts())
                                districtCmb.setValue();
                            }
                        }
                    }
                },
                {
                    xtype: 'combo',
                    fieldLabel: 'Сум/Дүүрэг',
                    name: paramView.param.name,
                    action: 'district',
                    allowBlank: false,
                    queryMode: 'local',
                    editable: false,
                    valueField: 'id',
                    displayField: 'name',
                    width: 343,
                    padding: '0 0 5 0'
                }
            ]
        };
    },
    getSingleField: function (paramView) {
        var data = paramView.data;
        var row = data[0];
        if (row && Array.isArray(row) && row.length == 1) {
            for (var i = 0; i < data.length; i++) {
                var value = data[i];
                data[i] = [value[0], value[0]];
            }
        } else if (row && !Array.isArray(row)) {
            for (var i = 0; i < data.length; i++) {
                var value = data[i];
                data[i] = [value, value];
            }
        }
        return {
            xtype: 'combo',
            fieldLabel: paramView.param.label,
            allowBlank: false,
            queryMode: 'local',
            editable: false,
            name: paramView.param.name,
            width: 360,
            valueField: 'id',
            displayField: 'name',
            store: Ext.create('Ext.data.ArrayStore', {
                fields: [
                    {name: 'id'},
                    {name: 'name'}
                ],
                data: data
            })
        };
    },
    getMultipleField: function (paramView) {
        var data = paramView.data;
        var row = data[0];
        if (row && Array.isArray(row) && row.length == 1) {
            for (var i = 0; i < data.length; i++) {
                var value = data[i];
                data[i] = [value[0], value[0]];
            }
        } else if (row && !Array.isArray(row)) {
            for (var i = 0; i < data.length; i++) {
                var value = data[i];
                data[i] = [value, value];
            }
        }

        var items = [];
        for (var i = 0; i < data.length; i++) {
            var row = data[i];
            items[i] = {
                boxLabel: row[1],
                name: paramView.param.name,
                inputValue: row[0]
            };
        }

        return {
            xtype: 'checkboxgroup',
            fieldLabel: paramView.param.label,
            name: paramView.param.name,
            columns: 1,
            items: items
        };
    },
    showReport: function (type) {

        var form = Ext.ComponentQuery.query('paramPanel')[0];
        var reportPanel = Ext.ComponentQuery.query('reportViewPanel')[0];

        if (form.getForm().isValid()) {
            var params = form.getValues();
            var url = '/report-mod/report/view/show/' + reportId + '.html?type=' + type;
            for (var key in params) {
                var value = params[key];
                if (!Array.isArray(value))
                    url += '&' + key + '=' + value;
                else {
                    for (var i = 0; i < value.length; i++) {
                        var val = value[i];
                        url += '&' + key + '=' + val;
                    }
                }
            }

            var frame = document.getElementById('reportFrame');
            frame.src = url;
        }
    },
    printReport: function () {
        var frame = document.getElementById('reportFrame');

        frame.focus();
        frame.contentWindow.print();
    }
});
Ext.define('Report.controller.ReportViewCtrl', {
    extend: 'Ext.app.Controller',
    init: function () {
        this.control({
            'reportViewTreePanel': {
                itemclick: function (view, record) {
                    if (record.isLeaf()) {
                        this.show(record.get('id'));
                    }
                }
            },
            'component[action="parameter"]': {
                change: function (field) {
                    var form = field.up('form');
                    if (form && form.getForm().isValid()) {
                        var win = form.up('window');
                        this.buildReport(win.report, win);
                    }
                }
            },
            'reportViewWindow button[action="refresh"]': {
                click: function (btn) {
                    btn.up('panel').down('grid').getStore().reload();
                }
            },
            'reportViewWindow button[action="download"]': {
                click: function (btn) {
                    var data = btn.data;
                    this.download(data, btn.up('window'));
                }
            },
            'reportViewWindow button[action="print"]': {
                click: function (btn) {
                    var win = btn.up('window');
                    this.print(win);
                }
            }
        });
    },
    getMainPanel: function () {
        return Ext.ComponentQuery.query('#reportViewMainPanel')[0];
    },
    show: function (reportId, districtId) {
        var me = this;

        Ext.Ajax.request({
            url: '/report-mod/view/metadata.json',
            params: {
                id: reportId
            },
            success: function (response) {
                var result = Ext.decode(response.responseText);
                var report = result.data;
                me.showWindow(report, districtId);
            }
        });
    },
    showWindow: function (report, districtId) {
        var parameterForm = Ext.createWidget('form', {
            region: 'north',
            layout: {
                type: 'vbox',
                padding: 5
            },
            bodyStyle: 'background-color:' + PANEL_COLOR + '',
            hidden: true
        });

        for (var i = 0; i < report.parameters.length; i++) {
            var parameter = report.parameters[i];
            if (parameter.prompt && parameter.type != 'QUERY') {
                parameterForm.show();
                var cmp = null;
                switch (parameter.type) {
                    case 'RESEARCH':
                        cmp = Ext.createWidget('combo', {
                            fieldLabel: parameter.name,
                            allowBlank: false,
                            name: parameter.code,
                            action: 'parameter',
                            editable: false,
                            valueField: 'id',
                            displayField: 'year',
                            width: 300,
                            tpl: new Ext.XTemplate('<tpl for="."><div style="height:22px;" class="x-boundlist-item" role="option">{year} - {name}</div></tpl>'),
                            displayTpl: '<tpl for=".">{year} - {name}</tpl>',
                            queryMode: 'local',
                            store: 'Research'
                        });
                        cmp.setValue(parameter.researchId);
                        break;
                    case 'DISTRICT':
                        cmp = Ext.createWidget('combo', {
                            fieldLabel: parameter.name,
                            allowBlank: false,
                            name: parameter.code,
                            action: 'parameter',
                            forceSelection: true,
                            valueField: 'id',
                            displayField: 'name',
                            width: 300,
                            tpl: new Ext.XTemplate('<tpl for="."><div style="height:22px;" class="x-boundlist-item" role="option">{cityName}, {name}</div></tpl>'),
                            displayTpl: '<tpl for=".">{cityName}, {name}</tpl>',
                            queryMode: 'local',
                            store: 'District'
                        });
                        if (districtId) {
                            cmp.setValue(parseInt(districtId + ''));
                        } else
                            cmp.setValue(parameter.districtId);
                        break;
                    case 'CITY':
                        cmp = Ext.createWidget('combo', {
                            fieldLabel: parameter.name,
                            allowBlank: false,
                            name: parameter.code,
                            action: 'parameter',
                            editable: false,
                            valueField: 'id',
                            displayField: 'name',
                            width: 300,
                            queryMode: 'local',
                            store: 'City'
                        });
                        cmp.setValue(parameter.cityId);
                        break;
                }
                parameterForm.add(cmp);
            }

        }

        var win = Ext.create('Report.view.ReportViewWindow', {
            title: 'Тайлан: ' + report.name,
            report: report,
            items: {
                xtype: 'panel',
                border: false,
                layout: 'border',
                items: [
                    parameterForm,
                    {
                        region: 'center',
                        xtype: 'component',
                        action: 'reportFrame',
                        autoScroll: true
                    }
                ]
            }
        });

        this.buildReport(report, win);
    },
    buildReport: function (report, win) {
        var form = win.down('form');
        if (form.getForm().isValid()) {
            var parameterValues = form.getValues();
            var store = this.createStore(report, parameterValues);
            var chart = this.createChart(report, store);
            store.load({
                callback: function () {

                    win.chart = chart;

                    Ext.Ajax.request({
                        url: '/report-mod/view/file.html?reportId=' + report.id + '&type=HTML',
                        params: parameterValues,
                        success: function (response) {
                            var frameCmp = win.down('component[action="reportFrame"]');
                            frameCmp.update(response.responseText)
                            if (chart)
                                Ext.createWidget('panel', {
                                    layout: 'fit',
                                    border: false,
                                    height: 400,
                                    items: chart,
                                    renderTo: 'chart'
                                });
                        }
                    });
                }
            })
        }
    },
    createChart: function (report, store) {
        if (report.chart) {
            var chart = {
                animate: true,
                store: store,
                shadow: true,
                legend: {
                    position: 'right',
                    boxStroke: '#ffffff',
                    labelFont: '11px Helvetica, sans-serif'
                }
            }

            var fields = [];
            var title = null;
            for (var i = 0; i < report.columns.length; i++) {
                var column = report.columns[i];
                if (column.code == report.chartCategory) {
                    title = column.name;
                    break;
                }
            }
            if (report.chart == 'BAR') {
                var columns = [];

                for (var i = 0; i < report.chartSerieses.length; i++) {
                    var chartSeries = report.chartSerieses[i];
                    fields[i] = chartSeries.field;
                    if (chartSeries.type == 'COLUMN')
                        columns[columns.length] = chartSeries.field;
                }

                var axes = [
                    {
                        type: 'Numeric',
                        position: 'left',
                        fields: fields,
                        label: {
                            renderer: Ext.util.Format.numberRenderer('0,0')
                        },
                        grid: true,
                        minimum: 0,
                        title: 'Тоон утга'
                    },
                    {
                        type: 'Category',
                        position: 'bottom',
                        fields: [report.chartCategory],
                        title: title,
                        label: {
                            rotate: {
                                degrees: -90
                            }
                        }
                    }
                ];

                chart.axes = axes;

                var series = [];

                for (var i = 0; i < report.chartSerieses.length; i++) {
                    var chartSeries = report.chartSerieses[i];
                    if (chartSeries.type != 'COLUMN') {

                        var title = null;

                        for (var j = 0; j < report.columns.length; j++) {
                            var reportColumn = report.columns[j];
                            if (chartSeries.field == reportColumn.code) {
                                title = reportColumn.name;
                                break;
                            }
                        }

                        series[series.length] = {
                            type: 'line',
                            axis: 'left',
                            xField: report.chartCategory,
                            yField: chartSeries.field,
                            title: title
                        };
                    }

                }

                if (columns.length > 0) {
                    var titles = [];

                    for (var i = 0; i < columns.length; i++) {
                        var column = columns[i];
                        for (var j = 0; j < report.columns.length; j++) {
                            var reportColumn = report.columns[j];
                            if (column == reportColumn.code) {
                                titles[i] = reportColumn.name;
                                break;
                            }
                        }
                    }

                    series[series.length] = {
                        type: 'column',
                        axis: 'left',
                        xField: report.chartCategory,
                        yField: columns,
                        title: titles,
                        label: {
                            display: 'insideEnd',
                            contrast: true,
                            'text-anchor': 'middle',
                            orientation: 'vertical',
                            field: columns,
                            renderer: Ext.util.Format.numberRenderer('0,0')
                        }
                    }
                }

                chart.series = series;
            } else {
                var donut = 0;
                if (report.chart == 'PIED') donut = 50;

                series = [
                    {
                        type: 'pie',
                        field: report.chartSerieses[0].field,
                        showInLegend: true,
                        donut: donut,
                        highlight: {
                            segment: {
                                margin: 20
                            }
                        },
                        label: {
                            field: report.chartCategory,
                            display: 'inside',
                            contrast: true,
                            renderer: function (value, series, record) {
                                var numRender = Ext.util.Format.numberRenderer('0,0');
                                return numRender(record.get(report.chartSerieses[0].field));
                            }
                        }
                    }
                ];

                chart.theme = 'Base:gradients';
                chart.series = series;
            }

            return Ext.create('Ext.chart.Chart', chart);
        }
        return null;
    },
    createStore: function (report, parameterValues) {
        var fields = [];

        for (var i = 0; i < report.columns.length; i++) {
            var rColumn = report.columns[i];
            fields[i] = rColumn.code;

        }
        var store = Ext.create('Ext.data.Store', {
            fields: fields,
            autoLoad: false,
            proxy: {
                type: 'ajax',
                extraParams: parameterValues,
                url: '/report-mod/view/data.json?id=' + report.id,
                reader: {
                    type: 'json',
                    root: 'data'
                }
            }
        });
        return store;
    },
    download: function (data, win) {
        var paramForm = win.down('form');
        if (paramForm.getForm().isValid()) {
            var report = win.report;
            var svg = null;

            var chart = win.chart;
            if (chart) {
                svg = chart.save({
                    type: 'image/svg+xml'
                });
            }

            var formData = paramForm.getValues();

            var items = [
                {
                    xtype: 'hiddenfield',
                    name: 'reportId',
                    value: report.id
                },
                {
                    xtype: 'hiddenfield',
                    name: 'svg',
                    value: svg
                },
                {
                    xtype: 'hiddenfield',
                    name: 'type',
                    value: data
                }
            ];

            for (var key in formData) {
                items[items.length] = {
                    xtype: 'hiddenfield',
                    name: key,
                    value: formData[key]
                };
            }

            var form = Ext.createWidget('form', {
                url: '/report-mod/view/file.html',
                method: 'post',
                standardSubmit: true,
                items: items
            });
            form.submit()
        }
    },
    print: function (win) {
        var cmp = win.down('component[action="reportFrame"]');
        var newstr = document.getElementById(cmp.id).innerHTML;

        var frame = document.createElement('iframe');
        frame.setAttribute('id', 'bis-printFrame');
        frame.setAttribute('name', 'bis-printFrame');
        frame.setAttribute('style', 'width:0px;height:0px;');

        window.document.body.appendChild(frame);

        var newWin = window.frames["bis-printFrame"];
        newWin.document.body.innerHTML = newstr;
        newWin.focus();
        newWin.print();
        window.setTimeout(function () {
            frame = document.getElementById('bis-printFrame');

            window.document.body.removeChild(frame);

        }, 100);
    }
});
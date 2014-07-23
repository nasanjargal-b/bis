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
        var store = this.createStore(report, districtId);
        var chart = this.createChart(report, store);

        store.load({
            callback: function () {
                var win = Ext.create('Report.view.ReportViewWindow', {
                    title: 'Тайлан: ' + report.name,
                    report: report,
                    districtId: districtId,
                    items: {
                        xtype: 'panel',
                        border: false,
                        layout: 'fit',
                        items: [
                            {
                                xtype: 'component',
                                action: 'reportFrame',
                                autoScroll: true
                            }
                        ]
                    }
                });

                win.chart = chart;

                Ext.Ajax.request({
                    url: '/report-mod/view/file.html?reportId=' + report.id + '&type=HTML' + (districtId ? '&districtId=' + districtId : ''),
                    success: function (response) {
                        var frameCmp = win.down('component[action="reportFrame"]');
                        frameCmp.update(response.responseText)
                        if (chart)
                            Ext.createWidget('panel', {
                                layout: 'fit',
                                border: false,
                                width: 554,
                                height: 300,
                                items: chart,
                                renderTo: 'chart'
                            });
                    }
                });
            }
        })
    },
    createChart: function (report, store) {
        if (report.chart) {
            var chart = {
                animate: true,
                store: store,
                shadow: true,
                legend: {
                    position: 'right'
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
                                degrees: -20
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
                        title: titles
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
                            display: 'none',
                            contrast: true
                            //todo renderer value with percentage
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
    createStore: function (report, districtId) {
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
                url: '/report-mod/view/data.json?id=' + report.id + (districtId ? '&districtId=' + districtId : ''),
                reader: {
                    type: 'json',
                    root: 'data'
                }
            }
        });
        return store;
    },
    download: function (data, win) {
        var report = win.report;
        var svg = null;

        var chart = win.chart;
        if (chart) {
            svg = chart.save({
                type: 'image/svg+xml'
            });
        }

        var form = Ext.createWidget('form', {
            url: '/report-mod/view/file.html',
            method: 'post',
            standardSubmit: true,
            items: [
                {
                    xtype: 'hiddenfield',
                    name: 'reportId',
                    value: report.id
                },
                {
                    xtype: 'hiddenfield',
                    name: 'districtId',
                    value: win.districtId
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
            ]
        });

        form.submit({
            reportId: report.id,
            svg: svg,
            type: data
        })
    }
});
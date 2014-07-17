Ext.define('Report.controller.ReportViewCtrl', {
    extend: 'Ext.app.Controller',
    init: function () {
        var me = this; // todo delete
        window.setTimeout(function () { //todo delete
            var tree = Ext.ComponentQuery.query('reportViewTreePanel')[0];
            me.show(tree.getRootNode().childNodes[0].get('id'));
        }, 500);
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
                    console.log(data);
                }
            }
        });
    },
    getMainPanel: function () {
        return Ext.ComponentQuery.query('#reportViewMainPanel')[0];
    },
    show: function (reportId) {
        var me = this;
        Ext.Ajax.request({
            url: '/report-mod/view/metadata.json',
            params: {
                id: reportId
            },
            success: function (response) {
                var result = Ext.decode(response.responseText);
                var report = result.data;

                me.showWindow(report);
            }
        });
    },
    showWindow: function (report) {
        var store = this.createStore(report);
        var grid = this.createGrid(report, store);
        var chart = this.createChart(report, store);

        var items = [grid];

        if (chart) items[1] = {
            xtype: 'panel',
            region: 'north',
            height: 300,
            layout: 'fit',
            items: chart
        };

        var win = Ext.create('Report.view.ReportViewWindow', {
            title: 'Тайлан: ' + report.name,
            items: {
                xtype: 'panel',
                border: false,
                layout: 'border',
                items: items
            }
        });

        return win;
    },
    createChart: function (report, store) {
        console.log(report);
        if (report.chart) {
            var chart = {
                xtype: 'chart',
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
                        title:'Тоон утга'
                    },
                    {
                        type: 'Category',
                        position: 'bottom',
                        fields: [report.chartCategory],
                        title: title
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
                    console.log(columns);
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

                    console.log(titles);

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
                if (report.chart == 'PIED') donut = 30;

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
                            display: 'rotate',
                            contrast: true
                            //todo renderer value with percentage
                        }
                    }
                ];

                chart.theme = 'Base:gradients';
                chart.series = series;
            }

            return chart;
        }
        return null;
    },
    createStore: function (report) {
        var items = [];
        var fields = [];

        for (var i = 0; i < report.columns.length; i++) {
            var rColumn = report.columns[i];
            fields[i] = rColumn.code;

        }
        var store = Ext.create('Ext.data.Store', {
            fields: fields,
            autoLoad: true,
            proxy: {
                type: 'ajax',
                url: '/report-mod/view/data.json?id=' + report.id,
                reader: {
                    type: 'json',
                    root: 'data'
                }
            }
        });
        return store;
    },
    createGrid: function (report, store) {
        var columns = [];

        for (var i = 0; i < report.columns.length; i++) {
            var rColumn = report.columns[i];
            columns[i] = {
                text: rColumn.name,
                dataIndex: rColumn.code,
                width: 150
            }

            if (rColumn.calcType != ('NORMAL' && 'GROUP') || rColumn.columnType == 'NUMERIC') {
                columns[i].align = 'right';
                columns[i].summaryType = 'sum';
            }

            if (rColumn.percent) {
                var renderPercent = function (value) {
                    return value + ' %';
                };
                columns[i].renderer = renderPercent;
                columns[i].summaryRenderer = renderPercent;
            }
        }

        var grid = Ext.createWidget('grid', {
            region: 'center',
            columns: columns,
            features: [
                {
                    ftype: 'summary'
                }
            ],
            store: store
        });

        return grid;
    }
});
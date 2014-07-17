Ext.define('Report.controller.ReportChartCtrl', {
    extend: 'Ext.app.Controller',
    init: function () {
        this.control({
            'reportPanel textfield[name="chartCategory"]': {
                afterrender: function (text) {
                    var body = text.bodyEl;
                    new Ext.dd.DropTarget(body, {
                        ddGroup: 'fieldGroup',
                        notifyEnter: function (ddSource, e, data) {
                            body.stopAnimation();
                            body.highlight();
                        },
                        notifyDrop: function (ddSource, e, data) {
                            var record = ddSource.dragData.records[0];
                            if (!text.isDisabled())
                                text.setValue(record.get('code'));
                            return true;
                        }
                    });
                }
            },
            'combo[name="chart"]': {
                change: this.chartChange
            },
            'chartPanel grid[action="chartSeriesGrid"] gridview': {
                beforedrop: this.addSeries
            },
            'chartPanel grid[action="chartSeriesGrid"]': {
                beforeedit: function (editor) {
                    var value = this.getChartPanel().down('combo[name="chart"]').getValue();
                    if (value != 'BAR')
                        return false;
                    return true;
                }
            },
            'chartPanel grid[action="chartColumnGrid"] gridview': {
                beforedrop: this.removeSeries
            }
        })
    },
    getChartPanel: function () {
        return Ext.ComponentQuery.query('reportPanel')[0].down('chartPanel');
    },
    chartChange: function (combo, value) {
        var store = this.getChartPanel().down('grid[action="chartSeriesGrid"]').getStore();
        if (value == 'PIE' || value == 'PIED') {
            store.each(function (record) {
                record.set('type', 'PIE');
            });
            while (store.getCount() > 1) {
                store.remove(store.last());
            }
        } else {
            store.each(function (record) {
                if (record.get('type') == 'PIE')
                    record.set('type', 'COLUMN');
            })
        }
    },
    addSeries: function (node, data, overModel, dropPosition, dropHandlers) {

        if (data.copy) {
            var chart = this.getChartPanel().down('combo[name="chart"]').getValue();
            var store = Ext.ComponentQuery.query('grid[action="chartSeriesGrid"]')[0].getStore();
            for (var i = 0; i < data.records.length; i++) {
                var record = data.records[i];

                var have = false;
                store.each(function (recordSeries) {
                    if (record.get('code') == recordSeries.get('field'))
                        have = true;
                });
                if (have) continue;
                if ((chart == 'PIE' || chart == 'PIED') && store.getCount() > 0) break;

                if (record.get('columnType') != 'NUMERIC' && (record.get('calcType') == 'GROUP' || record.get('calcType') == 'NORMAL'))
                    continue;

                var chartSeries = Ext.create('Report.model.ChartSeries');
                chartSeries.set('field', record.get('code'));

                if (chart == 'PIE' || chart == 'PIED')
                    chartSeries.set('type', 'PIE');
                else
                    chartSeries.set('type', 'COLUMN');

                store.add(chartSeries);

            }
        } else {
            dropHandlers.processDrop();
            return;
        }
        dropHandlers.cancelDrop();
    },
    removeSeries: function (node, data, overModel, dropPosition, dropHandlers) {
        var store = Ext.ComponentQuery.query('grid[action="chartSeriesGrid"]')[0].getStore();
        for (var i = 0; i < data.records.length; i++) {
            store.remove(data.records[i]);
        }
        dropHandlers.cancelDrop();
    }
});
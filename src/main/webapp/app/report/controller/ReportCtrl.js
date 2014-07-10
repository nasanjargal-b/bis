Ext.define('Report.controller.ReportCtrl', {
    extend: 'Ext.app.Controller',
    init: function () {
        var me = this;
        window.setTimeout(function () {
            var tree = Ext.ComponentQuery.query('reportTreePanel')[0];
            me.edit(tree.getRootNode().childNodes[0].childNodes[0]);
        }, 1000);
        this.control({
            'reportPanel button[action="save"]': {
                click: this.save
            },
            /*--------------------------*/
            'reportTreePanel': {
                itemclick: function (view, record) {
                    console.log(record);
                    if (record.isLeaf()) {
                        this.edit(record);
                    }
                }
            },
            'combo[name="blankId"]': {
                change: this.blank
            },
            'columnPanel grid[action="columnGrid"] gridview': {
                beforedrop: this.addColumn
            },
            'columnPanel grid[action="columnGrid"]': {
                beforeedit: this.beforeEdit
            },
            'questionGrid gridview': {
                beforedrop: function (node, data, overModel, dropPosition, dropHandlers) {
                    if (data.copy) {
                        dropHandlers.cancelDrop();
                    } else {
                        data.view.getStore().remove(data.records)
                        dropHandlers.cancelDrop();
                    }
                }
            }
        });
    },
    getMainPanel: function () {
        return Ext.ComponentQuery.query('#reportMainPanel')[0];
    },
    beforeEdit: function (editor, e, eOpts) {
        if (e.field == 'calcType') {
            var combo = e.column.getEditor(e.record);
            var store = combo.getStore();
            if (store.count() != 0)
                store.removeAll();
            switch (e.record.get('columnType')) {
                case 'TEXT':
                case 'DATE':
                case 'TIME':
                    store.add([
                        {value: 'NORMAL', display: ''},
                        {value: 'GROUP', display: 'GROUP'},
                        {value: 'COUNT', display: 'COUNT'}
                    ]);
                    break;
                case 'NUMERIC':
                    store.add([
                        {value: 'NORMAL', display: ''},
                        {value: 'GROUP', display: 'GROUP'},
                        {value: 'SUM', display: 'SUM'},
                        {value: 'AVG', display: 'AVG'},
                        {value: 'COUNT', display: 'COUNT'},
                        {value: 'MAX', display: 'MAX'},
                        {value: 'MIN', display: 'MIN'}
                    ]);
                    break;
                case 'SINGLE_CHOICE':
                case 'MULTIPLE_CHOICE':
                    store.add([
                        {value: 'NORMAL', display: ''},
                        {value: 'COUNT', display: 'COUNT'}
                    ]);
                    break;
            }

            /*
             * data: [
             {value: 'NORMAL', display: ''},
             {value: 'GROUP', display: 'GROUP'},
             {value: 'SUM', display: 'SUM'},
             {value: 'AVG', display: 'AVG'},
             {value: 'COUNT', display: 'COUNT'},
             {value: 'MAX', display: 'MAX'},
             {value: 'MIN', display: 'MIN'}
             ]
             * */
        }
        return true;
    },
    save: function (btn) {
        var form = btn.up('form');
        if (form.getForm().isValid()) {
            var record = form.getRecord();
            record.set(form.getValues());

            var data = {
                id: record.get('id'),
                name: record.get('name'),
                parentId: record.get('parentId'),
                blankId: record.get('blankId'),
                chart: record.get('chart'),
                order: record.get('order'),
                columns: []
            };

            record.columns().each(function (cRecord) {
                var column = {
                    id: cRecord.get('id'),
                    name: cRecord.get('name'),
                    code: cRecord.get('code'),
                    type: cRecord.get('type'),
                    calcType: cRecord.get('calcType'),
                    columnType: cRecord.get('columnType'),
                    questionId: cRecord.get('questionId'),
                    filter: cRecord.get('filter'),
                    choiceId: cRecord.get('choiceId')
                }
                data.columns[data.columns.length] = column;
            });

            form.mask('Хадгалаж байна...');
            Ext.Ajax.request({
                url: '/report-mod/report/report.json',
                jsonData: data,
                success: function () {
                    form.unmask();
                    console.log('success');
                },
                failure: function () {
                    form.unmask();
                }
            })
        }
    },
    edit: function (node) {
        var me = this;
        Report.model.Report.load(node.get('id'), {
            success: function (record) {
                var panel = Ext.create('Report.view.ReportPanel');
                var mainPanel = me.getMainPanel();
                panel.loadRecord(record);
                mainPanel.removeAll();
                mainPanel.add(panel);

                var columnGrid = Ext.ComponentQuery.query('columnPanel')[0].down('grid[action="columnGrid"]');
                columnGrid.reconfigure(record.columns());
            }
        });
    },
    blank: function (cmb, value) {
        Report.model.Blank.load(value, {
            success: function (record) {
                var grids = Ext.ComponentQuery.query('questionGrid');

                var store = record.questions();
                store.insert(0, [
                    Ext.create('Report.model.Question', {
                        code: '$R',
                        text: 'Судалгаа',
                        type: 'TEXT'
                    }),
                    Ext.create('Report.model.Question', {
                        code: '$C',
                        text: 'Хот/Аймаг',
                        type: 'TEXT'
                    }),
                    Ext.create('Report.model.Question', {
                        code: '$D',
                        text: 'Сум/Дүүрэг',
                        type: 'TEXT'
                    })
                ]);

                for (var i = 0; i < grids.length; i++) {
                    var grid = grids[i];
                    grid.reconfigure(store);
                }
            }
        });
    },
    addColumn: function (node, data, overModel, dropPosition, dropHandlers) {
        if (data.copy)
            for (var i = 0; i < data.records.length; i++) {
                var record = data.records[i];
                var columnRecord = Ext.create('Report.model.Column');
                columnRecord.set('name', record.get('text'));
                columnRecord.set('questionId', record.get('id'));
                columnRecord.set('code', record.get('code'));
                columnRecord.set('type', 'QUESTION');
                columnRecord.set('calcType', 'NORMAL');
                columnRecord.set('columnType', record.get('type'));
                if (record.get('code').indexOf('$') == 0) {
                    columnRecord.set('columnType', 'TEXT');
                    switch (record.get('code')) {
                        case '$R':
                            columnRecord.set('type', 'RESEARCH');
                            break;
                        case '$C':
                            columnRecord.set('type', 'CITY');
                            break;
                        case '$D':
                            columnRecord.set('type', 'DISTRICT');
                            break;
                    }
                }
                data.records[i] = columnRecord;
            }

        dropHandlers.processDrop();
    }
});
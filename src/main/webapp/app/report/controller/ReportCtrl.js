Ext.define('Report.controller.ReportCtrl', {
    extend: 'Ext.app.Controller',
    init: function () {
        var me = this; // todo delete
        window.setTimeout(function () { //todo delete
            var tree = Ext.ComponentQuery.query('reportTreePanel')[0];
            me.edit(tree.getRootNode().childNodes[0].childNodes[0].get('id'));
            window.setTimeout(function () {
                var tab = Ext.ComponentQuery.query('reportPanel')[0].down('tabpanel');
                tab.setActiveTab(2);
            }, 500);
        }, 500);
        this.control({
            'reportPanel button[action="save"]': {
                click: this.save
            },
            /*--------------------------*/
            'reportTreePanel': {
                itemclick: function (view, record) {
                    if (record.isLeaf()) {
                        this.edit(record.get('id'));
                    }
                }
            },
            'combo[name="blankId"]': {
                change: this.blank
            },
            'questionGrid gridview': {
                beforedrop: function (node, data, overModel, dropPosition, dropHandlers) {
                    if (data.copy) {
                        dropHandlers.cancelDrop();
                    } else {
                        data.view.getStore().remove(data.records)
                        dropHandlers.cancelDrop();
                    }
                    this.getController('ReportColumnCtrl').validColumn();
                }
            }
        });
    },
    getMainPanel: function () {
        return Ext.ComponentQuery.query('#reportMainPanel')[0];
    },
    save: function (btn) {
        var me = this;
        var form = btn.up('form');
        console.log('before valid');
        if (form.getForm().isValid() && this.getController('ReportColumnCtrl').validColumn()) {
            console.log('after valid');
            var data = this.getFormData();
            console.log(data.filters);
            form.mask('Хадгалаж байна...');
            Ext.Ajax.request({
                url: '/report-mod/report/report.json',
                jsonData: data,
                success: function (response) {
                    form.unmask();
                    var result = Ext.decode(response.responseText);
                    me.edit(result.data);
                },
                failure: function () {
                    form.unmask();
                }
            })
        }
    },
    getFormData: function () {
        var form = Ext.ComponentQuery.query('reportPanel')[0];
        var record = form.getRecord();
        record.set(form.getValues());
        var data = {
            id: record.get('id'),
            name: form.down('textfield[name="name"]').getValue(),
            parentId: record.get('parentId'),
            blankId: record.get('blankId'),
            chart: record.get('chart'),
            order: record.get('order'),
            columns: [],
            filters: []
        };

        record.columns().each(function (cRecord) {
            var column = {
                id: cRecord.get('id'),
                name: cRecord.get('name'),
                code: cRecord.get('code'),
                type: cRecord.get('type'),
                percent: cRecord.get('percent'),
                calcType: cRecord.get('calcType'),
                columnType: cRecord.get('columnType'),
                questionId: cRecord.get('questionId'),
                filter: cRecord.get('filter'),
                choiceId: cRecord.get('choiceId')
            };
            data.columns[data.columns.length] = column;
        });

        record.filters().each(function (fRecord) {
            var filter = {
                id: fRecord.get('id'),
                code: fRecord.get('code'),
                type: fRecord.get('type'),
                columnType: fRecord.get('columnType'),
                prompt: fRecord.get('prompt'),
                questionId: fRecord.get('questionId'),
                filter: null,
                researchId: null,
                cityId: null,
                districtId: null,
                choiceIds: null
            };

            var recordData = fRecord.get('data');
            if (recordData == "") recordData = null;

            switch (fRecord.get('type')) {
                case 'RESEARCH':
                    filter.researchId = recordData;
                    break;
                case 'CITY':
                    filter.cityId = recordData;
                    break;
                case 'DISTRICT':
                    filter.districtId = recordData;
                    break;
                default:
                    switch (fRecord.get('columnType')) {
                        case 'SINGLE_CHOICE':
                        case 'MULTIPLE_CHOICE':
                            filter.choiceIds = recordData
                            break;
                        default:
                            filter.filter = recordData;
                            break;
                    }
                    break;
            }
            data.filters[data.filters.length] = filter;
        })

        return data;
    },
    edit: function (id) {
        var me = this;
        if (id != null) {
            Report.model.Report.load(id, {
                success: function (record) {
                    me.buildReportPanel(record);
                }
            });
        } else {
            me.buildReportPanel(Ext.create('Report.model.Report'));
        }
    },
    buildReportPanel: function (record) {
        var mainPanel = this.getMainPanel();
        mainPanel.removeAll();
        var panel = Ext.create('Report.view.ReportPanel');
        panel.loadRecord(record);
        mainPanel.add(panel);

        var columnGrid = Ext.ComponentQuery.query('columnPanel')[0].down('grid[action="columnGrid"]');
        columnGrid.reconfigure(record.columns());
        var filterGrid = Ext.ComponentQuery.query('filterPanel')[0].down('grid[action="filterGrid"]');
        record.filters().each(function (fRecord) {
            switch (fRecord.get('type')) {
                case 'RESEARCH':
                    fRecord.set('data', fRecord.get('researchId'));
                    break;
                case 'CITY':
                    fRecord.set('data', fRecord.get('cityId'));
                    break;
                case 'DISTRICT':
                    fRecord.set('data', fRecord.get('districtId'));
                    break;
                default:
                    switch (fRecord.get('columnType')) {
                        case 'SINGLE_CHOICE':
                        case 'MULTIPLE_CHOICE':
                            fRecord.set('data', fRecord.get('choiceIds'));
                            break;
                        default:
                            fRecord.set('data', fRecord.get('filter'));
                            break;
                    }
            }
        })
        filterGrid.reconfigure(record.filters());

        var chartColumnGrid = Ext.ComponentQuery.query('chartPanel')[0].down('grid[action="chartColumnGrid"]');
        chartColumnGrid.reconfigure(record.columns());

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
    }
});
Ext.define('Report.controller.ReportCtrl', {
    extend: 'Ext.app.Controller',
    init: function () {
        var me = this; // todo delete
        window.setTimeout(function () { //todo delete
            var tree = Ext.ComponentQuery.query('reportTreePanel')[0];
            me.edit(tree.getRootNode().childNodes[0].childNodes[0].get('id'));
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
        if (form.getForm().isValid() && this.getController('ReportColumnCtrl').validColumn()) {
            var record = form.getRecord();
            record.set(form.getValues());
            var data = {
                id: record.get('id'),
                name: form.down('textfield[name="name"]').getValue(),
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
    edit: function (id) {
        var me = this;
        Report.model.Report.load(id, {
            success: function (record) {
                var mainPanel = me.getMainPanel();
                mainPanel.removeAll();
                var panel = Ext.create('Report.view.ReportPanel');
                panel.loadRecord(record);
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
    }
});
Ext.define('Report.controller.ReportColumnCtrl', {
    extend: 'Ext.app.Controller',
    init: function () {
        this.control({
            'columnPanel grid[action="columnGrid"]': {
                edit: function () {
                    this.validColumn();
                }
            },
            'columnPanel grid[action="columnGrid"] gridview': {
                beforedrop: this.addColumn
            }
        });
    },
    addColumn: function (node, data, overModel, dropPosition, dropHandlers) {
        if (data.copy) {
            for (var i = 0; i < data.records.length; i++) {
                var record = data.records[i];
                var columnRecord = Ext.create('Report.model.Column');
                columnRecord.set('name', record.get('text'));
                columnRecord.set('questionId', record.get('id'));
                columnRecord.set('code', record.get('code'));
                columnRecord.set('type', 'QUESTION');
                columnRecord.set('calcType', 'NORMAL');
                columnRecord.set('columnType', record.get('type'));

                var choices = [];

                switch (record.get('type')) {
                    case 'SINGLE_CHOICE':
                    case 'MULTIPLE_CHOICE':
                        record.choices().each(function (recordChoice) {
                            var choice = Ext.create('Report.model.Choice');
                            choice.set('id', recordChoice.get('id'));
                            choice.set('code', recordChoice.get('code'));
                            choice.set('text', recordChoice.get('text'));
                            choices[choices.length] = choice;
                        })

                        var choice = Ext.create('Report.model.Choice');
                        choice.set('id', null);
                        choice.set('code', "");
                        choice.set('text', "");
                        choices.unshift(choice);

                        columnRecord.choices().add(choices);

                        columnRecord.set('calcType', 'GROUP');
                }

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
                var store = Ext.ComponentQuery.query('grid[action="columnGrid"]')[0].getStore();
                store.add(columnRecord);
                this.validColumn();
            }
            dropHandlers.cancelDrop();
        }
    },
    validColumn: function () {
        var valid = true;
        if (Ext.ComponentQuery.query('grid[action="columnGrid"]')[0]) {
            var store = Ext.ComponentQuery.query('grid[action="columnGrid"]')[0].getStore();

            var columns = [];
            store.each(function (columnRecord) {
                columns[columns.length] = columnRecord;
            })

            for (var i = 0; i < columns.length; i++) {
                columns[i].set('error', false);
            }

            for (var i = 0; i < columns.length; i++) {
                for (var j = 0; j < columns.length; j++) {
                    if (columns[j] != columns[i] && columns[j].get('code') == columns[i].get('code')) {
                        var msg = 'Код давхацсан байна!!!';
                        columns[i].set('error', true);
                        columns[j].set('error', true);
                        columns[i].set('errorMsg', msg);
                        columns[j].set('errorMsg', msg);
                        valid = false;
                    }
                }
            }
        } else {

            var store = Ext.ComponentQuery.query('grid[action="queryColumnGrid"]')[0].getStore();

            var columns = [];
            store.each(function (columnRecord) {
                columns[columns.length] = columnRecord;
            })

            for (var i = 0; i < columns.length; i++) {
                var column = columns[i];
                if (column.get('columnType') == null || column.get('name') == null || column.get('name') == "") {
                    valid = false;
                    var msg = 'Мэдээлэл дутуу байна. Та баганы төрөл эсвэл нэрээ шалгана уу!!!';
                    column.set('error', true);
                    column.set('errorMsg', msg);
                }
            }
        }

        return valid;
    }
});
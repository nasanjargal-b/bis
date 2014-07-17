Ext.define('Report.controller.ReportFilterCtrl', {
    extend: 'Ext.app.Controller',
    init: function () {
        this.control({
            'filterPanel grid[action="filterGrid"]': {
                edit: function (editor, context) {
                    switch (context.record.get('columnType')) {
                        case 'SINGLE_CHOICE':
                        case 'MULTIPLE_CHOICE':
                            context.record.set('choiceIds', context.record.get('filter'))
                    }
                }
            },
            'filterPanel grid[action="filterGrid"] gridview': {
                beforedrop: this.addFilter
            }
        });
    },
    addFilter: function (node, data, overModel, dropPosition, dropHandlers) {
        if (data.copy) {
            for (var i = 0; i < data.records.length; i++) {
                var record = data.records[i];
                var filter = Ext.create('Report.model.Filter');
                filter.set('code', record.get('code'));
                filter.set('type', 'QUESTION');
                filter.set('columnType', record.get('type'));
                filter.set('prompt', false);
                filter.set('questionId', record.get('id'));

                if (record.get('code').indexOf('$') == 0) {
                    filter.set('columnType', 'TEXT');
                    switch (record.get('code')) {
                        case '$R':
                            filter.set('type', 'RESEARCH');
                            break;
                        case '$C':
                            filter.set('type', 'CITY');
                            break;
                        case '$D':
                            filter.set('type', 'DISTRICT');
                            break;
                    }
                }

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
                        filter.choices().add(choices);
                }

                var store = Ext.ComponentQuery.query('grid[action="filterGrid"]')[0].getStore();
                store.add(filter);

            }
            dropHandlers.cancelDrop();
        }
    }
});
Ext.define('Blank.controller.QuestionCtrl', {
    extend: 'Ext.app.Controller',
    init: function () {
        this.control({
            'blankPanel treepanel treeview': {
                itemdblclick: function (view, node) {
                    if (node.get('group'))
                        this.editGroup(node);
                    else
                        this.editQuestion(node);
                }
            },
            'questionWindow combo[name="type"]': {
                change: this.changeType
            },
            'questionWindow button[action="save"]': {
                click: this.save
            },
            'choiceGrid': {
                edit: function (editor, context) {
                    this.fixChoice(context.grid);
                    context.grid.editingPlugin.startEdit(context.rowIdx + 1, 0);
                }
            }
        });
    },
    changeType: function (combo, value) {
        var form = combo.up('window').down('form');

        var choices = form.getRecord().get('choices');

        var choiceGrid = form.down('grid[alias="widget.choiceGrid"]');
        switch (value) {
            case 'SINGLE_CHOICE':
            case 'MULTIPLE_CHOICE':
                if (choiceGrid == null) {
                    choiceGrid = Ext.createWidget('choiceGrid');
                    form.add(choiceGrid);
                    var store = choiceGrid.getStore();
                    store.removeAll();
                    for (var i = 0; i < choices.length; i++) {
                        var choice = choices[i];
                        store.add({choice: choice});
                    }
                    this.fixChoice(choiceGrid);
                }
                break;
            default:
                if (choiceGrid != null)
                    form.remove(choiceGrid);
                break;
        }
    },
    fixChoice: function (choiceGrid) {
        var store = choiceGrid.getStore();
        var emptyRecords = [];
        store.each(function (record) {
            if (record.get('choice') == '') emptyRecords[emptyRecords.length] = record;
        });

        for (var i = 0; i < emptyRecords.length; i++) {
            store.remove(emptyRecords[i]);
        }

        store.add({choice: ''});
    },
    editGroup: function (node, parent) {
        var win = Ext.createWidget('questionWindow');
        win.down('form').loadRecord(node);

        if (parent) win.parent = parent;
        else win.parent = null;

        win.show();
    },
    editQuestion: function (node, parent) {
        var win = Ext.createWidget('questionWindow');
        win.down('form').add(
            {
                xtype: 'checkbox',
                name: 'grid',
                fieldLabel: 'Хүснэгтэнд харагдах',
                inputValue: true,
                uncheckedValue: false
            },
            {
                xtype: 'textfield',
                name: 'name',
                fieldLabel: 'Баганы нэр'
            },
            {
                xtype: 'combo',
                allowBlank: false,
                editable: false,
                fieldLabel: 'Төрөл',
                name: 'type',
                valueField: 'type',
                displayField: 'name',
                queryMode: 'local',
                store: Ext.create('Ext.data.Store', {
                    fields: ['type', 'name']
                })
            });

        var type = node ? node.get('type') : null;
        var typeDatas;

        if (type == 'TEXT') {
            typeDatas = [
                {type: 'TEXT', name: 'Текст'}
            ];
        } else if (type == 'DECIMAL' || type == 'INTEGER') {
            typeDatas = [
                {type: 'TEXT', name: 'Текст'},
                {type: 'DECIMAL', name: 'Бутархай тоо'},
                {type: 'INTEGER', name: 'Бүхэл тоо'}
            ];
        } else if (type == 'BOOLEAN') {
            typeDatas = [
                {type: 'TEXT', name: 'Текст'},
                {type: 'BOOLEAN', name: 'Тийм/Үгүй'}
            ];
        } else if (type == 'DATE') {
            typeDatas = [
                {type: 'TEXT', name: 'Текст'},
                {type: 'DATE', name: 'Огноо'}
            ];
        } else if (type == 'SINGLE_CHOICE' || type == 'MULTIPLE_CHOICE') {
            typeDatas = [
                {type: 'SINGLE_CHOICE', name: 'Нэг сонголттой'},
                {type: 'MULTIPLE_CHOICE', name: 'Олон сонголттой'}
            ];
        } else {
            typeDatas = [
                {type: 'TEXT', name: 'Текст'},
                {type: 'DECIMAL', name: 'Бутархай тоо'},
                {type: 'INTEGER', name: 'Бүхэл тоо'},
                {type: 'BOOLEAN', name: 'Тийм/Үгүй'},
                {type: 'DATE', name: 'Огноо'},
                {type: 'SINGLE_CHOICE', name: 'Нэг сонголттой'},
                {type: 'MULTIPLE_CHOICE', name: 'Олон сонголттой'}
            ];
        }

        var store = win.down('combo[name="type"]').getStore();
        store.removeAll();
        store.add(typeDatas);

        win.down('form').loadRecord(node);

        if (parent) win.parent = parent;
        else win.parent = null;

        win.show();
    },
    save: function (btn) {
        var win = btn.up('window');
        var form = win.down('form');

        var record = form.getRecord();
        record.set(form.getValues());

        switch (record.get('type')) {
            case 'SINGLE_CHOICE':
            case 'MULTIPLE_CHOICE':
                var choices = []
                form.down('grid').getStore().each(function (rec) {
                    var choice = rec.get('choice');
                    if (choice != '')
                        choices[choices.length] = choice;
                });
                record.set('choices', choices);
                break;
        }

        if (win.parent) {
            var store = win.parent.store;
            if (store.getNodeById(record.get('id')) == null) {
                win.parent.appendChild(record);
                win.close();
            } else
                Ext.MessageBox.alert('Алдаа', 'Код давхцсан байна!!! Та кодоо солиод ахин оролдоно уу.');
        } else {
            win.close();
        }
    },
    delete: function (node) {
        Ext.MessageBox.confirm('Асуулт', 'Та устгах үйлдэлийг хийхдээ итгэлтэй байна уу!!!<br/>' +
            '<span style="color: red;">Та устгах үйлдлийг хийснээр үүнтэй холбоотой бусад мэдээллүүд мөн устах болно гэдэгийг анхаарана уу.</span>', function (btn) {
            if (btn == 'yes')
                node.parentNode.removeChild(node);
        });
    }
});
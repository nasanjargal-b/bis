Ext.define('Blank.controller.BlankCtrl', {
    extend: 'Ext.app.Controller',
    init: function () {
        var me = this;
        this.control({
            'blankGrid gridview': {
                itemclick: function (view, record) {
                    this.editBlank(record.get('id'));
                },
                afterrender: function (view) {
                    view.getStore().load();
                }
            },
            'questionTreePanel': {
                cellcontextmenu: function (grid, td, cellIndex, record, tr, rowIndex, e, eOpts) {
                    var position = e.getXY();
                    e.stopEvent();
                    var recordContextMenu = Ext.create('Blank.view.BlankContextMenu');
                    recordContextMenu.down('menuitem[action="add"]').record = record;
                    recordContextMenu.showAt(position);
                }
            },
            'blankGrid button': {
                click: function (btn) {
                    if (btn.action == 'add') {
                        this.editBlank();
                    } else {
                        this.deleteBlank();
                    }
                }
            },
            'blankPanel button[action="save"]': {
                click: this.save
            },
            'blankPanel button[action="cancel"]': {
                click: this.cancel
            }
        });
    },
    getMainPanel: function () {
        return Ext.ComponentQuery.query('#blankMainPanel')[0];
    },
    getBlankGrid: function () {
        return Ext.ComponentQuery.query('blankGrid')[0];
    },
    editBlank: function (id) {
        var mainPanel = this.getMainPanel();
        mainPanel.removeAll();

        var blankPanel = Ext.create('Blank.view.BlankPanel');
        mainPanel.add(blankPanel);
        var treePanel = blankPanel.down('questionTreePanel');
        var treeStore = treePanel.getStore();

        if (id) {
            mainPanel.down('textfield[name="id"]').setReadOnly(true);
            Blank.model.Blank.load(id, {
                success: function (model) {
                    blankPanel.loadRecord(model);
                    treeStore.getProxy().setExtraParam('blankId', id);
                    treeStore.load();
                }
            });
        } else {
            treeStore.getProxy().setExtraParam('blankId', id);
            treeStore.load();
        }

    },
    deleteBlank: function () {
        var me = this;
        var blankGrid = this.getBlankGrid();
        var records = blankGrid.getSelectionModel().getSelection();
        if (records && records.length > 0) {
            var ids = [];
            for (var i = 0; i < records.length; i++) {
                var record = records[i];
                ids[i] = record.get('id');
            }
            Ext.MessageBox.confirm('Асуулт', 'Та устгах үйлдлийг хийхдээ итгэлтэй байна уу?', function (btn) {
                if (btn == 'yes')
                    Ext.Ajax.request({
                        url: '/blank-mod/blank/blank.json',
                        method: 'delete',
                        jsonData: ids,
                        success: function () {
                            me.getMainPanel().removeAll();
                            blankGrid.getStore().reload();
                        }
                    });
            });
        } else {
            Ext.MessageBox.alert('Алдаа', 'Та устгах мөрөө сонгоно уу!!!');
        }
    },
    save: function (btn) {
        console.log('save');
        var me = this;

        var blankPanel = btn.up('blankPanel');
        var values = blankPanel.getValues();
        var blank = {
            id: values.id,
            name: values.name,
            blankGroupId: values.blankGroupId
        };

        var store = blankPanel.down('questionTreePanel').getStore();
        var root = store.getRootNode();

        var questions = [];

        var order = {
            num: 0
        };

        var valid = true;
        for (var i = 0; i < root.childNodes.length; i++) {
            var node = root.childNodes[i];
            for (var k = i + 1; k < root.childNodes.length; k++) {
                var node1 = root.childNodes[k];
                if (node.get('code') == node1.get('code')) {
                    Ext.MessageBox.alert("Алдаа", node.get('code') + ' уг код давхацсан байна та шалгаад өгөгдөлөө дахин оруулна уу?');
                    valid = false;
                }
            }
            for (var j = 0; j < node.childNodes.length; j++) {
                for (var l = j + 1; l < node1.childNodes.length; l++) {
                    if (node.childNodes[j] && node.childNodes[l] && node.childNodes[j].get('code') == node.childNodes[l].get('code')) {
                        Ext.MessageBox.alert("Алдаа", node.childNodes[j].get('code') + ' уг код давхацсан байна та шалгаад өгөгдөлөө дахин оруулна уу?');
                        valid = false;
                    }
                }
            }
        }
        for (var i = 0; i < root.childNodes.length; i++) {
            var node = root.childNodes[i];
            questions[questions.length] = this.getNodeData(node, order);
        }

        blank.questions = questions;
        console.log(valid);
        if (valid == true) {
            Ext.Ajax.request({
                url: '/blank-mod/blank/blank.json',
                method: 'post',
                jsonData: blank,
                success: function () {
                    me.getMainPanel().removeAll();
                    me.getBlankGrid().getStore().reload();
                }
            })
        }

    },
    getNodeData: function (node, order) {
        var obj = {
            id: node.get('id'),
            code: node.get('code'),
            text: node.get('text'),
            type: node.get('type'),
            format: node.get('format'),
            order: order.num
        };

        node.choices().each(function (record) {
            if (!obj.choices) obj.choices = [];
            var choice = {
                id: record.get('id'),
                code: record.get('code'),
                text: record.get('text')
            };
            obj.choices[obj.choices.length] = choice;
        })
        if (obj.choices) {
            for (var i = 0; i < obj.choices.length; i++) {
                for (var j = i + 1; j < obj.choices.length; j++) {
                    if (obj.choices[i].code == obj.choices[j].code) {
                        Ext.MessageBox.alert("Алдаа", obj.code + ' уг асуултын ' + obj.choices[i].code + ' хариултын код давхацсан байна!');
                        valid = false;
                    }
                }
            }
        }
        order.num++;

        if (node.childNodes != null && node.childNodes.length > 0) {
            obj.children = [];
            for (var i = 0; i < node.childNodes.length; i++) {
                var child = node.childNodes[i];
                obj.children[obj.children.length] = this.getNodeData(child, order);
            }
        }
        return obj;
    },
    cancel: function (btn) {
        this.getMainPanel().removeAll();
    }
});
var valid = true;
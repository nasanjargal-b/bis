Ext.define('Blank.controller.BlankCtrl', {
    extend: 'Ext.app.Controller',
    init: function () {
        this.control({
            'blankGrid gridview': {
                itemclick: function (view, record) {
                    this.editBlank(record.get('id'));
                },
                afterrender: function (view) {
                    view.getStore().load();
                }
            },
            'blankGrid button[action="add"]': {
                click: function (btn) {
                    this.editBlank(null);
                }
            },
            'blankGrid button[action="delete"]': {
                click: function (btn) {
                    this.delete(btn.up('blankGrid'));
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
    delete: function (grid) {
        var me = this;
        var records = grid.getSelectionModel().getSelection();
        if (records.length > 0) {
            var ids = [];
            for (var i = 0; i < records.length; i++) {
                var record = records[i];
                ids[ids.length] = record.get('id');
            }

            Ext.MessageBox.confirm('Асуулт', 'Та устгах үйлдлийг хийхдээ итгэлтэй байна уу?', function (btn) {
                if (btn == 'yes')
                    Ext.Ajax.request({
                        url: '/blank-mod/blank/blank.json',
                        method: 'delete',
                        jsonData: ids,
                        success: function () {
                            grid.getStore().reload();
                            me.editBlank(null);
                        }
                    })
            })
        } else {
            Ext.MessageBox.alert('Алдаа', 'Та устгах мөрөө сонгоно уу!!!');
        }

    },
    editBlank: function (id) {
        var mainPanel = this.getMainPanel();
        mainPanel.removeAll();

        var blankPanel = Ext.create('Blank.view.BlankPanel');
        mainPanel.add(blankPanel);
        var treePanel = blankPanel.down('treepanel');
        var treeStore = treePanel.getStore();

        var rootNode = {
            id: 'Асуултууд',
            text: 'Үндсэн групп',
            root: true,
            group: true
        };

        if (id) {
            mainPanel.edit = true;
            mainPanel.down('textfield[name="id"]').setReadOnly(true);
            Blank.model.Blank.load(id, {
                success: function (model) {
                    blankPanel.loadRecord(model);
                    rootNode.children = model.get('questions');
                    treeStore.setRootNode(rootNode);
                    treePanel.expandAll();
                }
            });
        } else {
            console.log('ok');
            mainPanel.edit = false;
            treeStore.setRootNode(rootNode);
            treePanel.expandAll();
        }

    },
    getNodeData: function (node, questions) {
        var data = {
            id: node.get('id'),
            text: node.get('text'),
            name: node.get('name'),
            group: node.get('group'),
            grid: node.get('grid'),
            type: node.get('group') ? null : node.get('type'),
            choices: node.get('choices')
        }

        questions[questions.length] = data;
        if (node.childNodes && node.childNodes.length > 0) {
            data.children = [];
            for (var i = 0; i < node.childNodes.length; i++) {
                var childNode = node.childNodes[i];
                this.getNodeData(childNode, data.children);
            }
        }
    },
    save: function (btn) {
        var me = this;
        var form = btn.up('form');

        if (form.edit) {
            //todo
        }

        if (form.getForm().isValid()) {
            var treePanel = form.down('treepanel');
            var values = form.getValues();
            var questions = [];
            this.getNodeData(treePanel.getRootNode(), questions);
            values.questions = questions[0].children;

            Ext.Ajax.request({
                url: '/blank-mod/blank/blank.json',
                method: 'post',
                jsonData: values,
                success: function () {
                    me.refresh(values.id);
                }
            })

        }
    },
    cancel: function () {
        this.getMainPanel().removeAll();
    },
    refresh: function (blankId) {
        var blankGrid = Ext.ComponentQuery.query('blankGrid')[0];
        blankGrid.getStore().reload();
        this.editBlank(blankId);
    }
});
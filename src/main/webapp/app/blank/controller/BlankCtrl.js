Ext.define('Blank.controller.BlankCtrl', {
    extend: 'Ext.app.Controller',
    init: function () {
        this.control({
            'blankGrid gridview': {
                itemclick: function (view, record) {
                    this.editBlank(record.get('id'));
                },
                afterrender: function () {
                    this.editBlank('B01');
                    //todo delete nasanjargal
                }
            },
            'blankGrid button[alias="add"]': {
                click: function (btn) {
                    this.editBlank(null);
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
            Blank.model.Blank.load(id, {
                success: function (model) {
                    blankPanel.loadRecord(model);
                    rootNode.children = model.get('questions');
                    treeStore.setRootNode(rootNode);
                    treePanel.expandAll();
                }
            });
        } else {
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
            type: node.get('type'),
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
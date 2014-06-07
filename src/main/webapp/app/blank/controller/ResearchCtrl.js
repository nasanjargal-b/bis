Ext.define('Blank.controller.ResearchCtrl', {
    extend: 'Ext.app.Controller',
    models: ['Blank', 'Research'],
    stores: ['Researches', 'Blanks'],
    views: ['ResearchPanel', 'ResearchGrid', 'BlankFirstGrid', 'BlankSecondGrid'],
    init: function () {
        this.control({
            'researchPanel button[action="save"]': {
                click: this.save
            },
            'researchGrid': {
                itemclick: this.edit
            },
            'researchPanel button[action="cancel"]': {
                click: this.cancel
            },
            'researchGrid button[action="add"]': {
                click: function (btn) {
                    this.add()
                    Ext.ComponentQuery.query('grid[alias="widget.blankFirstGrid"]')[0].getStore().load();
                    Ext.ComponentQuery.query('grid[alias="widget.blankSecondGrid"]')[0].getStore().removeAll();
                }
            },
            'researchGrid button[action="delete"]': {
                click: this.delete
            }
        });
    },
    cancel: function (btn) {
        this.getMainPanel().removeAll();
    },
    save: function (btn) {
        var me = this;
        var form = btn.up('panel').down('form');
        var check = form.down('checkboxfield').getValue();
        var grid = form.down('grid[alias="widget.blankSecondGrid"]');
        var items = grid.getStore();
        var massive = new Array();
        var index = 0;
        items.each(function (model) {
            var o = {
                id: model.get('id')
            }
            massive[index] = o;
            index++;
        });

        var values = form.getForm().getValues();
        values.blanks = massive;
        values.active = check;
        if (form.getForm().isValid()) {
            Ext.Ajax.request({
                url: '/blank-mod/research/research.json',
                method: 'post',
                jsonData: values,
                success: function () {
                    me.getMainPanel().removeAll();
                    me.getResearchesStore().create();
                    Ext.ComponentQuery.query('grid[alias="widget.researchGrid"]')[0].getStore().load();
                }
            })
        }
    },
    getMainPanel: function () {
        return Ext.ComponentQuery.query('#researchMainPanel')[0];
    },
    edit: function (grid) {
        this.add();
        var model = grid.getSelectionModel().getSelection()[0];
        var form = Ext.ComponentQuery.query('researchPanel')[0].down('form');
        var bRGrid = Ext.ComponentQuery.query('grid[alias="widget.blankSecondGrid"]')[0];
        var blankGrid = Ext.ComponentQuery.query('grid[alias="widget.blankFirstGrid"]')[0];
        blankGrid.getStore().load({
            callback: function (response) {
                bRGrid.getStore().load({
                    callback: function () {
                        bRGrid.getStore().removeAll();
                        var blanks = model.raw.blanks;
                        var deleteModel = new Array();
                        blankGrid.getStore().each(function (models) {
                            var modelId = models.get('id');
                            console.log('id : ' + modelId);
                            for (var index in blanks) {
                                if (modelId == blanks[index].id) {
                                    deleteModel[index] = models;
                                }
                            }
                        });
                        for (var index in deleteModel) {
                            bRGrid.getStore().add(deleteModel[index]);
                            blankGrid.getStore().remove(deleteModel[index]);
                        }
                    }
                });
            }
        })
        form.loadRecord(model);
    },
    delete: function (btn) {
        var me = this;
        var model = btn.up('grid').getSelectionModel().getSelection()[0];
        if (model) {
            Ext.MessageBox.confirm('Асуулт', 'Та устгах үйлдэлийг хийхдээ итгэлтэй байна уу!!!<br/>' +
                '<span style="color: red;">Та устгах үйлдлийг хийснээр үүнтэй холбоотой бусад мэдээллүүд мөн устах болно гэдэгийг анхаарана уу.</span>', function (btn) {
                if (btn == 'yes') {
                    var o = {
                        id: model.get('id')
                    }
                    Ext.Ajax.request({
                        url: '/blank-mod/research/research.json',
                        method: 'delete',
                        jsonData: o,
                        success: function () {
                            me.getMainPanel().removeAll();
                            Ext.ComponentQuery.query('grid[alias="widget.researchGrid"]')[0].getStore().load();
                        }
                    })
                }
            });
        } else {
            Ext.MessageBox.alert("Алдаа", "Та устгах мөрөө сонгоно уу?");
        }

    },
    add: function (panel) {
        var mainPanel = this.getMainPanel();
        var researchPanel = this.getResearchPanelView().create();
        mainPanel.remove(researchPanel.down('researchPanel'));
        mainPanel.add(researchPanel)
    }
});
Ext.define('Blank.controller.QuestionCtrl', {
    extend: 'Ext.app.Controller',
    init: function () {
        this.control({
            'questionTreePanel button': {
                click: function (btn) {
                    switch (btn.action) {
                        case 'add':
                            this.add(btn.up('questionTreePanel'));
                            break;
                        case'delete':
                            this.delete(btn.up('questionTreePanel'));
                            break;
                        case'choice':
                            this.showChoice(btn.up('questionTreePanel'));
                            break;
                    }
                }
            },
            'menuitem[action="add"]': {
                click: function(btn){
                    this.add(Ext.ComponentQuery.query('questionTreePanel')[0]);
                }
            },
            'questionTreePanel':{
//              itemclick:function(record, index, node, eOpts){
//                  alert('sdsd')
//                  Ext.ComponentQuery.query('questionTreePanel')[0].getStore().each(function (model) {
//                      console.log(model);
////                      if (model) {
////                          empty[empty.length] = record;
////                      }
//                  })
//              }
            },
            'questionTreePanel': {
                edit: function (editor, e, eOpts) {
                    if ('GROUP' == e.record.get('type')) {
                        e.record.set('leaf', false);
                    } else {
                        var child = e.record.getChildAt(0)
                        if (child) {
                            e.record.set('type', 'GROUP');
                            Ext.MessageBox.alert('Алдаа', 'Уг групп хоосон биш байна!!!');
                        } else {
                            e.record.set('leaf', true);
                        }
                    }

                    var btn = Ext.ComponentQuery.query('questionTreePanel')[0].down('button[action="choice"]');
                    this.choiceBtnActive(btn, e.record.get('type'));

                },
                itemclick: function (view, record) {
                    var btn = view.up('treepanel').down('button[action="choice"]');
                    this.choiceBtnActive(btn, record.get('type'));
                },
                statesave:function(){
                    alert('sadsda')
                }
            },
            'choiceWindow grid': {
                edit: function (editor, e) {
                    this.clearEmptyChoice(e.grid.getStore());
                }
//                ,
//                afterrender:function(grid){
//                    grid.getStore().reload();
//                }
            },
            'choiceWindow button[action="delete"]': {
                click: function (btn) {
                    this.deleteChoice(btn.up('window').down('grid'));
                }
            },
            'choiceWindow': {
                close: function (win) {
                    var store = win.down('grid').getStore();
                    store.remove(store.last());
                }
            }
        });
    },
    clearEmptyChoice: function (store) {
        var empty = [];
        store.each(function (record) {
            if ((record.get('code') == null || record.get('code') == '') && (record.get('text') == null || record.get('text') == '')) {
                empty[empty.length] = record;
            }
        })

        for (var i = 0; i < empty.length; i++) {
            var obj = empty[i];
            if (store.last() != obj)
                store.remove(obj)
        }

        var record = store.last();

        if ((record.get('code') != null && record.get('code') != '') || (record.get('text') != null && record.get('text') != '')) {
            store.add(Ext.create('Blank.model.Choice'));
        }
    },
    choiceBtnActive: function (btn, type) {
        switch (type) {
            case 'SINGLE_CHOICE':
            case 'MULTIPLE_CHOICE':
                btn.setDisabled(false);
                break;
            default :
                btn.setDisabled(true);
                break;
        }
    },
    showChoice: function (tree) {
        var record = tree.getSelectionModel().getSelection()[0];
        var win = Ext.create('Blank.view.ChoiceWindow');
        win.down('grid').reconfigure(record.choices());
        record.choices().add(Ext.create('Blank.model.Choice'));

        win.show();
    },
    add: function (treepanel) {
        var parent = treepanel.getSelectionModel().getSelection()[0];
        if (parent && parent.isLeaf())
            parent = parent.parentNode;
        else if (!parent)
            parent = treepanel.getRootNode();

        parent.appendChild(Ext.create('Blank.model.Question', {
            id: null,
            type: 'SINGLE_CHOICE',
            leaf: true
        }));
    },
    delete: function (treepanel) {
        var nodes = treepanel.getSelectionModel().getSelection();
        if (nodes && nodes.length > 0) {
            for (var i = nodes.length - 1; i >= 0; i--) {
                var node = nodes[i];
                node.parentNode.removeChild(node);
            }
        } else {
            Ext.MessageBox.alert('Алдаа', 'Та устгах мөрөө сонгоно уу?');
        }
    },
    deleteChoice: function (grid) {
        var model = grid.getSelectionModel().getSelection()[0];
        grid.getStore().remove(model);
    }
});
Ext.define('Blank.controller.QuestionMenuCtrl', {
    extend: 'Ext.app.Controller',
    init: function () {
        this.control({
            'blankPanel treepanel treeview': {
                itemcontextmenu: this.showContextMenu
            },
            'menu[alias="questionMenu"]': {
                click: this.clickMenuItem
            }
        });
    },
    clickMenuItem: function (menu, item) {
        switch (item.data) {
            case 'groupItem':
                var node = Ext.create('Blank.model.Question');
                node.set('group', true);
                node.set('leaf', false);
                this.getController('QuestionCtrl').editGroup(node, menu.record);
                break;
            case 'questionItem':
                var node = Ext.create('Blank.model.Question');
                node.set('group', false);
                node.set('leaf', true);
                this.getController('QuestionCtrl').editQuestion(node, menu.record);
                break;
            case 'editItem':
                if (menu.record.get('group'))
                    this.getController('QuestionCtrl').editGroup(menu.record);
                else
                    this.getController('QuestionCtrl').editQuestion(menu.record);
                break;
            case 'deleteItem':
                this.getController('QuestionCtrl').delete(menu.record);
                break;
        }
    },
    showContextMenu: function (view, record, item, index, e) {
        var menu = new Ext.create('Ext.menu.Menu', {
            alias: 'questionMenu',
            record: record,
            items: [

            ]
        });

        if (!record.isLeaf()) {
            menu.add({
                text: 'Групп нэмэх',
                icon: '/resources/images/add-16px.png',
                data: 'groupItem'
            });
            menu.add({
                text: 'Асуулт нэмэх',
                icon: '/resources/images/add-16px.png',
                data: 'questionItem'
            });
            if (!record.isRoot()) {
                menu.add({
                    text: 'Засах',
                    icon: '/resources/images/edit-16px.png',
                    data: 'editItem'
                });
                menu.add({
                    text: 'Устгах',
                    icon: '/resources/images/delete-16px.png',
                    data: 'deleteItem'
                });
            }
        } else {
            menu.add({
                text: 'Засах',
                icon: '/resources/images/edit-16px.png',
                data: 'editItem'
            });
            menu.add({
                text: 'Устгах',
                icon: '/resources/images/delete-16px.png',
                data: 'deleteItem'
            });
        }

        menu.showAt(e.getXY());
        e.stopEvent();
    }
});
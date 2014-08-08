Ext.define('Report.view.QueryWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.queryWindow',
    title:'Query',
    width: 800,
    height: 600,
    modal: true,
    maximizable: true,
    autoShow: true,
    layout: 'fit',
    dockedItems: {
        xtype: 'toolbar',
        items: [
            {
                text: 'Хадгалах',
                icon: '/resources/images/save-16px.png',
                action: 'save'
            },
            {
                text: 'Болих',
                icon: '/resources/images/close-16px.png',
                handler: function (btn) {
                    btn.up('window').close();
                }
            }
        ]
    },
    items: {
        xtype: 'textarea',
        listeners: {
            afterrender: function (field) {
                var codemirror = CodeMirror.fromTextArea(field.inputEl.dom, {
                    mode: 'text/x-plsql'
                });
                codemirror.setValue(field.getValue());
                codemirror.on("change", function () {
                    var val = codemirror.getValue();
                    field.setValue(val);
                })

            }
        }
    }
});
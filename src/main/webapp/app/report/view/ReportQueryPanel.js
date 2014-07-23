Ext.define('Report.view.ReportQueryPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.reportQueryPanel',
    title: 'Тайлан',
    layout: {
        type: 'border',
        padding: 5
    },
    items: [
        {
            region: 'west',
            width:350,
            title:'query',
            border:true,
            bodyStyle: 'background-color:'+PANEL_COLOR+'',
            layout:'vbox',
            items:[
                {
                    xtype: 'textareafield',
                    id: 'codearea',
                    title: 'query',
                    allowBlank: false,
                    flex: 1,
                    width: '100%',
                    listeners: {
                        afterrender: function () {
                            var textarea = Ext.getCmp('codearea');
                            var codemirror = CodeMirror.fromTextArea(textarea.inputEl.dom, {
//                        lineNumbers: true,
                                mode: 'text/x-plsql'
                            });
                            codemirror.on("change", function () {
                                var val = Ext.ComponentQuery.query('textareafield[id="codearea"]')[0].bodyEl.dom.innerText;
                                Ext.ComponentQuery.query('textareafield[id="codearea"]')[0].setValue(val);
                            })

                        }
                    }
                },
                {
                    bodyStyle: 'background-color:'+PANEL_COLOR+'',
                    xtype:'button',
                    text:'check'
                }
            ]

        },
        {
            xtype: 'questionGrid',
            region: 'center',
            padding: '0 5 0 0'
        }
    ]
});

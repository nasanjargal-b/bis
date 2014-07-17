Ext.define('Dashboard.view.DashboardPanel', {
    extend: 'Ext.form.Panel',
    title: 'Судалгаа',
    layout: 'fit',
    id:'board',
    bodyStyle: 'background-color:#dfe9f6',
    alias: 'widget.DashboardPanel',
    dockedItems: [
        {
            xtype: 'toolbar',
            items: [
                {
                    type: 'button',
                    action:'load',
                    text: 'Эх зураг'
                }
            ]
        }
    ],
    items:[
        {
            xtype:'panel',
            action:'doPanel',
            html:"<div id='map'></div>"
        }
    ]
});
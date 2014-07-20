Ext.define('Report.view.DashboardPanel', {
    extend: 'Ext.form.Panel',
    layout: 'fit',
    border: false,
    id: 'board',
    bodyStyle: 'background-color:'+PANEL_COLOR+'',
    alias: 'widget.DashboardPanel',
    dockedItems: [
        {
            xtype: 'toolbar',
            items: [
                {
                    type: 'button',
                    action: 'load',
                    text: 'Эх зураг',
                    icon: '/resources/images/map-16px.png'
                }
            ]
        }
    ],
    items: [
        {
            xtype: 'panel',
            action: 'doPanel',
            html: "<div id='map'></div>"
        }
    ]
});
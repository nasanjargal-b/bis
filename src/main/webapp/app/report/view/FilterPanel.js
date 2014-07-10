Ext.define('Report.view.FilterPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.filterPanel',
    title: 'Шүүлтүүр',
    layout: {
        type: 'border',
        padding: 5
    },
    border: false,
    items: [
        {
            xtype: 'questionGrid',
            region: 'west',
            padding: '0 5 0 0'
        },
        {
            xtype: 'panel',
            region: 'center'
        }
    ]
});
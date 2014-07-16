Ext.define('Blank.view.RecordGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.recordGrid',
    title: 'Бичлэг',
    researchId: null,
    blankId: null,
    plugins: Ext.create('Ext.grid.plugin.CellEditing', {
        clicksToEdit: 2
    }),
    selModel: {
        type: 'MULTI'
    },
    selType: 'cellmodel',
    dockedItems: [
        {
            xtype: 'toolbar',
            items: [
                {
                    text: 'Хадгалах',
                    icon: '/resources/images/save-16px.png',
                    action: 'save'

                },
                '->',
                {
                    xtype: 'combo',
                    name: 'city',
                    allowBlank: false,
                    editable: false,
                    labelWidth: 60,
                    queryMode: 'local',
                    fieldLabel: 'Хот/Аймаг',
                    valueField: 'id',
                    displayField: 'name',
                    store: 'City'
                },
                {
                    xtype: 'combo',
                    name: 'district',
                    allowBlank: false,
                    editable: false,
                    labelWidth: 70,
                    queryMode: 'local',
                    valueField: 'id',
                    displayField: 'name',
                    fieldLabel: '&nbsp;Сум/Дүүрэг'
                },
                '|',
                {
                    text: 'Файл Илгээх',
                    icon: '/resources/images/upload-16px.png',
                    action: 'upload',
                    disabled: true
                },
                {
                    text: 'Файл татах',
                    icon: '/resources/images/download-16px.png',
                    action: 'download',
                    disabled: true
                }
            ]
        },
        {
            xtype: 'toolbar',
            dock: 'bottom',
            items: [
                '->',
                {
                    text: 'Ахин дуудах',
                    icon: '/resources/images/refresh-16px.png',
                    action: 'refresh',
                    disabled: true
                }
            ]
        }
    ],
    selModel: {
        mode: 'MULTI'
    }
});

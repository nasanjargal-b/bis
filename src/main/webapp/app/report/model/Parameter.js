Ext.define('Report.model.Parameter', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id', type: 'int', useNull: true},
        {name: 'code', type: 'string', useNull: true, default: null},
        {name: 'type', type: 'string', useNull: true, default: null},
        {name: 'prompt', type: 'boolean', useNull: true, default: false},
        {name: 'query', type: 'string', useNull: true, default: null},
        {name: 'researchId', type: 'int', useNull: true, default: null},
        {name: 'cityId', type: 'int', useNull: true, default: null},
        {name: 'districtId', type: 'int', useNull: true, default: null},

        {name: 'data', type: 'auto', useNull: true}
    ]
})
Ext.define('Blank.model.Record', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id', type: 'int'},
        {name: 'accountId', type: 'int'},
        {name: 'researchId', type: 'int'},
        {name: 'cityId', type: 'int'},
        {name: 'districtId', type: 'int'},
        {name: 'description', type: 'string'},
        {name: 'createDate', type: 'date'},
        {name: 'fillWorker', type: 'string'},
        {name: 'fillPosition', type: 'string'},
        {name: 'fillPhone', type: 'string'},
        {name: 'fillDate', type: 'date'},
        {name: 'researcher', type: 'string'},
        {name: 'data', type: 'auto'}
    ]
});
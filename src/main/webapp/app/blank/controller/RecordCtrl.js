Ext.define('Blank.controller.RecordCtrl', {
    extend: 'Ext.app.Controller',
    init: function () {
        var me = this;
        this.control({
            'recordBlankGrid toolbar combo': {
                change: this.reloadBlanks
            },
            'recordBlankGrid': {
                itemclick: function (view, record) {
                    var researchId = view.up('recordBlankGrid').down('combo[action="research"]').getValue();
                    var blankId = record.get('id');
                    if (blankId && researchId)
                        this.buildRecordGrid(blankId, researchId);
                }
            },
            'recordGrid combo[name="city"]': {
                change: function (cmb, value) {
                    var record = cmb.findRecordByValue(value);
                    var districtCmb = cmb.up('toolbar').down('combo[name="district"]');
                    districtCmb.setValue();
                    districtCmb.bindStore(record.districts());
                }
            },
            'recordGrid combo[name="district"]': {
                change: function (cmb, value) {
                    var btns = [];
                    btns[0] = cmb.up('recordGrid').down('button[action="download"]');
                    btns[1] = cmb.up('recordGrid').down('button[action="upload"]');
                    btns[2] = cmb.up('recordGrid').down('button[action="refresh"]');

                    var disable = (value != null) ? false : true;

                    for (var i = 0; i < btns.length; i++) {
                        btns[i].setDisabled(disable);
                    }

                    if (!disable) {
                        this.getController('RecordDataCtrl').findRecord(value);
                    }
                }
            },
            'recordGrid': {
                cellcontextmenu: function (grid, td, cellIndex, record, tr, rowIndex, e, eOpts) {
                    var position = e.getXY();
                    e.stopEvent();
                    var recordContextMenu = Ext.create('Blank.view.RecordContextMenu');
                    recordContextMenu.down('menuitem[action="delete"]').record = record;
                    recordContextMenu.showAt(position);
                }
            }
        });
    },
    getMainPanel: function () {
        return Ext.ComponentQuery.query('#recordMainPanel')[0];
    },
    reloadBlanks: function (cmb, value) {
        var record = cmb.getStore().getById(value);
        if (record.get('active'))
            cmb.setFieldStyle('color:green');
        else
            cmb.setFieldStyle('color:red');
        cmb.up('recordBlankGrid').getStore().load({
            params: {researchId: record.get('id')}
        });
    },
    buildRecordGrid: function (blankId, researchId) {
        var me = this;
        Ext.Ajax.request({
            url: '/blank-mod/record/meta.json',
            params: {
                blankId: blankId
            },
            success: function (resp) {
                var result = Ext.decode(resp.responseText);
                me.showRecordGrid(result.data, blankId, researchId);
            }
        });
    },
    showRecordGrid: function (metas, blankId, researchId) {
        if (metas && metas.length > 0) {
            var columns = [
                {xtype: 'rownumberer'}
            ];
            for (var i = 0; i < metas.length; i++) {
                columns[i + 1] = this.getColumn(metas[i]);
            }
            var mainPanel = this.getMainPanel();
            mainPanel.removeAll();
            var recordGrid = Ext.create('Blank.view.RecordGrid', {
                blankId: blankId,
                researchId: researchId,
                columns: columns,
                store: this.getStore(metas, blankId, researchId)
            });

            mainPanel.add(recordGrid);
        }
    },
    getStore: function (metas, blankId, researchId) {
        var fields = [
            {
                name: 'id',
                useNull: true
            }
        ];
        for (var i = 0; i < metas.length; i++) {
            var meta = metas[i];

            fields[i + 1] = {
                name: meta.code,
                useNull: true
            }

            switch (meta.type) {
                case 'TEXT':
                    fields[i + 1].type = 'string';
                    break;
                case 'NUMERIC':
                    fields[i + 1].type = 'float';
                    break;
                case 'DATE':
                case 'TIME':
                    fields[i + 1].type = 'date';
                    fields[i + 1].serialize = function (value) {
                        if (value) {
                            return value.getTime();
                        }
                        return null;
                    };
                    break;
                case 'SINGLE_CHOICE':
                    fields[i + 1].type = 'auto';
                    break;
                case 'MULTIPLE_CHOICE':
                    fields[i + 1].type = 'auto';
                    break;
            }

            if (meta.type == 'DATE') {
                if (meta.format)
                    fields[i + 1].dateFormat = meta.format;
                else
                    fields[i + 1].dateFormat = 'Y-m-d';
            }

            if (meta.type == 'TIME') {
                if (meta.format)
                    fields[i + 1].dateFormat = meta.format;
                else
                    fields[i + 1].dateFormat = 'H:i:s';
            }
        }
        return Ext.create('Ext.data.Store', {
            fields: fields,
            autoLoad: false,
            proxy: {
                type: 'ajax',
                extraParams: {
                    blankId: blankId,
                    researchId: researchId
                },
                url: '/blank-mod/record/records.json',
                actionMethods: {
                    create: 'post',
                    read: 'get',
                    update: 'post',
                    destroy: 'delete'
                },
                reader: {
                    type: 'json',
                    root: 'data'
                },
                writer: {
                    type: 'json',
                    allowSingle: false
                }
            }
        });
    },
    getColumn: function (meta) {
        var column = {
            text: meta.code,
            dataIndex: meta.code,
            width: 130,
            tooltip: '<strong>' + meta.text + '</strong>'
        };

        for (var i = 0; i < meta.choices.length; i++) {
            var choice = meta.choices[i];
            column.tooltip += "<br/>" + choice.code + " - " + choice.text
        }

        switch (meta.type) {
            case 'TEXT':
                column.editor = {xtype: 'textfield'}
                break;
            case 'NUMERIC':
                column.editor = {xtype: 'numberfield'}
                if (meta.format) {
                    column.editor.format = meta.format;
                    column.format = column.editor.format;
                }
                column.xtype = 'numbercolumn';
                break;
            case 'DATE':
                column.editor = {xtype: 'datefield', format: 'Y-m-d'};
                if (meta.format)
                    column.editor.format = meta.format;
                column.xtype = 'datecolumn';
                column.format = column.editor.format;
                break;
            case 'TIME':
                column.editor = {xtype: 'timefield', format: 'H:i:s'}
                if (meta.format)
                    column.editor.format = meta.format;
                column.xtype = 'datecolumn';
                column.format = column.editor.format;
                break;
            case 'SINGLE_CHOICE':
                column.editor = {
                    xtype: 'combo',
                    valueField: 'id',
                    displayField: 'code',
                    readonly: true,
                    autoSelect: false,
                    tpl: '<tpl for=".">' +
                        '<div class="x-boundlist-item">{code} - {text}</div>' +
                        '</tpl>',
                    store: Ext.create('Ext.data.Store', {
                        fields: ['id', 'code', 'text'],
                        data: meta.choices
                    }),
                    listeners: {
                        change: function (cmb, value) {
                            var id = null;
                            cmb.getStore().each(function (record) {
                                if (record.get('code') == value)
                                    id = record.get('id');
                            })

                            if (id) cmb.setValue(id);
                        }
                    }
                };
                column.renderer = function (value) {
                    for (var i = 0; i < meta.choices.length; i++) {
                        if (meta.choices[i].id == value)
                            return meta.choices[i].code;
                    }
                }
                break;
            case 'MULTIPLE_CHOICE':
                column.editor = {
                    xtype: 'combo',
                    valueField: 'id',
                    displayField: 'code',
                    multiSelect: true,
                    readonly: true,
                    autoSelect: false,
                    tpl: '<tpl for=".">' +
                        '<div class="x-boundlist-item">' +
                        '   <table border="0">' +
                        '       <tr>' +
                        '           <td align="left" valign="middle">' +
                        '               <img src="' + Ext.BLANK_IMAGE_URL + '" width="15" height="15" class="chkCombo-default-icon chkCombo" />' +
                        '           </td>' +
                        '           <td align="left" valign="middle" style="font-size: 12px;">' +
                        '               {code} - {text}' +
                        '           </td>' +
                        '       </tr>' +
                        '   </table>' +
                        '</div>' +
                        '</tpl>',
                    store: Ext.create('Ext.data.Store', {
                        fields: ['id', 'code', 'text'],
                        data: meta.choices
                    })
                };
                column.renderer = function (value, metaData, record) {
                    if (Array.isArray(value)) {
                        var codes = [];
                        for (var i = 0; i < meta.choices.length; i++) {
                            for (var j = 0; j < value.length; j++) {
                                if (value[j] == meta.choices[i].id) {
                                    codes[codes.length] = meta.choices[i].code;
                                }
                            }
                        }
                        return codes.join(', ');
                    } else if (value) {
                        var values = value.split(',');
                        var ids = [];
                        var codes = [];
                        for (var i = 0; i < meta.choices.length; i++) {
                            for (var j = 0; j < values.length; j++) {
                                if (values[j].indexOf(meta.choices[i].code) != -1) {
                                    codes[codes.length] = meta.choices[i].code;
                                    ids[ids.length] = meta.choices[i].id;
                                }
                            }
                        }
                        record.set(meta.code, ids);
                        return codes.join(', ');

                    }

                    return '';
                }
                break;
        }

        return column;
    }
});
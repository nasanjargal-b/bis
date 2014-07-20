//var PANEL_COLOR = '#dfe9f6';
//var BORDER_COLOR = '#99bce8';
var PANEL_COLOR = '#e0e0e0';
var BORDER_COLOR = '#d0d0d0';

Ext.define('Ext.ux.form.field.CheckCombo', {
    extend: 'Ext.form.field.ComboBox',
    alias: 'widget.checkcombo',
    multiSelect: true,
    listConfig: {
        getInnerTpl: function () {
            return '';
        }
    }
});
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
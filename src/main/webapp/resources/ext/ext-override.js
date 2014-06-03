Ext.Ajax.on('requestexception', function (conn, response) {
    if (response.status == 500) {
        var result = Ext.decode(response.responseText);
        Ext.MessageBox.alert('Алдаа', result.message);
    } else {
        Ext.MessageBox.alert('Алдаа : <span style="color:red">' + response.status + '</span>', response.statusText);
    }
})
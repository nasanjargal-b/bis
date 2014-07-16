Ext.Ajax.on('requestexception', function (conn, response) {
    if (response.status == 500) {
        var result = Ext.decode(response.responseText);
        Ext.MessageBox.alert('Алдаа', result.message);
    } else {
        Ext.MessageBox.alert('Алдаа : <span style="color:red">' + response.status + '</span>', response.statusText);
    }
})
Ext.Ajax.on('beforerequest',function(){Ext.getBody().mask(loadText, 'loading')});
Ext.Ajax.on('requestcomplete',Ext.getBody().unmask ,Ext.getBody());
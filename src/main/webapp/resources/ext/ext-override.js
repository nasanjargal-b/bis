Ext.Ajax.on('requestexception', function (conn, response) {
    if (response.status == 500) {
        var result = Ext.decode(response.responseText);
        Ext.getBody().unmask() , Ext.getBody()
        Ext.MessageBox.alert('Алдаа', result.message);
    } else {
        Ext.MessageBox.alert('Алдаа : <span style="color:red">' + response.status + '</span>', response.statusText);
        Ext.getBody().unmask() , Ext.getBody()
    }
})
Ext.Ajax.on('beforerequest', function (conn, opts) {
    if(opts.url!==undefined)
    Ext.getBody().mask('Уншиж байна түр хүлээнэ үү', 'loading')
}, Ext.getBody());
Ext.Ajax.on('requestcomplete', function (conn,response,opts) {
        Ext.getBody().unmask() , Ext.getBody()
    }
);

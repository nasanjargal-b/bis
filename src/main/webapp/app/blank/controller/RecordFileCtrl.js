Ext.define('Blank.controller.RecordFileCtrl', {
    extend: 'Ext.app.Controller',
    init: function () {
        this.control({
            'grid[action="recordGrid"] component[action="upload"]': {
                change: this.upload
            }
        });
    },
    upload: function (field) {
        var waitMsg;

        var file = field.fileInputEl.dom.files[0];

        if (file) {
            var xhr = new XMLHttpRequest();

            var fd = new FormData();
            fd.append('blankId', field.blankId);
            fd.append('researchId', field.researchId);
            fd.append('file', file);

            xhr.open("POST", "/blank-mod/record/file/upload.json");

            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    waitMsg.close();
                    if (xhr.status == 200) {
                        Ext.MessageBox.alert('Мэдээлэл', 'Амжилттай хуулагдлаа');
                        field.up('grid').getStore().reload();
                    }
                    else if (xhr.status == 500) {
                        var result = Ext.decode(xhr.responseText);
                        Ext.MessageBox.alert('Алдаа', result.message);
                    } else
                        Ext.MessageBox.alert('Алдаа : <span style="color:red">' + xhr.status + '</span>', xhr.statusText);
                }
            }

            waitMsg = Ext.MessageBox.wait("Файлыг илгээж байна...")
            xhr.send(fd);
            field.reset();
        }
    }
});
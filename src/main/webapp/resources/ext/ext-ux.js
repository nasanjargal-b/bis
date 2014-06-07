/**
 * HTML 5 File upload ProgressBar. This code introduces ability to monitor file upload progress in forms.
 * It provides the progress method to form action configuration for progress monitoring. Implementation is also
 * backward compatibile with browsers that do not implement the Html 5 File API. In such case the progress method
 * is just not going to be invoked.
 *
 * Usage:
 *
 Ext.Msg.wait("Uploading", "Your file is being uploaded")
 form.submit({
        url: '/upload',
        success: function() {
            Ext.Msg.alert('Success', 'Your file has been uploaded.');
        },
        //progress is [0..1], and event is the underlying HTML 5 progress event.
        progress: function(action, progress, event) {
            Ext.Msg.updateProgress(progress)
        }
    })
 * @overrides Ext.data.Connection
 * @author Maciej Szajna
 */
Ext.define('Ext.ux.data.Html5Connection', {
    override: 'Ext.data.Connection',

    /**
     * Override the Accept header to accept text/html. This is for compatibility if you want to support browsers
     * without Html 5 File API implemented. In such case your backend server needs to respond with text/html for
     * iframe to accept it. Then this implementation must accept text/html as well.
     * @cfg {Boolean} overrideAccept
     */
    overrideAccept: true,

    /**
     * Checks whether Html 5 File API is supported
     */
    isHtml5Supported: function () {
        return typeof FileReader != "undefined"
    },

    /**
     * If File API is supported, then do not treat upload forms specially.
     */
    isFormUpload: function (options) {
        return !this.isHtml5Supported() && this.callParent(arguments)
    },

    /**
     * Construction of FormData object.
     */
    setOptions: function (options, scope) {
        var opts = this.callParent(arguments)
        if (this.isHtml5Supported() && options.isUpload && options.form) {
            opts.data = new FormData(options.form)
        }
        return opts
    },

    /**
     * Registration of progress handler
     * @private
     */
    openRequest: function (options, requestOptions, async, username, password) {
        var me = this
        var xhr = this.callParent(arguments)
        if (options.isUpload && options.progress) {
            xhr.upload.onprogress = options.progress
        }
        return xhr
    },

    /**
     * Fix for text/html Accept header for backward compatibility.
     * @private
     */
    setupHeaders: function (xhr, options, data, params) {
        var acceptHeader = "Accept"
        if (this.overrideAccept && options.isUpload) {
            if (!options.headers) options.headers = {}
            options.headers[acceptHeader] = "text/html"
        }
        return this.callParent(arguments)
    }
})


/**
 * Passes progress callback to the Connection object.
 */
Ext.define('Ext.ux.form.action.Action', {
    override: 'Ext.form.action.Action',
    createCallback: function () {
        var me = this
        var callback = this.callParent()
        callback.progress = function (e) {
            var prog = e.loaded / e.total
            Ext.callback(me.progress, me.scope || me, [me, prog, e])
        }
        return callback
    }
})
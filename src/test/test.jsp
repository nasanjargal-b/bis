<script>
    Ext.onReady(function () {

        var queryCmb = Ext.create('Ext.form.field.ComboBox', {
            fieldLabel: 'Шүүх Query',
            allowBlank: false,
            valueField: 'id',
            displayField: 'name',
            store: Ext.create('Ext.data.Store', {
                fields: ['id', 'name'],
                data: [
                        <c:forEach items="${report.reportQueries}" var="reportQuery" varStatus="status">
                <c:if test="${not status.first}">,
                </c:if>
        {
            id:<c:out value="${reportQuery.id}"/>,
                name: "<c:out value="${reportQuery.name}"/>"
        }
        </c:forEach>
        ]
    })
    });

    var paramForm = Ext.create('Ext.form.Panel', {
        region: 'west',
        width: 500,
        bodyStyle: 'background-color:#dfe9f6',
        title: 'Тайлангийн параметерүүд',
        defaults: {
            width: 480,
            margin: 5
        },
        items: [
                    queryCmb
                    <c:if test="${not empty report.reportParams and report.reportParams.size() gt 0}">
            , {
        xtype: 'fieldset',
        title: 'Тайлангын параметерүүд',
        defaults: {
            width: 450,
            margin: 5
        },
        items: [
                <c:forEach items="${report.reportParams}" var="reportParam" varStatus="status">
            <c:if test="${not status.first}">,
            </c:if>
    {
    <c:if test="${reportParam.type eq 'INTEGER'}">
            xtype: 'numberfield',
            allowDecimal: false,
    </c:if>
    <c:if test="${reportParam.type eq 'DECIMAL'}">
            xtype: 'numberfield',
    </c:if>
    <c:if test="${reportParam.type eq 'TEXT'}">
            xtype: 'textfield',
    </c:if>
    <c:if test="${reportParam.type eq 'BOOLEAN'}">

            </c:if>
    <c:if test="${reportParam.type eq 'MULTIPLE_CHOICE'}"></c:if>
    <c:if test="${reportParam.type eq 'SINGLE_CHOICE'}"></c:if>
    <c:if test="${reportParam.type eq 'CITY'}"></c:if>
    <c:if test="${reportParam.type eq 'DISTRICT'}"></c:if>
        fieldLabel: "<c:out value="${reportParam.label}"/>",
            allowBlank: false,
            name:'${reportParam.name}'
    }
    </c:forEach>
    ]
    }
    </c:if>
    ]
    });

    var reportPanel = Ext.create('Ext.panel.Panel', {
        region: 'center',
        width: 500,
        title: "<c:out value="${report.name}"/>",
        dockedItems: {
            xtype: 'toolbar',
            items: [
                {
                    icon: '/resources/images/refresh-16px.png',
                    text: 'Ахин ачааллах'
                },
                '->',
                {
                    icon: '/resources/images/excel-16px.png',
                    text: 'Excel'
                },
                {
                    icon: '/resources/images/word-16px.png',
                    text: 'Word'
                },
                {
                    icon: '/resources/images/pdf-16px.png',
                    text: 'PDF'
                }
            ]
        }
    });


    Ext.create('Ext.container.Viewport', {
        layout: 'fit',
        items: [
            {
                xtype: 'panel',
                title: "Тайлан",
                layout: 'border',
                items: [
                    paramForm,
                    reportPanel
                ]
            }
        ]
    });
    });

</script>
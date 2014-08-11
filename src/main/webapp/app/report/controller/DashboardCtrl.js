Ext.define('Report.controller.DashboardCtrl', {
    views: ['DashboardPanel', 'MainWindow'],
    extend: 'Ext.app.Controller',
    init: function () {
        this.control({
            'DashboardPanel': {
                afterrender: function (panel) {
                    var me = this;
                    this.mapInit(panel, this)
                }
            },
//            'MainWindow':{
//                afterrender:function(){
//                    alert('sdadsad')
//                }
//            },
            'DashboardPanel button[action="load"]': {
                click: function (btn) {
                    var me = this;
                    this.mapInit(btn.up('panel'), me)
                }
            }
        });
    },
    mapInit: function (panel, me) {
        var map = null;
        var parser = null;

        var data = Array();
        data[0] = 'Aimag3.kml';
        mapOptions = {
            zoom: 6,
            center: new google.maps.LatLng(46.9502622421856, 101.58984375),
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeControl: true,
            mapTypeControlOptions: {
                style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
                position: google.maps.ControlPosition.TOP_CENTER
            },
            panControl: true,
            panControlOptions: {
                position: google.maps.ControlPosition.RIGHT_TOP
            },
            zoomControl: true,
            zoomControlOptions: {
                style: google.maps.ZoomControlStyle.LARGE,
                position: google.maps.ControlPosition.RIGHT_TOP
            },
            scaleControl: true,
            scaleControlOptions: {
                position: google.maps.ControlPosition.BOTTOM_CENTER
            },
            streetViewControl: true,
            streetViewControlOptions: {
                position: google.maps.ControlPosition.RIGHT_TOP
            }
        };
        map = new google.maps.Map(panel.body.dom, mapOptions);
        parser = new geoXML3.parser({
            map: map,
            afterParse: useTheData,
            hideCloseButton: true,
            suppressInfoWindows: true,
            animation: google.maps.Animation.map
        })

        for (var i = 0; i < 1; i++) {
            parser.parse('resources/kml/' + data[i]);
        }
        aimagBunbble(map, true);
        function useTheData(doc) {
            geoXmlDoc = doc;
            try {
                for (var i = 0; i < doc[0].placemarks.length; i++) {
                    var placemark = doc[0].placemarks[i];
                    placemark.polygon.setOptions({ fillColor: '#0099CC', fillOpacity: 0.5 });
                    polygonMouseover(placemark.polygon, placemark);
                }
            } catch (e) {

            }
        }
        ;
        var win = null;

        function polygonMouseover(poly, text) {
            google.maps.event.addListener(poly, 'click', function (evt) {
//                win.close();
                  console.log(text)
                  console.log(evt.latLng)

                aimagBunbble(map, false);
                var para = new Date();
                if (text.name != 'sum') {
                    for (var j = 6; j < 8; j++) {
                        map.setZoom(j);
                        map.setCenter(evt.latLng);
                    }
                    for (var i = 0; i < 1; i++) {
                        parser.hideDocument(parser.docs[i]);
                    }
                    parser.parse('resources/kml/' + text.name + '.kml?date=' + para)
                    switch (text.name) {
                        case 'Omonogovi':
                            omonogovi_bubble(map, true);
                            break;
                        case 'Bayanulgii':
                            bayanUlgiiBubble(map, true);
                            break;
                        case 'Uvs':
                            uvsBubble(map, true);
                            break;
                        case 'Hovd':
                            hovdBubble(map, true);
                            break;
                        case 'Zavhan':
                            zavhanBubble(map, true);
                            break;
                        case 'Hovsgol':
                            huvsgulBubby(map, true);
                            break;
                        case 'Bulgan':
                            bulganBubble(map, true);
                            break;
                        case 'Dornogovi':
                            dornoGoviBubble(map, true);
                            break;
                        case 'Dornod':
                            dornodBubble(map, true);
                            break;
                        case 'Bayanhongor':
                            bayanhongorBubble(map, true);
                            break;
                        case 'Tuv':
                            tuvBubble(map, true);
                            break;
                        case 'Hentii':
                            hentiiBubble(map, true);
                            break;
                        case 'Arhangai':
                            arhangaiBubble(map, true);
                            break;
                        case 'Selenge':
                            selengeBubble(map, true);
                            break;
                        case 'Darhanuul':
                            darhanuulBubble(map, true);
                            break;
                        case 'Suhbaatar':
                            suhbaatarBubble(map, true);
                            break;
                        case 'Dundgovi':
                            dundgoviBubble(map, true);
                            break;
                        case 'Govialtai':
                            govialtaiBubble(map, true);
                            break;
                        case 'Orhon':
                            orhonBubble(map, true);
                            break;
                        case 'Ulaanbaatar':
                            ulaanbaatarBubble(map, true);
                            break;
                        case 'Govisumber':
                            govisumberBubble(map, true);
                            break;
                        case 'Ovorhangai':
                            ovorhangaiBubble(map, true);
                            break;
                    }
                } else {
                    var a = text.description;
                    a = a.toString().split(" ")[1];
                    me.loadWindow(a, me);
                }
            });

            google.maps.event.addListener(poly, 'mouseover', function (evt) {
                poly.setOptions({ fillOpacity: 1 });
            });
            google.maps.event.addListener(poly, 'mouseout', function (evt) {
                poly.setOptions({ fillOpacity: 0.5 });
            });

            google.maps.event.addListener(map, 'center_changed', function (evt) {
            });
        }
    },
    loadWindow: function (id, me) {
        this.getController('ReportViewCtrl').show(88500, id);
    }
});
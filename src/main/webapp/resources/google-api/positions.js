var bayanhongor = new InfoBox();
var hovsgol = new InfoBox();
var darhanuul = new InfoBox();
var orhon = new InfoBox();
var selenge = new InfoBox();
var dornogovi = new InfoBox();
var ovorhangai = new InfoBox();
var hovd = new InfoBox();
var bayanulgii = new InfoBox();
var tuv = new InfoBox();
var govialtai = new InfoBox();
var govisvmber = new InfoBox();
var arhangai = new InfoBox();
var suhbaatar = new InfoBox();
var ulaanbaatar = new InfoBox();
var hentii = new InfoBox();
var dornod = new InfoBox();
var dundgovi = new InfoBox();
var omonogovi = new InfoBox();
var zavhan = new InfoBox();
var bulgan = new InfoBox();
var uvs = new InfoBox();
function aimagBunbble(map, show) {
    if (show == true) {

        hovsgol = new InfoBox({
            content: 'Хөвсгөл', boxStyle: {
                   textAlign: "center", fontSize: "8pt", zIndex: 99999, width: "50px"
            },
            disableAutoPan: true,
            closeBoxMargin: "10px 2px 2px 2px",
            closeBoxURL: "http://www.google.com/intl/en_us/mapfiles/close.gif",
            infoBoxClearance: new google.maps.Size(1, 1),
            pixelOffset: new google.maps.Size(-25, 0),
            position: new google.maps.LatLng(49.837982453084834, 99.755859375),
            disableAutoPan: true,
            map: map,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        uvs = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(49.61070993807422, 92.900390625),
            content: 'Увс',
            boxStyle: {
                   textAlign: "center", fontSize: "8pt", zIndex: 99999, width: "50px"
            },
            disableAutoPan: true,
            map: map,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });

        bulgan = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(48.980216985374994, 103.0517578125),
            content: 'Булган',
            disableAutoPan: true,
            map: map,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });

        zavhan = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(48.516604348867475, 96.50390625),
            content: 'Завхан',
            disableAutoPan: true,
            map: map,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });

        omonogovi = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(43.29320031385282, 103.88671875),
            content: 'Өмөнөговь',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });

        dundgovi = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(45.55252525134013, 106.2158203125),
            content: 'Дундговь',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });

        dornod = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(48.42920055556841, 114.3896484375),
            content: 'Дорнод',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });

        hentii = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(48.01932418480118, 110.478515625),
            content: 'Хэнтий',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });

        suhbaatar = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(46.195042108660154, 113.18115234375),
            content: 'Сүхбаатар',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });

        arhangai = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(47.87214396888731, 100.986328125),
            content: 'Архангай',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });

        govialtai = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(45.55252525134013, 95.6689453125),
            content: 'Говь-Алтай',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });

        tuv = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(47.66538735632654, 106.171875),
            content: 'Төв',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });

        bayanulgii = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(48.74894534343293, 89.384765625),
            content: 'Баян-өлгий',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });

        hovd = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(47.040182144806664, 92.5048828125),
            content: 'Ховд',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });

        ovorhangai = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(45.98169518512228, 102.6123046875),
            content: 'Өвөрхангай',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });

        dornogovi = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(44.49650533109348, 109.9072265625),
            content: 'Дорноговь',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });

        selenge = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(50.00773901463687, 105.3369140625),
            content: 'Сэлэнгэ',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });

        darhanuul = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(49.39131220507362, 106.2322998046875),
            content: 'Дархан-Уул',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });

        bayanhongor = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(45.42929873257377, 99.4482421875),
            content: 'Баянхонгор',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        orhon = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(49.0738659012854, 104.43603515625),
            content: 'Орхон',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        ulaanbaatar = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(47.95314495015594, 106.864013671875),
            content: 'Улаанбаатар',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        govisvmber = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(46.55886030311719, 108.5009765625),
            content: 'Говьсүмбэр',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        bayanhongor.open(map);
        govisvmber.open(map);
        ulaanbaatar.open(map);
        orhon.open(map);
        hovsgol.open(map);
        darhanuul.open(map);
        selenge.open(map);
        dornogovi.open(map);
        ovorhangai.open(map);
        hovd.open(map);
        bayanulgii.open(map);
        tuv.open(map);
        govialtai.open(map);
        arhangai.open(map);
        suhbaatar.open(map);
        hentii.open(map);
        dornod.open(map);
        dundgovi.open(map);
        omonogovi.open(map);
        zavhan.open(map);
        bulgan.open(map);
        uvs.open(map)
    } else {
        bayanhongor.close();
        govisvmber.close();
        ulaanbaatar.close();
        orhon.close();
        hovsgol.close();
        darhanuul.close();
        selenge.close();
        dornogovi.close();
        ovorhangai.close();
        hovd.close();
        bayanulgii.close();
        tuv.close();
        govialtai.close();
        arhangai.close();
        suhbaatar.close();
        hentii.close();
        dornod.close();
        dundgovi.close();
        omonogovi.close();
        zavhan.close();
        bulgan.close();
        uvs.close()
    }
}
var omonogovi_dalanzadgad = new InfoBox();
var omonogovi_gurvantes = new InfoBox();
var omonogovi_tsogtovoo = new InfoBox();
var omonogovi_nomgon = new InfoBox();
var omonogovi_noyon = new InfoBox();
var omonogovi_bayanovoo = new InfoBox();
var omonogovi_bulgan = new InfoBox();
var omonogovi_hanbogd = new InfoBox();
var omonogovi_manlai = new InfoBox();
var omonogovi_hurmen = new InfoBox();
var omonogovi_mandalOvoo = new InfoBox();
var omonogovi_tsogttsetsei = new InfoBox();
var omonogovi_sevrei = new InfoBox();
var omonogovi_bayandalai = new InfoBox();
function omonogovi_bubble(map, show) {
    if (show == true) {

        omonogovi_dalanzadgad = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(43.58039085560786, 104.403076171875),
            content: 'Даланзадгад',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        omonogovi_gurvantes = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(43.25320494908846, 100.711669921875),
            content: 'Гурвантэс',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        omonogovi_noyon = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(42.73087427928485, 102.2607421875),
            content: 'Ноён',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        omonogovi_sevrei = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(43.759192638860114, 102.3211669921875),
            content: 'Сэврэй',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        omonogovi_bayandalai = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(43.28920196020127, 103.2330322265625),
            content: 'Баяндалай',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        omonogovi_bulgan = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(44.18220395771566, 103.4088134765625),
            content: 'Булган',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        omonogovi_tsogtovoo = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(44.3513503656123, 105.0457763671875),
            content: 'Цогт-овоо',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        omonogovi_manlai = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(43.92163712834673, 107.0343017578125),
            content: 'Манлай',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        omonogovi_nomgon = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(42.496402940937074, 104.91943359375),
            content: 'Нөмгөн',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        omonogovi_mandalOvoo = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(44.71161010858431, 103.919677734375),
            content: 'Мандал-овоо',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        omonogovi_tsogttsetsei = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(43.76315996157264, 105.809326171875),
            content: 'Цогтцэцэй',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        omonogovi_hurmen = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(42.63799988907408, 103.8262939453125),
            content: 'Хүрмэн',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        omonogovi_bayanovoo = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(42.924251753870685, 106.0400390625),
            content: 'Баяновоо',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        omonogovi_hanbogd = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(42.944360446966286, 107.2265625),
            content: 'Ханбогд',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        omonogovi_dalanzadgad.open(map);
        omonogovi_sevrei.open(map);
        omonogovi_nomgon.open(map);
        omonogovi_tsogttsetsei.open(map);
        omonogovi_bulgan.open(map);
        omonogovi_hurmen.open(map);
        omonogovi_mandalOvoo.open(map);
        omonogovi_bayanovoo.open(map);
        omonogovi_hanbogd.open(map);
        omonogovi_bayandalai.open(map);
        omonogovi_tsogtovoo.open(map);
        omonogovi_manlai.open(map);
        omonogovi_noyon.open(map);
        omonogovi_gurvantes.open(map);
    } else {
        omonogovi_dalanzadgad.close()
        omonogovi_bulgan.close()
        omonogovi_mandalOvoo.close()
        omonogovi_nomgon.close()
        omonogovi_manlai.close()
        omonogovi_bayanovoo.close()
        omonogovi_hanbogd.close()
        omonogovi_hurmen.close()
        omonogovi_tsogttsetsei.close()
        omonogovi_tsogtovoo.close()
        omonogovi_bayandalai.close()
        omonogovi_gurvantes.close()
        omonogovi_sevrei.close()
        omonogovi_noyon.close()
    }
}
var bayanUlgii_tsengel = new InfoBox();
var bayanUlgii_ulaanHus = new InfoBox();
var bayanUlgii_sagsai = new InfoBox();
var bayanUlgii_altai = new InfoBox();
var bayanUlgii_bugat = new InfoBox();
var bayanUlgii_nogoonnuur = new InfoBox();
var bayanUlgii_altantsogt = new InfoBox();
var bayanUlgii_buyant = new InfoBox();
var bayanUlgii_tolbo = new InfoBox();
var bayanUlgii_deluun = new InfoBox();
var bayanUlgii_bayannuur = new InfoBox();
var bayanUlgii_bulgan = new InfoBox();
function bayanUlgiiBubble(map, show) {
    if (show == true) {
        bayanUlgii_tsengel = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(48.864714761802794, 88.4619140625),
            content: 'Цэнгэл',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        bayanUlgii_ulaanHus = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(49.33228198473771, 88.79150390625),
            content: 'Улаан хус',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        bayanUlgii_sagsai = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(48.22467264956519, 88.92333984375),
            content: 'Сагсай',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        bayanUlgii_altai = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(48.20271028869972, 89.527587890625),
            content: 'Алтай',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        bayanUlgii_bugat = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(49.26421999734763, 89.67041015625),
            content: 'Бугат',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        bayanUlgii_altantsogt = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(48.915279853443806, 90.450439453125),
            content: 'Алтан цогт',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        bayanUlgii_nogoonnuur = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(49.56797785892715, 89.8956298828125),
            content: 'Ногоон нуур',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        bayanUlgii_buyant = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(48.57842428752037, 89.7088623046875),
            content: 'Буянт',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        bayanUlgii_tolbo = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(48.37084770238363, 90.2691650390625),
            content: 'Толбо',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        bayanUlgii_deluun = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(47.76517619125415, 90.5712890625),
            content: 'Дэлүүн',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        bayanUlgii_bayannuur = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(48.864714761802794, 90.9228515625),
            content: 'Баян-нуур',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        bayanUlgii_bulgan = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(47.040182144806664, 91.109619140625),
            content: 'Булган',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });

        bayanUlgii_tsengel.open(map);
        bayanUlgii_altai.open(map);
        bayanUlgii_ulaanHus.open(map);
        bayanUlgii_nogoonnuur.open(map);
        bayanUlgii_sagsai.open(map);
        bayanUlgii_bugat.open(map);
        bayanUlgii_altantsogt.open(map);
        bayanUlgii_buyant.open(map);
        bayanUlgii_tolbo.open(map);
        bayanUlgii_deluun.open(map);
        bayanUlgii_bayannuur.open(map);
        bayanUlgii_bulgan.open(map);
    } else {
        bayanUlgii_tsengel.close();
        bayanUlgii_ulaanHus.close();
        bayanUlgii_bugat.close();
        bayanUlgii_sagsai.close();
        bayanUlgii_nogoonnuur.close();
        bayanUlgii_altai.close();
        bayanUlgii_altantsogt.close();
        bayanUlgii_buyant.close();
        bayanUlgii_tolbo.close();
        bayanUlgii_deluun.close();
        bayanUlgii_bayannuur.close();
        bayanUlgii_bulgan.close();
    }
}
var uvc_bohmoron = new InfoBox();
var uvc_sagil = new InfoBox();
var uvc_davast = new InfoBox();
var uvc_tes = new InfoBox();
var uvc_zvvngovi = new InfoBox();
var uvc_baruunturuun = new InfoBox();
var uvc_zuunhangai = new InfoBox();
var uvc_undurhangai = new InfoBox();
var uvc_tsagaanhairhan = new InfoBox();
var uvc_hyargas = new InfoBox();
var uvc_zavhan = new InfoBox();
var uvc_ulgii = new InfoBox();
var uvc_umunugovi = new InfoBox();
var uvc_hovd = new InfoBox();
var uvc_turgen = new InfoBox();
var uvc_tarialan = new InfoBox();
var uvc_naranbulag = new InfoBox();
var uvc_malchin = new InfoBox();
function uvsBubble(map, show) {
    if (show == true) {
        uvc_bohmoron = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(49.837982453084834, 90.494384765625),
            content: 'Бөх мөрөн',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        uvc_sagil = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(50.2682767372753, 91.219482421875),
            content: 'Сагил',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        uvc_davast = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(50.40851753069729, 92.48291015625),
            content: 'Давст',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        uvc_tes = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(50.450509053586615, 93.548583984375),
            content: 'Тэс',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        uvc_zvvngovi = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(50.05713877598692, 93.93310546875),
            content: 'Зүүн говь',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        uvc_baruunturuun = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(49.76707407366792, 94.76806640625),
            content: 'Баруун түрүүн',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        uvc_zuunhangai = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(49.28214015975995, 95.33935546875),
            content: 'Зүүн хангай',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        uvc_undurhangai = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(49.09545216253482, 94.844970703125),
            content: 'Өндөр хангай',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        uvc_tsagaanhairhan = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(49.12062427498834, 94.130859375),
            content: 'Цагаан хайрхан',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        uvc_zavhan = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(48.942347261978476, 93.15582275390625),
            content: 'Завхан',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        uvc_ulgii = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(48.922499263758255, 92.1533203125),
            content: 'Өлгий',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        uvc_umunugovi = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(49.102645497788814, 91.51611328125),
            content: 'Өмөнөговь',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        uvc_hovd = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(49.38237278700955, 91.0382080078125),
            content: 'Ховд',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        uvc_turgen = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(50.02185841773444, 91.461181640625),
            content: 'Түргэн',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        uvc_tarialan = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(49.770621959313935, 91.82373046875),
            content: 'Тариалан',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        uvc_naranbulag = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(49.53946900793534, 92.449951171875),
            content: 'Наранбулаг',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        uvc_malchin = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(49.688954878870334, 93.22998046875),
            content: 'Малчин',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        uvc_hyargas = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(49.56085220619188, 93.75732421875),
            content: 'Хяргас',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });

        uvc_bohmoron.open(map);
        uvc_hyargas.open(map);
        uvc_malchin.open(map);
        uvc_naranbulag.open(map);
        uvc_tarialan.open(map);
        uvc_turgen.open(map);
        uvc_sagil.open(map);
        uvc_davast.open(map);
        uvc_tes.open(map);
        uvc_zvvngovi.open(map);
        uvc_baruunturuun.open(map);
        uvc_zuunhangai.open(map);
        uvc_undurhangai.open(map);
        uvc_tsagaanhairhan.open(map);
        uvc_zavhan.open(map);
        uvc_ulgii.open(map);
        uvc_umunugovi.open(map);
        uvc_hovd.open(map);
    } else {
        uvc_bohmoron.close();
        uvc_hyargas.close();
        uvc_malchin.close();
        uvc_naranbulag.close();
        uvc_tarialan.close();
        uvc_turgen.close();
        uvc_sagil.close();
        uvc_davast.close();
        uvc_tes.close();
        uvc_zvvngovi.close();
        uvc_baruunturuun.close();
        uvc_zuunhangai.close();
        uvc_undurhangai.close();
        uvc_tsagaanhairhan.close();
        uvc_zavhan.close();
        uvc_ulgii.close();
        uvc_umunugovi.close();
        uvc_hovd.close();
    }
}
var hovd_bulgan = new InfoBox();
var hovd_uyench = new InfoBox();
var hovd_altai = new InfoBox();
var hovd_most = new InfoBox();
var hovd_tsetseg = new InfoBox();
var hovd_darvi = new InfoBox();
var hovd_munhhairhan = new InfoBox();
var hovd_manhan = new InfoBox();
var hovd_zereg = new InfoBox();
var hovd_chandmani = new InfoBox();
var hovd_erdenebvren = new InfoBox();
var hovd_dorgon = new InfoBox();
var hovd_myangad = new InfoBox();
var hovd_hovd = new InfoBox();
var hovd_buyant = new InfoBox();
var hovd_duut = new InfoBox();
var hovd_jargalant = new InfoBox();
function hovdBubble(map, show) {
    if (show == true) {
        hovd_altai = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(45.598665689820656, 92.625732421875),
            content: 'Алтай',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        hovd_uyench = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(45.79050946752472, 91.7578125),
            content: 'Үеэнч',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        hovd_bulgan = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(46.04654844630622, 91.2689208984375),
            content: 'Булган',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        hovd_tsetseg = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(46.36967413462374, 93.2025146484375),
            content: 'Цэцэг',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        hovd_most = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(46.649436163350245, 92.5982666015625),
            content: 'Мөст',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        hovd_munhhairhan = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(47.025206001585396, 91.7633056640625),
            content: 'Мөнх хайрхан',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        hovd_manhan = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(47.4057852900587, 92.17529296875),
            content: 'Манхан',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        hovd_zereg = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(47.12995075666307, 92.801513671875),
            content: 'Зэрэг',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        hovd_darvi = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(47.040182144806664, 93.6090087890625),
            content: 'Дарүй',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        hovd_chandmani = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(47.787325537803106, 92.8289794921875),
            content: 'Чандмань',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        hovd_erdenebvren = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(48.480204398955145, 91.1151123046875),
            content: 'Эрдэнэбүрэн',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        hovd_dorgon = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(48.34894812401375, 92.7685546875),
            content: 'Дөргөн',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        hovd_myangad = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(48.53843177405044, 91.878662109375),
            content: 'Мянгад',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        hovd_hovd = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(48.09642606004488, 91.241455078125),
            content: 'Ховд',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        hovd_buyant = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(47.90161354142077, 91.8292236328125),
            content: 'Буянт',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        hovd_duut = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(47.47637579720935, 91.4556884765625),
            content: 'Дуут',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        hovd_jargalant = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(48.00094957553023, 91.6314697265625),
            content: 'Жаргалант',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });

        hovd_altai.open(map);
        hovd_jargalant.open(map);
        hovd_duut.open(map);
        hovd_buyant.open(map);
        hovd_hovd.open(map);
        hovd_myangad.open(map);
        hovd_dorgon.open(map);
        hovd_erdenebvren.open(map);
        hovd_chandmani.open(map);
        hovd_darvi.open(map);
        hovd_zereg.open(map);
        hovd_uyench.open(map);
        hovd_bulgan.open(map);
        hovd_tsetseg.open(map);
        hovd_most.open(map);
        hovd_munhhairhan.open(map);
        hovd_manhan.open(map);
    } else {
        hovd_altai.close()
        hovd_jargalant.close()
        hovd_duut.close()
        hovd_buyant.close()
        hovd_hovd.close()
        hovd_myangad.close()
        hovd_dorgon.close()
        hovd_erdenebvren.close()
        hovd_chandmani.close()
        hovd_darvi.close()
        hovd_zereg.close()
        hovd_manhan.close()
        hovd_tsetseg.close()
        hovd_uyench.close()
        hovd_bulgan.close()
        hovd_most.close()
        hovd_munhhairhan.close()

    }
}
var zavhan_otgon = new InfoBox();
var zavhan_shilvvstei = new InfoBox();
var zavhan_tsagaanchuluut = new InfoBox();
var zavhan_tsagaanhairhan = new InfoBox();
var zavhan_uliastai = new InfoBox();
var zavhan_aldarhaan = new InfoBox();
var zavhan_dorvoljin = new InfoBox();
var zavhan_urgamal = new InfoBox();
var zavhan_zavhanmandal = new InfoBox();
var zavhan_santmargats = new InfoBox();
var zavhan_songino = new InfoBox();
var zavhan_tsetsenuul = new InfoBox();
var zavhan_erdenehairhan = new InfoBox();
var zavhan_yaruu = new InfoBox();
var zavhan_ider = new InfoBox();
var zavhan_ihuul = new InfoBox();
var zavhan_bulnai = new InfoBox();
var zavhan_telmen = new InfoBox();
var zavhan_nomrog = new InfoBox();
var zavhan_tvdevtei = new InfoBox();
var zavhan_bayanhairhan = new InfoBox();
var zavhan_tes = new InfoBox();
var zavhan_bayantes = new InfoBox();
var zavhan_asgat = new InfoBox();
function zavhanBubble(map, show) {
    if (show == true) {
        zavhan_shilvvstei = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(46.84140712700586, 97.1466064453125),
            content: 'Шилүүстэй',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        zavhan_tsagaanchuluut = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(47.122475816641135, 96.668701171875),
            content: 'Цагаанчулуут',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        zavhan_otgon = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(47.44294999517948, 97.84423828125),
            content: 'Отгон',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        zavhan_tsagaanhairhan = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(47.45780853075031, 96.6851806640625),
            content: 'Цагаанхайрхан',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        zavhan_dorvoljin = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(47.98256841921402, 93.7298583984375),
            content: 'Дөрвөлжин',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        zavhan_urgamal = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(48.4838455701099, 94.163818359375),
            content: 'Ургамал',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        zavhan_zavhanmandal = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(48.16608541901253, 94.8504638671875),
            content: 'Завхан мандал',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        zavhan_santmargats = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(48.54206876360649, 95.0372314453125),
            content: 'Сантмаргац',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        zavhan_tsetsenuul = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(48.57842428752037, 95.8172607421875),
            content: 'Цэцэн уул',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        zavhan_erdenehairhan = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(48.180738507303836, 95.7952880859375),
            content: 'Эрдэнэхайрхан',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        zavhan_songino = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(48.98742700601184, 95.80078125),
            content: 'Сонгино',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        zavhan_tvdevtei = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(49.06306925171648, 96.4215087890625),
            content: 'Түдэвтэй',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        zavhan_bayantes = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(49.76352592833392, 96.1468505859375),
            content: 'Баянтэс',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        zavhan_tes = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(49.58934857766426, 95.570068359375),
            content: 'Тэс',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        zavhan_bayanhairhan = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(49.35733376286064, 96.1138916015625),
            content: 'Баянхайрхан',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        zavhan_nomrog = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(48.78153250728971, 96.910400390625),
            content: 'Нөмрөг',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        zavhan_yaruu = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(48.26491251331118, 96.7236328125),
            content: 'Яруу',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        zavhan_ihuul = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(48.47656296641579, 98.7506103515625),
            content: 'Их уул',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        zavhan_telmen = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(48.76705193388751, 97.547607421875),
            content: 'Тэлмэн',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        zavhan_bulnai = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(48.77791275550184, 98.1683349609375),
            content: 'Тосонцэнгэл',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        zavhan_ider = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(48.14776316994868, 97.4981689453125),
            content: 'Идэр',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        zavhan_uliastai = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(47.73932336136857, 96.8389892578125),
            content: 'Улиастай',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        zavhan_aldarhaan = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(47.57281986733871, 95.8831787109375),
            content: 'Алдархаан',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        zavhan_asgat = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(49.53590423149745, 96.6961669921875),
            content: 'Асгат',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });

        zavhan_shilvvstei.open(map);
        zavhan_asgat.open(map);
        zavhan_aldarhaan.open(map);
        zavhan_uliastai.open(map);
        zavhan_ider.open(map);
        zavhan_bulnai.open(map);
        zavhan_telmen.open(map);
        zavhan_ihuul.open(map);
        zavhan_yaruu.open(map);
        zavhan_nomrog.open(map);
        zavhan_bayanhairhan.open(map);
        zavhan_tes.open(map);
        zavhan_bayantes.open(map);
        zavhan_tvdevtei.open(map);
        zavhan_songino.open(map);
        zavhan_tsetsenuul.open(map);
        zavhan_erdenehairhan.open(map);
        zavhan_santmargats.open(map);
        zavhan_zavhanmandal.open(map);
        zavhan_urgamal.open(map);
        zavhan_dorvoljin.open(map);
        zavhan_tsagaanhairhan.open(map);
        zavhan_otgon.open(map);
        zavhan_tsagaanchuluut.open(map);
    } else {
        zavhan_shilvvstei.close();
        zavhan_asgat.close();
        zavhan_aldarhaan.close();
        zavhan_uliastai.close();
        zavhan_ider.close();
        zavhan_bulnai.close();
        zavhan_ihuul.close();
        zavhan_nomrog.close();
        zavhan_yaruu.close();
        zavhan_telmen.close();
        zavhan_tes.close();
        zavhan_bayanhairhan.close();
        zavhan_bayantes.close();
        zavhan_tvdevtei.close();
        zavhan_songino.close();
        zavhan_erdenehairhan.close();
        zavhan_tsetsenuul.close();
        zavhan_santmargats.close();
        zavhan_zavhanmandal.close();
        zavhan_urgamal.close();
        zavhan_dorvoljin.close();
        zavhan_tsagaanhairhan.close();
        zavhan_otgon.close();
        zavhan_tsagaanchuluut.close();
    }
}
var huvsgul_ulaanuul = new InfoBox();
var huvsgul_tsagaannuur = new InfoBox();
var huvsgul_renchinlxvmbe = new InfoBox();
var huvsgul_hanh = new InfoBox();
var huvsgul_tsagaanuur = new InfoBox();
var huvsgul_chandmaniondor = new InfoBox();
var huvsgul_alagerdene = new InfoBox();
var huvsgul_bayanzvrh = new InfoBox();
var huvsgul_tsetserleg = new InfoBox();
var huvsgul_tsagaanuul = new InfoBox();
var huvsgul_arbulag = new InfoBox();
var huvsgul_erdenebulag = new InfoBox();
var huvsgul_tunel = new InfoBox();
var huvsgul_tarialan = new InfoBox();
var huvsgul_ihuul = new InfoBox();
var huvsgul_tosontsengel = new InfoBox();
var huvsgul_bvrentogtoh = new InfoBox();
var huvsgul_moron = new InfoBox();
var huvsgul_rashaant = new InfoBox();
var huvsgul_tomorbulag = new InfoBox();
var huvsgul_shineider = new InfoBox();
var huvsgul_galt = new InfoBox();
var huvsgul_jargalant = new InfoBox();
function huvsgulBubby(map, show) {
    if (show == true) {
        huvsgul_tsagaannuur = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(51.798424491278745, 51.798424491278745),
            content: 'Цагаан нуур',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        huvsgul_ulaanuul = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(50.878777255570405, 98.6187744140625),
            content: 'Улаан уул',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        huvsgul_renchinlxvmbe = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(51.16901107945217, 99.6405029296875),
            content: 'Ренчинлхүмбэ',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        huvsgul_hanh = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(51.29971080556154, 100.5633544921875),
            content: 'Ханх',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        huvsgul_tsagaanuur = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(50.878777255570405, 101.5740966796875),
            content: 'Цагаан уур',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        huvsgul_chandmaniondor = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(50.499452103967734, 100.8050537109375),
            content: 'Чандмань өндөр',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        huvsgul_alagerdene = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(50.20854899229104, 100.030517578125),
            content: 'Алаг эрдэнэ',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        huvsgul_erdenebulag = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(50.14522626967904, 101.5960693359375),
            content: 'Эрдэнэ булаг',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        huvsgul_tunel = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(49.86985734612882, 100.634765625),
            content: 'Түнэл',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        huvsgul_tarialan = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(49.6462914122132, 102.052001953125),
            content: 'Тариалан',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        huvsgul_ihuul = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(49.514510112029, 101.4422607421875),
            content: 'Их уул',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        huvsgul_tosontsengel = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(49.50737665842871, 100.8270263671875),
            content: 'Тосон цэнгэл',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        huvsgul_rashaant = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(49.17811258315209, 101.2115478515625),
            content: 'Рашаант',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        huvsgul_tomorbulag = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(49.24629332459796, 100.1788330078125),
            content: 'Төмөр булаг',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        huvsgul_galt = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(48.73445537176822, 99.986572265625),
            content: 'Галт',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        huvsgul_jargalant = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(48.52024290640027, 99.371337890625),
            content: 'Жаргалант',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        huvsgul_shineider = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(49.0306652257167, 99.47021484375),
            content: 'Шинэ идэр',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        huvsgul_bvrentogtoh = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(49.403824657885124, 99.371337890625),
            content: 'Бүрэн тогтох',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        huvsgul_tsetserleg = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(49.47169378524674, 97.470703125),
            content: 'Цэцэрлэг',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        huvsgul_tsagaanuul = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(49.59290945425264, 98.5418701171875),
            content: 'Цагаан уул',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        huvsgul_arbulag = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(49.87339770318919, 99.3548583984375),
            content: 'Ар булаг',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        huvsgul_bayanzvrh = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(50.23666548810372, 98.6627197265625),
            content: 'Баян зүрх',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        huvsgul_moron = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(49.635619698841445, 100.1348876953125),
            content: 'Мөрөн',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        huvsgul_hanh = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(51.31001339554934, 100.61279296875),
            content: 'Ханх',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        huvsgul_tsagaannuur = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(51.7508394806285, 99.0032958984375),
            content: 'Цагаан нуур',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });

        huvsgul_tsagaannuur.open(map);
        huvsgul_moron.open(map);
        huvsgul_hanh.open(map);
        huvsgul_bayanzvrh.open(map);
        huvsgul_arbulag.open(map);
        huvsgul_tsagaanuul.open(map);
        huvsgul_tsetserleg.open(map);
        huvsgul_bvrentogtoh.open(map);
        huvsgul_shineider.open(map);
        huvsgul_jargalant.open(map);
        huvsgul_galt.open(map);
        huvsgul_tomorbulag.open(map);
        huvsgul_rashaant.open(map);
        huvsgul_tosontsengel.open(map);
        huvsgul_ihuul.open(map);
        huvsgul_tarialan.open(map);
        huvsgul_tunel.open(map);
        huvsgul_erdenebulag.open(map);
        huvsgul_alagerdene.open(map);
        huvsgul_chandmaniondor.open(map);
        huvsgul_tsagaanuur.open(map);
        huvsgul_ulaanuul.open(map);
        huvsgul_renchinlxvmbe.open(map);
    } else {
        huvsgul_tsagaannuur.close();
        huvsgul_moron.close();
        huvsgul_hanh.close();
        huvsgul_bayanzvrh.close();
        huvsgul_arbulag.close();
        huvsgul_tsagaanuul.close();
        huvsgul_tsetserleg.close();
        huvsgul_bvrentogtoh.close();
        huvsgul_shineider.close();
        huvsgul_jargalant.close();
        huvsgul_galt.close();
        huvsgul_tomorbulag.close();
        huvsgul_rashaant.close();
        huvsgul_tosontsengel.close();
        huvsgul_ihuul.close();
        huvsgul_erdenebulag.close();
        huvsgul_tarialan.close();
        huvsgul_tunel.close();
        huvsgul_alagerdene.close();
        huvsgul_chandmaniondor.close();
        huvsgul_tsagaanuur.close();
        huvsgul_ulaanuul.close();
        huvsgul_renchinlxvmbe.close();
    }
}
var bulgan_teshig = new InfoBox();
var bulgan_selenge = new InfoBox();
var bulgan_hangal = new InfoBox();
var bulgan_hudagundur = new InfoBox();
var bulgan_buyanagt = new InfoBox();
var bulgan_bugat = new InfoBox();
var bulgan_sayhan = new InfoBox();
var bulgan_bulgan = new InfoBox();
var bulgan_orhon = new InfoBox();
var bulgan_mogod = new InfoBox();
var bulgan_hishigUndur = new InfoBox();
var bulgan_bvreghangai = new InfoBox();
var bulgan_dashinchilen = new InfoBox();
var bulgan_gurvanbulag = new InfoBox();
var bulgan_bayannuur = new InfoBox();
var bulgan_rashaant = new InfoBox();
function bulganBubble(map, show) {
    if (show == true) {
        bulgan_teshig = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(49.97242235423708, 103.1396484375),
            content: 'Тэшиг',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        bulgan_selenge = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(49.653404588437894, 104.12841796875),
            content: 'Сэлэнгэ',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        bulgan_hudagundur = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(49.439556958940855, 102.8375244140625),
            content: 'Хутагөндөр',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        bulgan_hangal = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(49.34659884833295, 104.359130859375),
            content: 'Хангал',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        bulgan_bugat = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(49.059469847170526, 103.4033203125),
            content: 'Бугат',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        bulgan_buyanagt = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(49.07746426313433, 102.052001953125),
            content: 'Баян агт',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        bulgan_bulgan = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(48.828565527993234, 103.46923828125),
            content: 'Булган',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        bulgan_sayhan = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(48.68370757165361, 102.4749755859375),
            content: 'Сайхан',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        bulgan_mogod = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(48.268569112964336, 102.8759765625),
            content: 'Могод',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        bulgan_orhon = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(48.672826384100354, 103.5736083984375),
            content: 'Орхон',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        bulgan_hishigUndur = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(48.23565029755306, 103.436279296875),
            content: 'Хишиг өндөр',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        bulgan_bvreghangai = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(48.367198426439465, 103.9910888671875),
            content: 'Бүрэг хангай',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        bulgan_gurvanbulag = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(47.76517619125415, 103.370361328125),
            content: 'Гурван булаг',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        bulgan_dashinchilen = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(47.743017409121826, 104.0570068359375),
            content: 'Дашинчилэн',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        bulgan_bayannuur = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(47.84265762816535, 104.490966796875),
            content: 'Баян нуур',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        bulgan_rashaant = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(47.4057852900587, 103.77685546875),
            content: 'Рашаант',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });

        bulgan_rashaant.open(map);
        bulgan_dashinchilen.open(map);
        bulgan_bayannuur.open(map);
        bulgan_gurvanbulag.open(map);
        bulgan_bvreghangai.open(map);
        bulgan_hishigUndur.open(map);
        bulgan_teshig.open(map);
        bulgan_orhon.open(map);
        bulgan_mogod.open(map);
        bulgan_sayhan.open(map);
        bulgan_bulgan.open(map);
        bulgan_buyanagt.open(map);
        bulgan_bugat.open(map);
        bulgan_hangal.open(map);
        bulgan_hudagundur.open(map);
        bulgan_selenge.open(map);
    } else {
        bulgan_rashaant.close();
        bulgan_dashinchilen.close();
        bulgan_bayannuur.close();
        bulgan_gurvanbulag.close();
        bulgan_bvreghangai.close();
        bulgan_hishigUndur.close();
        bulgan_mogod.close();
        bulgan_teshig.close();
        bulgan_orhon.close();
        bulgan_sayhan.close();
        bulgan_bulgan.close();
        bulgan_buyanagt.close();
        bulgan_bugat.close();
        bulgan_hangal.close();
        bulgan_hudagundur.close();
        bulgan_selenge.close();
    }
}
var dornoGovi_hatanbulag = new InfoBox();
var dornoGovi_huvsgul = new InfoBox();
var dornoGovi_mandah = new InfoBox();
var dornoGovi_ulaanbadrah = new InfoBox();
var dornoGovi_saihandulaan = new InfoBox();
var dornoGovi_airag = new InfoBox();
var dornoGovi_sainshand = new InfoBox();
var dornoGovi_erdene = new InfoBox();
var dornoGovi_dalanjargalan = new InfoBox();
var dornoGovi_orgon = new InfoBox();
var dornoGovi_altanshiree = new InfoBox();
var dornoGovi_ihhet = new InfoBox();
var dornoGovi_delgereh = new InfoBox();
var dornoGovi_zamiinuud = new InfoBox();
function dornoGoviBubble(map, show) {
    if (show == true) {
        dornoGovi_hatanbulag = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(42.98857645832184, 108.78662109375),
            content: 'Хатанбулаг',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        dornoGovi_mandah = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(44.134913443750726, 108.369140625),
            content: 'Мандах',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        dornoGovi_huvsgul = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(43.50075243569041, 109.66552734375),
            content: 'Хөвөсгөл',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        dornoGovi_saihandulaan = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(44.809121700077355, 109.09423828125),
            content: 'Сайхандулаан',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        dornoGovi_ulaanbadrah = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(43.929549935614595, 110.21484375),
            content: 'Улаанбадарах',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        dornoGovi_erdene = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(44.2294565683017, 111.07177734375),
            content: 'Эрдэнэ',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        dornoGovi_sainshand = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(44.574817404670306, 109.88525390625),
            content: 'Сайншанд',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        dornoGovi_airag = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(45.61403741135093, 109.27001953125),
            content: 'Айраг',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        dornoGovi_altanshiree = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(45.460130637921004, 110.3466796875),
            content: 'Алтанширээ',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        dornoGovi_orgon = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(45.058001435398296, 111.09375),
            content: 'Өргөн',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        dornoGovi_dalanjargalan = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(46.07323062540838, 109.00634765625),
            content: 'Даланжаргалан',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        dornoGovi_ihhet = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(46.10370875598025, 110.01708984375),
            content: 'Иххэт',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        dornoGovi_delgereh = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(45.75219336063106, 111.2255859375),
            content: 'Дэлгэрэх',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        dornoGovi_zamiinuud = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(43.78695837311561, 111.829833984375),
            content: 'Замын-үүд',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });

        dornoGovi_zamiinuud.open(map);
        dornoGovi_delgereh.open(map);
        dornoGovi_ihhet.open(map);
        dornoGovi_dalanjargalan.open(map);
        dornoGovi_orgon.open(map);
        dornoGovi_altanshiree.open(map);
        dornoGovi_airag.open(map);
        dornoGovi_sainshand.open(map);
        dornoGovi_erdene.open(map);
        dornoGovi_ulaanbadrah.open(map);
        dornoGovi_saihandulaan.open(map);
        dornoGovi_hatanbulag.open(map);
        dornoGovi_mandah.open(map);
        dornoGovi_huvsgul.open(map);
    } else {
        dornoGovi_zamiinuud.close();
        dornoGovi_delgereh.close();
        dornoGovi_ihhet.close();
        dornoGovi_dalanjargalan.close();
        dornoGovi_orgon.close();
        dornoGovi_altanshiree.close();
        dornoGovi_airag.close();
        dornoGovi_sainshand.close();
        dornoGovi_erdene.close();
        dornoGovi_ulaanbadrah.close();
        dornoGovi_saihandulaan.close();
        dornoGovi_huvsgul.close();
        dornoGovi_hatanbulag.close();
        dornoGovi_mandah.close();
    }
}
var dornod_halhgol = new InfoBox();
var dornod_matad = new InfoBox();
var dornod_bulgan = new InfoBox();
var dornod_bayantumen = new InfoBox();
var dornod_herlen = new InfoBox();
var dornod_choibalsan = new InfoBox();
var dornod_hulunbuur = new InfoBox();
var dornod_tsagaanovoo = new InfoBox();
var dornod_sergelen = new InfoBox();
var dornod_gurvanzagal = new InfoBox();
var dornod_chuluunhoroot = new InfoBox();
var dornod_dashbalbar = new InfoBox();
var dornod_bayandun = new InfoBox();
var dornod_bayanuul = new InfoBox();
function dornodBubble(map, show) {
    if (show == true) {
        dornod_bayanuul = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(49.07746426313433, 112.6043701171875),
            content: 'Баянуул',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        dornod_bayandun = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(49.28214015975995, 113.3349609375),
            content: 'Баяндун',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        dornod_chuluunhoroot = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(49.79899569636492, 115.4937744140625),
            content: 'Чулуунхороот',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        dornod_gurvanzagal = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(49.17093019244911, 114.9444580078125),
            content: 'Гурванзагал',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        dornod_sergelen = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(48.603857608232545, 114.071044921875),
            content: 'Сэргэлэн',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        dornod_tsagaanovoo = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(48.454708881876854, 113.192138671875),
            content: 'Цагаан-овоо',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        dornod_halhgol = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(47.234489635299184, 117.92724609375),
            content: 'Халхгол',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        dornod_matad = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(47.11499982620772, 115.83984375),
            content: 'Матад',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        dornod_bulgan = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(47.66538735632654, 114.14794921875),
            content: 'Булган',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        dornod_bayantumen = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(47.97521412341618, 115.11474609375),
            content: 'Баянтүмэн',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        dornod_herlen = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(48.06339653776211, 114.5654296875),
            content: 'Хэрлэн',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        dornod_hulunbuur = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(47.83528342275264, 113.016357421875),
            content: 'Хөлөнбуйр',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        dornod_choibalsan = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(48.90805939965007, 115.5377197265625),
            content: 'Чойбалсан',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        dornod_dashbalbar = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(49.63206194128714, 114.1424560546875),
            content: 'Дашбалбар',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });

        dornod_bayandun.open(map);
        dornod_bayanuul.open(map);
        dornod_dashbalbar.open(map);
        dornod_chuluunhoroot.open(map);
        dornod_gurvanzagal.open(map);
        dornod_choibalsan.open(map);
        dornod_sergelen.open(map);
        dornod_tsagaanovoo.open(map);
        dornod_halhgol.open(map);
        dornod_hulunbuur.open(map);
        dornod_herlen.open(map);
        dornod_bayantumen.open(map);
        dornod_matad.open(map);
        dornod_bulgan.open(map);
    } else {
        dornod_bayandun.close();
        dornod_bayanuul.close();
        dornod_dashbalbar.close();
        dornod_chuluunhoroot.close();
        dornod_gurvanzagal.close();
        dornod_choibalsan.close();
        dornod_sergelen.close();
        dornod_tsagaanovoo.close();
        dornod_halhgol.close();
        dornod_hulunbuur.close();
        dornod_herlen.close();
        dornod_bayantumen.close();
        dornod_matad.close();
        dornod_bulgan.close();
    }
}
var bayanhongor_bayanundur = new InfoBox();
var bayanhongor_shinejinst = new InfoBox();
var bayanhongor_bayanlig = new InfoBox();
var bayanhongor_bayangovi = new InfoBox();
var bayanhongor_bayantsagaan = new InfoBox();
var bayanhongor_battsagaan = new InfoBox();
var bayanhongor_jinst = new InfoBox();
var bayanhongor_bogd = new InfoBox();
var bayanhongor_ulziit = new InfoBox();
var bayanhongor_erdenetsogt = new InfoBox();
var bayanhongor_bayanovoo = new InfoBox();
var bayanhongor_bayanhongor = new InfoBox();
var bayanhongor_galuut = new InfoBox();
var bayanhongor_bumbugur = new InfoBox();
var bayanhongor_baatsagaan = new InfoBox();
var bayanhongor_buutsagaan = new InfoBox();
var bayanhongor_hvreemaral = new InfoBox();
var bayanhongor_zag = new InfoBox();
var bayanhongor_jargalant = new InfoBox();
var bayanhongor_gurvanbulag = new InfoBox();
var bayanhongor_bayanbulag = new InfoBox();
function bayanhongorBubble(map, show) {
    if (show == true) {
        bayanhongor_bayanundur = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(43.229195113965005, 97.97607421875),
            content: 'Баянөндөр',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        bayanhongor_shinejinst = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(43.92559366355069, 98.9154052734375),
            content: 'Шинэжинст',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        bayanhongor_bayanlig = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(44.32384807250689, 100.8544921875),
            content: 'Баянлиг',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        bayanhongor_bayangovi = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(44.77793589631623, 99.964599609375),
            content: 'Баянговь',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        bayanhongor_buutsagaan= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(46.164614496897094, 98.701171875),
            content: 'Бууцагаан',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        bayanhongor_bayantsagaan= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(45.1510532655634, 98.81103515625),
            content: 'Баянцагаан',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        bayanhongor_baatsagaan= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(45.598665689820656, 99.29443359375),
            content: 'Баацагаан',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        bayanhongor_jinst= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(45.42929873257377, 100.26123046875),
            content: 'Жинст',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        bayanhongor_bogd= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(45.120052841530516, 100.70068359375),
            content: 'Богд',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        bayanhongor_ulziit= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(45.98169518512228, 100.6787109375),
            content: 'Өлзийт',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        bayanhongor_bumbugur= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(46.28622391806708, 99.580078125),
            content: 'Бөмбөгөр',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        bayanhongor_hvreemaral= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(46.48326472915561, 98.19580078125),
            content: 'Хүрээмарал',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        bayanhongor_bayanovoo= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(46.11132565729796, 100.228271484375),
            content: 'Баяновоо',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        bayanhongor_bayanbulag= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(46.84516443029279, 97.97607421875),
            content: 'Баянбулаг',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        bayanhongor_gurvanbulag= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(47.26432008025478, 98.50341796875),
            content: 'Гурванбулаг',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        bayanhongor_zag= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(46.92025531537451, 99.052734375),
            content: 'Заг',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        bayanhongor_jargalant= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(47.32393057095941, 99.38232421875),
            content: 'Жаргалант',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        bayanhongor_galuut= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(46.7549166192819, 100.08544921875),
            content: 'Галуут',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        bayanhongor_erdenetsogt= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(46.51351558059737, 100.92041015625),
            content: 'Эрдэнэцогт',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        bayanhongor_bayanundur.open(map);
        bayanhongor_erdenetsogt.open(map);
        bayanhongor_galuut.open(map);
        bayanhongor_jargalant.open(map);
        bayanhongor_zag.open(map);
        bayanhongor_gurvanbulag.open(map);
        bayanhongor_bayanbulag.open(map);
        bayanhongor_bayanovoo.open(map);
        bayanhongor_hvreemaral.open(map);
        bayanhongor_bumbugur.open(map);
        bayanhongor_ulziit.open(map);
        bayanhongor_bogd.open(map);
        bayanhongor_jinst.open(map);
        bayanhongor_baatsagaan.open(map);
        bayanhongor_buutsagaan.open(map);
        bayanhongor_bayantsagaan.open(map);
        bayanhongor_bayanlig.open(map);
        bayanhongor_bayangovi.open(map);
        bayanhongor_shinejinst.open(map);
    } else {
        bayanhongor_bayanundur.close();
        bayanhongor_erdenetsogt.close();
        bayanhongor_galuut.close();
        bayanhongor_jargalant.close();
        bayanhongor_zag.close();
        bayanhongor_gurvanbulag.close();
        bayanhongor_bayanbulag.close();
        bayanhongor_bayanovoo.close();
        bayanhongor_hvreemaral.close();
        bayanhongor_bumbugur.close();
        bayanhongor_ulziit.close();
        bayanhongor_bogd.close();
        bayanhongor_jinst.close();
        bayanhongor_baatsagaan.close();
        bayanhongor_bayantsagaan.close();
        bayanhongor_buutsagaan.close();
        bayanhongor_bayanlig.close();
        bayanhongor_bayangovi.close();
        bayanhongor_shinejinst.close();
    }
}

var tuv_mungunmorit = InfoBox();
var tuv_erdene = InfoBox();
var tuv_batsvmber= InfoBox();
var tuv_bornuur= InfoBox();
var tuv_svmber= InfoBox();
var tuv_jargalant= InfoBox();
var tuv_tseel= InfoBox();
var tuv_zaamar= InfoBox();
var tuv_bayandelger= InfoBox();
var tuv_ugtaal= InfoBox();
var tuv_bayanchandmani= InfoBox();
var tuv_bayanhangai= InfoBox();
var tuv_lvn= InfoBox();
var tuv_bayantsogt= InfoBox();
var tuv_argalant= InfoBox();
var tuv_altanbulag= InfoBox();
var tuv_sergelen= InfoBox();
var tuv_arhust= InfoBox();
var tuv_bayanjargalan= InfoBox();
var tuv_bayan= InfoBox();
var tuv_bayantsagaan= InfoBox();
var tuv_bayanunjvvl= InfoBox();
var tuv_bvren= InfoBox();
var tuv_undurshireet= InfoBox();
var tuv_erdenesant= InfoBox();
var tuv_delgerhaan= InfoBox();
var tuv_zuunmod= InfoBox();
function tuvBubble(map,show){
    if(show==true){
        tuv_mungunmorit= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(48.48748647988415, 108.5009765625),
            content: 'Мөнгөн морьт',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        tuv_erdene= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(48.312427904071775, 107.490234375),
            content: 'Эрдэнэ',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        tuv_batsvmber= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(48.38544219115486, 106.787109375),
            content: 'Батсүмбэр',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        tuv_bornuur= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(48.48748647988415, 106.2322998046875),
            content: 'Борнуур',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        tuv_sergelen= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(47.44294999517948, 106.98486328125),
            content: 'Сэргэлэн',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        tuv_altanbulag= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(47.487513008956554, 106.083984375),
            content: 'Алтанбулаг',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        tuv_bayandelger= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(47.83528342275264, 108.094482421875),
            content: 'Баяндэлгэр',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        tuv_arhust= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(47.48380086737796, 107.9351806640625),
            content: 'Архуст',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        tuv_bayanjargalan= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(47.04766864046083, 108.336181640625),
            content: 'Баянжаргалан',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        tuv_bayan= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(47.15984001304432, 107.6220703125),
            content: 'Баян',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        tuv_bayantsagaan= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(46.78501604269254, 107.05078125),
            content: 'Баянцагаан',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        tuv_bayanunjvvl= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(46.93526088057719, 105.8203125),
            content: 'Баянөнжүүл',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        tuv_bvren= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(46.830133640447386, 105.05126953125),
            content: 'Бүрэн',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        tuv_delgerhaan= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(46.70973594407157, 104.52392578125),
            content: 'Дэлгэрхаан',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        tuv_erdenesant= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(47.234489635299184, 104.326171875),
            content: 'Эрдэнэсант',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        tuv_undurshireet= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(47.428087261714275, 104.94140625),
            content: 'Өндөрширээт',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        tuv_lvn= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(47.78363463526376, 105.05126953125),
            content: 'Лүн',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        tuv_ugtaal= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(48.180738507303836, 105.31494140625),
            content: 'Угтаал',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        tuv_bayanhangai= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(47.84265762816535, 105.53466796875),
            content: 'Баянхагай',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        tuv_zaamar= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(48.19538740833338, 104.5458984375),
            content: 'Заамар',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        tuv_tseel= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(48.48748647988415, 105.1611328125),
            content: 'Цээл',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        tuv_argalant= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(47.857402894658236, 105.93017578125),
            content: 'Аргалант',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        tuv_jargalant= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(48.552978164400734, 105.75439453125),
            content: 'Жаргалант',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        tuv_bayantsogt= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(48.070738264258296, 105.875244140625),
            content: 'Баянцогт',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        tuv_bayanchandmani= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(48.21003212234042, 106.19384765625),
            content: 'Баянчандмань',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        tuv_svmber= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(48.821332549646634, 105.8642578125),
            content: 'Сүмбэр',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        tuv_zuunmod= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(47.702368466573716, 106.93817138671875),
            content: 'Зуунмод',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        tuv_mungunmorit.open(map);
        tuv_zuunmod.open(map);
        tuv_svmber.open(map);
        tuv_bayanchandmani.open(map);
        tuv_bayantsogt.open(map);
        tuv_argalant.open(map);
        tuv_jargalant.open(map);
        tuv_tseel.open(map);
        tuv_zaamar.open(map);
        tuv_bayanhangai.open(map);
        tuv_ugtaal.open(map);
        tuv_lvn.open(map);
        tuv_undurshireet.open(map);
        tuv_erdenesant.open(map);
        tuv_delgerhaan.open(map);
        tuv_bvren.open(map);
        tuv_bayanunjvvl.open(map);
        tuv_bayantsagaan.open(map);
        tuv_bayan.open(map);
        tuv_bayanjargalan.open(map);
        tuv_arhust.open(map);
        tuv_bayandelger.open(map);
        tuv_altanbulag.open(map);
        tuv_sergelen.open(map);
        tuv_erdene.open(map);
        tuv_bornuur.open(map);
        tuv_batsvmber.open(map);
    }else{
        tuv_mungunmorit.close();
        tuv_zuunmod.close();
        tuv_svmber.close();
        tuv_bayanchandmani.close();
        tuv_bayantsogt.close();
        tuv_jargalant.close();
        tuv_argalant.close();
        tuv_tseel.close();
        tuv_zaamar.close();
        tuv_bayanhangai.close();
        tuv_ugtaal.close();
        tuv_lvn.close();
        tuv_undurshireet.close();
        tuv_erdenesant.close();
        tuv_delgerhaan.close();
        tuv_bvren.close();
        tuv_bayanunjvvl.close();
        tuv_bayantsagaan.close();
        tuv_bayan.close();
        tuv_bayanjargalan.close();
        tuv_arhust.close();
        tuv_bayandelger.close();
        tuv_altanbulag.close();
        tuv_sergelen.close();
        tuv_batsvmber.close();
        tuv_bornuur.close();
        tuv_erdene.close();
    }
}
var hentii_umunudelger = new InfoBox();
var hentii_batshireet= new InfoBox();
var hentii_binder= new InfoBox();
var hentii_bayanadraga= new InfoBox();
var hentii_dadal= new InfoBox();
var hentii_tsenhermandal= new InfoBox();
var hentii_delgerhaan= new InfoBox();
var hentii_norvolin= new InfoBox();
var hentii_jargalanthaan= new InfoBox();
var hentii_batnorov= new InfoBox();
var hentii_herlen= new InfoBox();
var hentii_bayanovoo= new InfoBox();
var hentii_bayanhutagt= new InfoBox();
var hentii_murun= new InfoBox();
var hentii_bayanmunh= new InfoBox();
var hentii_galshir= new InfoBox();
var hentii_darhan= new InfoBox();
function hentiiBubble(map,show){
    if(show==true){
        hentii_batshireet= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(48.83579746243093, 109.742431640625),
            content: 'Батширээт',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        hentii_dadal= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(49.05227025601607, 111.3134765625),
            content: 'Дадал',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        hentii_umunudelger= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(48.19538740833338, 109.40185546875),
            content: 'Өмөнөдэлгэр',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        hentii_binder= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(48.67645370777654, 110.478515625),
            content: 'Биндэр',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        hentii_bayanadraga= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(48.42920055556841, 110.98388671875),
            content: 'Баянадрага',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        hentii_norvolin= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(48.531157010976706, 111.796875),
            content: 'Норволин',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        hentii_batnorov= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(47.931066347509784, 111.181640625),
            content: 'Батноров',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        hentii_bayanovoo= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(47.78363463526376, 111.884765625),
            content: 'Баяновоо',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        hentii_herlen= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(47.69497434186282, 110.36865234375),
            content: 'Хэрлэн',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        hentii_tsenhermandal= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(47.84265762816535, 108.74267578125),
            content: 'Цэнхэрмандал',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        hentii_delgerhaan= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(47.26432008025478, 108.720703125),
            content: 'Дэлгэрхаан',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        hentii_jargalanthaan= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(47.502358951968596, 109.248046875),
            content: 'Жаргалантхаан',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        hentii_bayanhutagt= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(47.12995075666307, 110.654296875),
            content: 'Баянхутагт',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        hentii_murun= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(47.279229002570816, 110.0390625),
            content: 'Мөрөн',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        hentii_bayanmunh= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(46.89023157359399, 109.51171875),
            content: 'Баянмөнх',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        hentii_darhan= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(46.48326472915561, 109.22607421875),
            content: 'Дархан',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        hentii_galshir= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(46.52863469527167, 110.478515625),
            content: 'Галшир',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        hentii_batshireet.open(map);
        hentii_darhan.open(map);
        hentii_bayanmunh.open(map);
        hentii_murun.open(map);
        hentii_bayanhutagt.open(map);
        hentii_jargalanthaan.open(map);
        hentii_delgerhaan.open(map);
        hentii_tsenhermandal.open(map);
        hentii_herlen.open(map);
        hentii_bayanovoo.open(map);
        hentii_batnorov.open(map);
        hentii_norvolin.open(map);
        hentii_bayanadraga.open(map);
        hentii_binder.open(map);
        hentii_umunudelger.open(map);
        hentii_dadal.open(map);
    }else{
        hentii_batshireet.close();
        hentii_darhan.close();
        hentii_bayanmunh.close();
        hentii_murun.close();
        hentii_bayanhutagt.close();
        hentii_jargalanthaan.close();
        hentii_delgerhaan.close();
        hentii_tsenhermandal.close();
        hentii_herlen.close();
        hentii_bayanovoo.close();
        hentii_batnorov.close();
        hentii_norvolin.close();
        hentii_bayanadraga.close();
        hentii_binder.close();
        hentii_umunudelger.close();
        hentii_dadal.close();
    }
}
var arhangai_tariat = new InfoBox();
var arhangai_jargalant= new InfoBox();
var arhangai_undurulaan= new InfoBox();
var arhangai_tsahir= new InfoBox();
var arhangai_hangai= new InfoBox();
var arhangai_chuluut= new InfoBox();
var arhangai_ihtamir= new InfoBox();
var arhangai_bulgan= new InfoBox();
var arhangai_tsenher= new InfoBox();
var arhangai_battsengel= new InfoBox();
var arhangai_tuvshruuleh= new InfoBox();
var arhangai_hotont= new InfoBox();
var arhangai_erdenemandal= new InfoBox();
var arhangai_hairhan= new InfoBox();
var arhangai_tsetserleg= new InfoBox();
var arhangai_ugiinuur= new InfoBox();
var arhangai_ulziit= new InfoBox();
var arhangai_hashaat= new InfoBox();
function arhangaiBubble(map,show){
    if(show==true){
        arhangai_undurulaan= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(47.97521412341618, 100.5908203125),
            content: 'Өндөрулаан',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        arhangai_jargalant= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(48.69096039092549, 100.56884765625),
            content: 'Жаргалант',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        arhangai_erdenemandal= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(48.39273786659243, 101.107177734375),
            content: 'Эрдэнэмандал',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        arhangai_tariat= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(48.188063481211415, 99.66796875),
            content: 'Тариат',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        arhangai_tsahir= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(47.96785877999253, 98.404541015625),
            content: 'Цахир',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        arhangai_hangai= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(47.702368466573716, 99.0087890625),
            content: 'Хангай',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        arhangai_chuluut= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(47.45780853075031, 99.95361328125),
            content: 'Цулуут',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        arhangai_ihtamir= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(47.60616304386874, 100.733642578125),
            content: 'Ихтамир',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        arhangai_tsetserleg= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(48.980216985374994, 100.865478515625),
            content: 'Цэцэрлэг',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        arhangai_hairhan= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(48.531157010976706, 101.77734375),
            content: 'Хайрхан',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        arhangai_battsengel= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(47.90161354142077, 101.62353515625),
            content: 'Батцэнгэл',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        arhangai_bulgan= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(47.18971246448421, 100.953369140625),
            content: 'Булган',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        arhangai_tsenher= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(47.100044694025215, 101.44775390625),
            content: 'Цэнхэр',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        arhangai_tuvshruuleh= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(47.3834738721015, 101.876220703125),
            content: 'Төвшрүүлэх',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        arhangai_ulziit= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(48.09275716032735, 102.392578125),
            content: 'Өлзийт',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        arhangai_ugiinuur= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(47.702368466573716, 102.4365234375),
            content: 'Өгийнуур',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        arhangai_hotont= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(47.2270293988673, 102.19482421875),
            content: 'Хотонт',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        arhangai_hashaat= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(47.45037978769006, 103.018798828125),
            content: 'Хашаат',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        arhangai_erdenemandal= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(47.48565697095909, 101.44500732421875),
            content: 'Эрдэнэмандал',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        arhangai_undurulaan.open(map);
        arhangai_erdenemandal.open(map);
        arhangai_hashaat.open(map);
        arhangai_hotont.open(map);
        arhangai_ugiinuur.open(map);
        arhangai_ulziit.open(map);
        arhangai_tuvshruuleh.open(map);
        arhangai_tsenher.open(map);
        arhangai_bulgan.open(map);
        arhangai_battsengel.open(map);
        arhangai_hairhan.open(map);
        arhangai_tsetserleg.open(map);
        arhangai_ihtamir.open(map);
        arhangai_chuluut.open(map);
        arhangai_hangai.open(map);
        arhangai_tsahir.open(map);
        arhangai_tariat.open(map);
        arhangai_erdenemandal.open(map);
        arhangai_jargalant.open(map);
    }else{
        arhangai_undurulaan.close();
        arhangai_erdenemandal.close();
        arhangai_hashaat.close();
        arhangai_hotont.close();
        arhangai_ugiinuur.close();
        arhangai_ulziit.close();
        arhangai_tuvshruuleh.close();
        arhangai_tsenher.close();
        arhangai_bulgan.close();
        arhangai_battsengel.close();
        arhangai_hairhan.close();
        arhangai_tsetserleg.close();
        arhangai_ihtamir.close();
        arhangai_chuluut.close();
        arhangai_hangai.close();
        arhangai_tsahir.close();
        arhangai_tariat.close();
        arhangai_erdenemandal.close();
        arhangai_jargalant.close();
    }
}
var selenge_tvshig = new InfoBox();
var selenge_tsagaannuur= new InfoBox();
var selenge_hashaat= new InfoBox();
var selenge_baruunbvren= new InfoBox();
var selenge_orhontuul= new InfoBox();
var selenge_sant= new InfoBox();
var selenge_orhon= new InfoBox();
var selenge_saihan= new InfoBox();
var selenge_bayangol= new InfoBox();
var selenge_mandal= new InfoBox();
var selenge_euruu= new InfoBox();
var selenge_hvder= new InfoBox();
var selenge_altanbulag= new InfoBox();
var selenge_shaamar= new InfoBox();
var selenge_javhlant= new InfoBox();
var selenge_zvvnbvren= new InfoBox();
var selenge_svhbaatar= new InfoBox();
function selengeBubble(map,show){
    if(show==true){
        selenge_tvshig = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(50.2682767372753, 104.886474609375),
            content: 'Түшиг',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        selenge_tsagaannuur= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(49.95828842806968, 104.886474609375),
            content: 'Цагааннуур',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        selenge_hashaat= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(49.710272582105695, 105.22705078125),
            content: 'Хашаат',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        selenge_baruunbvren= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(49.28930640196742, 104.7216796875),
            content: 'Баруунбүрэн',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        selenge_orhontuul= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(48.785151998043155, 104.8095703125),
            content: 'Орхонтуул',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        selenge_altanbulag= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(50.162824333817284, 106.50146484375),
            content: 'Алтанбулаг',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        selenge_sant= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(49.389524451582155, 105.216064453125),
            content: 'Сант',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        selenge_orhon= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(48.99463598353408, 105.35888671875),
            content: 'Орхон',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        selenge_euruu= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(49.32512199104001, 107.105712890625),
            content: 'Ерөө',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        selenge_hvder= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(49.7173764049358, 107.42431640625),
            content: 'Хүдэр',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        selenge_zvvnbvren= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(49.944150351645476, 105.809326171875),
            content: 'Зүүнбүрэн',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        selenge_mandal= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(48.814098527355746, 106.644287109375),
            content: 'Мандал',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        selenge_saihan= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(49.26063518364422, 105.611572265625),
            content: 'Сайхан',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        selenge_bayangol= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(49.001843917978526, 105.985107421875),
            content: 'Баянгол',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        selenge_javhlant= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(49.703167720179884, 106.259765625),
            content: 'Жавхлант',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        selenge_shaamar= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(50.05008477838258, 106.171875),
            content: 'Шаамар',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        selenge_svhbaatar= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(50.21909462044748, 106.2103271484375),
            content: 'Сүхбаатар',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        selenge_tvshig.open(map);
        selenge_shaamar.open(map);
        selenge_svhbaatar.open(map);
        selenge_javhlant.open(map);
        selenge_bayangol.open(map);
        selenge_saihan.open(map);
        selenge_mandal.open(map);
        selenge_zvvnbvren.open(map);
        selenge_hvder.open(map);
        selenge_euruu.open(map);
        selenge_orhon.open(map);
        selenge_sant.open(map);
        selenge_altanbulag.open(map);
        selenge_orhontuul.open(map);
        selenge_baruunbvren.open(map);
        selenge_hashaat.open(map);
        selenge_tsagaannuur.open(map);
    }else{
        selenge_tvshig.close();
        selenge_shaamar.close();
        selenge_svhbaatar.close();
        selenge_javhlant.close();
        selenge_bayangol.close();
        selenge_saihan.close();
        selenge_mandal.close();
        selenge_zvvnbvren.close();
        selenge_hvder.close();
        selenge_euruu.close();
        selenge_orhon.close();
        selenge_sant.close();
        selenge_altanbulag.close();
        selenge_orhontuul.close();
        selenge_baruunbvren.close();
        selenge_hashaat.close();
        selenge_tsagaannuur.close();
    }
}
var darhanuul_hongor = new InfoBox();
var darhanuul_shariingol= new InfoBox();
var darhanuul_darhan= new InfoBox();
var darhanuul_orhon= new InfoBox();
function darhanuulBubble(map,show){
    if(show==true){
        darhanuul_hongor= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(49.38594874941847, 106.19659423828125),
            content: 'Хонгор',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        darhanuul_shariingol= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(49.221185044221336, 106.446533203125),
            content: 'Шарынгол',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        darhanuul_darhan= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(49.46990895880499, 105.9356689453125),
            content: 'Дархан',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        darhanuul_orhon= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(49.62850392384226, 105.919189453125),
            content: 'Орхон',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        darhanuul_hongor.open(map);
        darhanuul_orhon.open(map);
        darhanuul_darhan.open(map);
        darhanuul_shariingol.open(map);
    }else{
        darhanuul_hongor.close();
        darhanuul_orhon.close();
        darhanuul_darhan.close();
        darhanuul_shariingol.close();
    }
}
var suhbaatar_erdenetsagaan = new InfoBox();
var suhbaatar_dariganga= new InfoBox();
var suhbaatar_naran= new InfoBox();
var suhbaatar_ongon= new InfoBox();
var suhbaatar_bayandelger= new InfoBox();
var suhbaatar_asgat= new InfoBox();
var suhbaatar_halzan= new InfoBox();
var suhbaatar_uulbayan= new InfoBox();
var suhbaatar_svhbaatar= new InfoBox();
var suhbaatar_tuvshinshiree= new InfoBox();
var suhbaatar_munhhaan= new InfoBox();
var suhbaatar_tvmentsogt= new InfoBox();
var suhbaatar_baruunurt= new InfoBox();
function suhbaatarBubble(map,show){
    if(show==true){
        suhbaatar_erdenetsagaan= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(45.94351068030586, 115.235595703125),
            content: 'Эрдэнэцагаан',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        suhbaatar_dariganga= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(45.390735154248894, 113.961181640625),
            content: 'Дарьганга',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        suhbaatar_naran= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(45.0502402697946, 113.44482421875),
            content: 'Наран',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        suhbaatar_ongon= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(45.18978009667531, 112.774658203125),
            content: 'Онгон',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        suhbaatar_asgat= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(46.03510927947334, 113.7744140625),
            content: 'Асгат',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        suhbaatar_bayandelger= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(45.583289756006316, 112.17041015625),
            content: 'Баяндэлгэр',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        suhbaatar_svhbaatar= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(46.89023157359399, 113.455810546875),
            content: 'Сүхбаатар',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        suhbaatar_halzan= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(46.255846818480336, 112.796630859375),
            content: 'Халзан',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        suhbaatar_uulbayan= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(46.57396679652779, 112.17041015625),
            content: 'Уулбаян',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        suhbaatar_tuvshinshiree= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(46.30140615437332, 111.500244140625),
            content: 'Түвшинширээ',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        suhbaatar_munhhaan= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(47.03269459852135, 111.86279296875),
            content: 'Мөнххаан',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        suhbaatar_tvmentsogt= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(47.53945544742392, 112.25830078125),
            content: 'Түмэнцогт',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        suhbaatar_baruunurt= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(46.677710064644344, 113.2965087890625),
            content: 'Баруунурт',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        suhbaatar_erdenetsagaan.open(map);
        suhbaatar_baruunurt.open(map);
        suhbaatar_tvmentsogt.open(map);
        suhbaatar_munhhaan.open(map);
        suhbaatar_tuvshinshiree.open(map);
        suhbaatar_halzan.open(map);
        suhbaatar_uulbayan.open(map);
        suhbaatar_svhbaatar.open(map);
        suhbaatar_bayandelger.open(map);
        suhbaatar_asgat.open(map);
        suhbaatar_ongon.open(map);
        suhbaatar_dariganga.open(map);
        suhbaatar_naran.open(map);
    }else{
        suhbaatar_erdenetsagaan.close();
        suhbaatar_baruunurt.close();
        suhbaatar_tvmentsogt.close();
        suhbaatar_munhhaan.close();
        suhbaatar_tuvshinshiree.close();
        suhbaatar_uulbayan.close();
        suhbaatar_halzan.close();
        suhbaatar_svhbaatar.close();
        suhbaatar_bayandelger.close();
        suhbaatar_asgat.close();
        suhbaatar_ongon.close();
        suhbaatar_naran.close();
        suhbaatar_dariganga.close();
    }
}
var dundgovi_ulziit = new InfoBox();
var dundgovi_undurshil= new InfoBox();
var dundgovi_huld= new InfoBox();
var dundgovi_delgerhangai= new InfoBox();
var dundgovi_gurvansaihan= new InfoBox();
var dundgovi_saihanovoo= new InfoBox();
var dundgovi_erdenedalai= new InfoBox();
var dundgovi_luus= new InfoBox();
var dundgovi_saintsagaan= new InfoBox();
var dundgovi_adaatsag= new InfoBox();
var dundgovi_deren= new InfoBox();
var dundgovi_goviugtaal= new InfoBox();
var dundgovi_delgertsogt= new InfoBox();
var dundgovi_bayanjargalan= new InfoBox();
var dundgovi_tsagaandelger= new InfoBox();
function dundgoviBubble(map,show){
    if(show==true){
        dundgovi_ulziit= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(44.75453548416007, 106.54541015625),
            content: 'Өлзийт',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        dundgovi_huld= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(44.941473354802504, 105.325927734375),
            content: 'Хулд',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        dundgovi_delgerhangai= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(45.120052841530516, 104.47998046875),
            content: 'Дэлгэрхангай',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        dundgovi_saihanovoo= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(45.51404592560424, 103.9306640625),
            content: 'Сайхановоо',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        dundgovi_erdenedalai= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(45.98169518512228, 104.69970703125),
            content: 'Эрдэнэдалай',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        dundgovi_luus= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(45.5679096098613, 105.6005859375),
            content: 'Луус',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        dundgovi_gurvansaihan= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(45.51404592560424, 106.885986328125),
            content: 'Гурвансайхан',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        dundgovi_undurshil= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(45.174292524076726, 107.940673828125),
            content: 'Өндөршил',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        dundgovi_adaatsag= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(46.293815562333684, 105.567626953125),
            content: 'Адаацаг',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        dundgovi_saintsagaan= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(45.75985868785574, 106.182861328125),
            content: 'Сайнцагаан',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        dundgovi_delgertsogt= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(46.255846818480336, 106.116943359375),
            content: 'Дэлгэрцогт',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        dundgovi_deren= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(46.21785176740299, 106.688232421875),
            content: 'Дэрэн',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        dundgovi_goviugtaal= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(45.97406038956237, 107.347412109375),
            content: 'Говьугтаал',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        dundgovi_bayanjargalan= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(45.729191061299936, 107.874755859375),
            content: 'Баянжаргалан',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        dundgovi_tsagaandelger= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(46.40756396630067, 107.720947265625),
            content: 'Цагаандэлгэр',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        dundgovi_ulziit.open(map);
        dundgovi_tsagaandelger.open(map);
        dundgovi_bayanjargalan.open(map);
        dundgovi_goviugtaal.open(map);
        dundgovi_deren.open(map);
        dundgovi_delgertsogt.open(map);
        dundgovi_saintsagaan.open(map);
        dundgovi_adaatsag.open(map);
        dundgovi_undurshil.open(map);
        dundgovi_gurvansaihan.open(map);
        dundgovi_luus.open(map);
        dundgovi_erdenedalai.open(map);
        dundgovi_delgerhangai.open(map);
        dundgovi_saihanovoo.open(map);
        dundgovi_huld.open(map);
    }else{
        dundgovi_ulziit.close();
        dundgovi_tsagaandelger.close();
        dundgovi_bayanjargalan.close();
        dundgovi_goviugtaal.close();
        dundgovi_deren.close();
        dundgovi_delgertsogt.close();
        dundgovi_saintsagaan.close();
        dundgovi_adaatsag.close();
        dundgovi_undurshil.close();
        dundgovi_luus.close();
        dundgovi_gurvansaihan.close();
        dundgovi_erdenedalai.close();
        dundgovi_delgerhangai.close();
        dundgovi_saihanovoo.close();
        dundgovi_huld.close();
    }
}
var govialtai_altai = new InfoBox();
var govialtai_tsogt= new InfoBox();
var govialtai_erdene= new InfoBox();
var govialtai_bugat= new InfoBox();
var govialtai_tohil= new InfoBox();
var govialtai_tseel= new InfoBox();
var govialtai_chandmani= new InfoBox();
var govialtai_tugrug= new InfoBox();
var govialtai_haliun= new InfoBox();
var govialtai_sharga= new InfoBox();
var govialtai_huhmorit= new InfoBox();
var govialtai_darvi= new InfoBox();
var govialtai_bayanuul= new InfoBox();
var govialtai_jargalant= new InfoBox();
var govialtai_taishir= new InfoBox();
var govialtai_delger= new InfoBox();
var govialtai_biger= new InfoBox();
var govialtai_esunzvil= new InfoBox();
function govialtaiBubble(map,show){
    if(show==true){
        govialtai_altai= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(44.62175409623324, 95.07568359375),
            content: 'Алтай',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        govialtai_tsogt= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(45.10454630976873, 96.3720703125),
            content: 'Цогт',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        govialtai_erdene= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(44.23732831822537, 97.18505859375),
            content: 'Эрдэнэ',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        govialtai_tseel= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(45.42929873257377, 95.4052734375),
            content: 'Цээл',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        govialtai_bugat= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(45.213003555993964, 93.878173828125),
            content: 'Бугат',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        govialtai_tugrug= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(45.87471224890479, 94.68017578125),
            content: 'Төгрөг',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        govialtai_tohil= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(46.02748185248664, 93.58154296875),
            content: 'Тохил',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        govialtai_chandmani= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(45.49094569262732, 97.75634765625),
            content: 'Чандмань',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        govialtai_biger= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(45.744526980468436, 96.96533203125),
            content: 'Бигэр',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        govialtai_haliun= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(45.95878764035642, 95.679931640625),
            content: 'Халиун',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        govialtai_darvi= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(46.55130547880643, 94.031982421875),
            content: 'Дарви',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        govialtai_sharga= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(46.430285240839964, 94.921875),
            content: 'Шарга',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        govialtai_esunzvil= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(46.263442671779885, 95.888671875),
            content: 'Есөнзүйл',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        govialtai_huhmorit= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(47.398349200359256, 94.32861328125),
            content: 'Хөхморьт',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        govialtai_bayanuul= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(46.98774725646568, 94.94384765625),
            content: 'Баянуул',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        govialtai_jargalant= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(47.08508535995383, 95.767822265625),
            content: 'Жаргалант',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        govialtai_taishir= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(46.604167162931844, 96.2841796875),
            content: 'Тайшир',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        govialtai_delger= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(46.240651955001695, 97.27294921875),
            content: 'Дэлгэр',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        govialtai_altai.open(map);
        govialtai_delger.open(map);
        govialtai_taishir.open(map);
        govialtai_jargalant.open(map);
        govialtai_bayanuul.open(map);
        govialtai_huhmorit.open(map);
        govialtai_esunzvil.open(map);
        govialtai_sharga.open(map);
        govialtai_darvi.open(map);
        govialtai_haliun.open(map);
        govialtai_biger.open(map);
        govialtai_chandmani.open(map);
        govialtai_tohil.open(map);
        govialtai_tugrug.open(map);
        govialtai_bugat.open(map);
        govialtai_tseel.open(map);
        govialtai_erdene.open(map);
        govialtai_tsogt.open(map);
    }else{
        govialtai_altai.close();
        govialtai_delger.close();
        govialtai_taishir.close();
        govialtai_jargalant.close();
        govialtai_bayanuul.close();
        govialtai_huhmorit.close();
        govialtai_esunzvil.close();
        govialtai_sharga.close();
        govialtai_darvi.close();
        govialtai_haliun.close();
        govialtai_biger.close();
        govialtai_chandmani.close();
        govialtai_tohil.close();
        govialtai_tugrug.close();
        govialtai_bugat.close();
        govialtai_tseel.close();
        govialtai_erdene.close();
        govialtai_tsogt.close();
    }
}
var orhon_bayanundur = new InfoBox();
var orhon_jargalan = new InfoBox();
function orhonBubble(map,show){
    if(show==true){
        orhon_jargalan = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(49.01445529346132, 104.35089111328125),
            content: 'Жаргалан',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        orhon_bayanundur = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(49.0558701819386, 104.08447265625),
            content: 'Баянөндөр',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        orhon_bayanundur.open(map);
        orhon_jargalan.open(map);
    }else{
        orhon_bayanundur.close();
        orhon_jargalan.close();
    }
}
var ulaanbaatar_songinohairhan = new InfoBox();
var ulaanbaatar_hanuul = new InfoBox();
var ulaanbaatar_svhbaatar= new InfoBox();
var ulaanbaatar_bayanzvrh= new InfoBox();
var ulaanbaatar_nalaih= new InfoBox();
var ulaanbaatar_baganuur= new InfoBox();
var ulaanbaatar_bagahangai= new InfoBox();
var ulaanbaatar_chingeltei= new InfoBox();
var ulaanbaatar_bayangol= new InfoBox();
function ulaanbaatarBubble(map,show){
    if(show==true){
        ulaanbaatar_songinohairhan = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(48.04870994288686, 106.6717529296875),
            content: 'Сонгинохайрхан',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        ulaanbaatar_baganuur = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(47.81315451752768, 108.314208984375),
            content: 'Багануур',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        ulaanbaatar_bayanzvrh= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(47.923704717745686, 107.083740234375),
            content: 'Баянзүрх',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        ulaanbaatar_bagahangai= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(47.368594345213374, 107.413330078125),
            content: 'Багахангай',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        ulaanbaatar_hanuul= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(47.80577611936809, 106.69921875),
            content: 'Хануул',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        ulaanbaatar_nalaih= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(47.77625204393236, 107.369384765625),
            content: 'Налайх',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        ulaanbaatar_svhbaatar= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(48.06339653776211, 106.94915771484375),
            content: 'Сүхбаатар',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        ulaanbaatar_chingeltei= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(48.011975126709956, 106.8804931640625),
            content: 'Чингэлтэй',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        ulaanbaatar_bayangol= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(47.90529605906089, 106.8145751953125),
            content: 'Баянгол',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        ulaanbaatar_songinohairhan.open(map);
        ulaanbaatar_bayangol.open(map);
        ulaanbaatar_chingeltei.open(map);
        ulaanbaatar_svhbaatar.open(map);
        ulaanbaatar_nalaih.open(map);
        ulaanbaatar_hanuul.open(map);
        ulaanbaatar_bagahangai.open(map);
        ulaanbaatar_bayanzvrh.open(map);
        ulaanbaatar_baganuur.open(map);
    }else{
        ulaanbaatar_songinohairhan.close();
        ulaanbaatar_bayangol.close();
        ulaanbaatar_chingeltei.close();
        ulaanbaatar_svhbaatar.close();
        ulaanbaatar_nalaih.close();
        ulaanbaatar_hanuul.close();
        ulaanbaatar_bagahangai.close();
        ulaanbaatar_bayanzvrh.close();
        ulaanbaatar_baganuur.close();
    }
}
var govisumber_choir= new InfoBox();
var govisumber_shiveegovi= new InfoBox();
var govisumber_bayanaltai= new InfoBox();
function govisumberBubble(map,show){
    if(show==true){
        govisumber_bayanaltai= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(46.68713141244413, 108.28125),
            content: 'Баяналтай',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        govisumber_choir= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(46.445427497233865, 108.5284423828125),
            content: 'Чойр',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        govisumber_shiveegovi= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(46.042735653846506, 108.47900390625),
            content: 'Шивээговь',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        govisumber_bayanaltai.open(map);
        govisumber_shiveegovi.open(map);
        govisumber_choir.open(map);
    }else{
        govisumber_bayanaltai.close();
        govisumber_shiveegovi.close();
        govisumber_choir.close();
    }
}
var ovorhangai_bogd = new InfoBox();
var ovorhangai_baruunbayanulaan = new InfoBox();
var ovorhangai_hujirt= new InfoBox();
var ovorhangai_guchinus= new InfoBox();
var ovorhangai_tugrug= new InfoBox();
var ovorhangai_bayangol= new InfoBox();
var ovorhangai_nariinteel= new InfoBox();
var ovorhangai_hairhandulaan= new InfoBox();
var ovorhangai_taragt= new InfoBox();
var ovorhangai_uyanga= new InfoBox();
var ovorhangai_arvainheer= new InfoBox();
var ovorhangai_zvvnbayanulaan= new InfoBox();
var ovorhangai_batulziit= new InfoBox();
var ovorhangai_ulziit= new InfoBox();
var ovorhangai_sant= new InfoBox();
var ovorhangai_harhorin= new InfoBox();
var ovorhangai_esunzvil= new InfoBox();
var ovorhangai_bayanundur= new InfoBox();
var ovorhangai_bvrd= new InfoBox();
function ovorhangaiBubble(map,show){
    if(show==true){
        ovorhangai_bogd = new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(44.49650533109348, 102.073974609375),
            content: 'Богд',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        ovorhangai_baruunbayanulaan= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(45.19752230305685, 101.414794921875),
            content: 'Баруунбаян-Улаан',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        ovorhangai_guchinus= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(45.213003555993964, 102.1728515625),
            content: 'Гучин-Ус',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        ovorhangai_tugrug= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(45.19752230305685, 102.974853515625),
            content: 'Төгрөг',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        ovorhangai_nariinteel= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(45.82114340079471, 101.42578125),
            content: 'Нарийнтээл',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        ovorhangai_taragt= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(46.01222384063238, 102.72216796875),
            content: 'Тарагт',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        ovorhangai_bayangol= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(45.77518618352103, 103.216552734375),
            content: 'Баянгол',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        ovorhangai_sant= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(46.01222384063238, 103.721923828125),
            content: 'Сант',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        ovorhangai_uyanga= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(46.39998810407942, 101.810302734375),
            content: 'Уянга',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        ovorhangai_batulziit= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(46.76996843356982, 101.8212890625),
            content: 'Батөлзийт',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        ovorhangai_zvvnbayanulaan= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(46.55886030311719, 102.7880859375),
            content: 'Зүүнбаян-Улаан',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        ovorhangai_hujirt= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(46.86019101567027, 102.667236328125),
            content: 'Хужирт',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        ovorhangai_harhorin= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(47.11499982620772, 102.85400390625),
            content: 'Хархорин',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        ovorhangai_bvrd= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(47.06263847995432, 103.7109375),
            content: 'Бүрд',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        ovorhangai_ulziit= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(46.41513877649202, 103.4033203125),
            content: 'Өлзийт',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        ovorhangai_esunzvil= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(46.73986059969267, 103.60107421875),
            content: 'Есөнзүйл',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        ovorhangai_bayanundur= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(46.445427497233865, 104.051513671875),
            content: 'Баянөндөр',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        ovorhangai_arvainheer= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(46.25204849722291, 102.7825927734375),
            content: 'Арвайнхээр',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        ovorhangai_hairhandulaan= new InfoBox({
            closeBoxMargin: "10px 2px 2px 2px",
            padding: 0,
            backgroundColor: 'white',
            boxStyle: {                    textAlign: "center", fontSize: "8pt", zIndex: 99999            },
            closeBoxMargin: "10px 2px 2px 2px",
            position: new google.maps.LatLng(45.954968795113395, 102.07672119140625),
            content: 'Хайрхандулаан',
            map: map,
            disableAutoPan: true,
            borderColor: 'black',
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            closeBoxURL: "",
            arrowStyle: 0
        });
        ovorhangai_bogd.open(map);
        ovorhangai_hairhandulaan.open(map);
        ovorhangai_arvainheer.open(map);
        ovorhangai_bayanundur.open(map);
        ovorhangai_esunzvil.open(map);
        ovorhangai_ulziit.open(map);
        ovorhangai_bvrd.open(map);
        ovorhangai_harhorin.open(map);
        ovorhangai_hujirt.open(map);
        ovorhangai_zvvnbayanulaan.open(map);
        ovorhangai_batulziit.open(map);
        ovorhangai_uyanga.open(map);
        ovorhangai_sant.open(map);
        ovorhangai_bayangol.open(map);
        ovorhangai_taragt.open(map);
        ovorhangai_nariinteel.open(map);
        ovorhangai_tugrug.open(map);
        ovorhangai_guchinus.open(map);
        ovorhangai_baruunbayanulaan.open(map);
    }else{
        ovorhangai_bogd.close();
        ovorhangai_hairhandulaan.close();
        ovorhangai_arvainheer.close();
        ovorhangai_bayanundur.close();
        ovorhangai_esunzvil.close();
        ovorhangai_ulziit.close();
        ovorhangai_bvrd.close();
        ovorhangai_harhorin.close();
        ovorhangai_hujirt.close();
        ovorhangai_zvvnbayanulaan.close();
        ovorhangai_batulziit.close();
        ovorhangai_uyanga.close();
        ovorhangai_sant.close();
        ovorhangai_bayangol.close();
        ovorhangai_taragt.close();
        ovorhangai_nariinteel.close();
        ovorhangai_tugrug.close();
        ovorhangai_guchinus.close();
        ovorhangai_baruunbayanulaan.close();
    }
}
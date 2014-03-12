/**
 * Created By Carlixyz.
 * User: pc
 * Date: 26/12/12
 * Time: 12:05
 * Include function code from: http://www.anyexample.com/webdev/javascript/javascript_getelementsbyclass_function.xml
 *     <!-- saved from url=(0017)http://localhost/ -->
 */
    var fonts = ["lobster_1.4regular", 'harabararegular', 'lobster_1.4regular', 'bauhausdemi'];                             // Repetimos la fuente lobster para aumentar probabilidades
    var currentFont;
//    var isIE = /*@cc_on!@*/false;
//    if(window.isIE){}



    if(!document.querySelectorAll){
        (function (d) {
            d = document, a = d.styleSheets[0] || d.createStyleSheet();
            d.querySelectorAll = function (e) {
                a.addRule(e, 'f:b');
                for (var l = d.all, b = 0, c = [], f = l.length; b < f; b++) l[b].currentStyle.f && c.push(l[b]);
                a.removeRule(0);
                return c
            }
        })()
    }                                                                                                                   // Si navegador no posee función querySelectorAll definir una

    run = function() {

                                                                                                // Función que se ejecuta al cargar el body de una pagina
        var randomFont = getElementsByClass("randomFont");
        currentFont = choose(fonts);


//        for(i=0; i<randomFont.length; i++){
        for( var i= 0, max = randomFont.length; i< max; i++){
            randomFont[i].style.fontFamily = currentFont;                                                               // Asignar fuente aleatoria al refrescar pagina
        }


        var Cookies = new CookieHandler();
        var lang = Cookies.getCookie('lang');

        if (lang == null){                                                                                              // Buscar idioma del navegador en cookie y sino ...
//            console.log( 'lang cookie is: '+ lang +' Setting one from browser');
            lang = lookBrowserLang();                                                                                   // asignar uno según la configuración del navegador
//            console.log(lang);
//            Cookies.setCookie('lang',lang, 365*60*60);
        }

        SetLang(lang);


    };


    var choose = function(arr) {
            return arr[Math.floor(Math.random() * arr.length)];                                                             // Función para elegír algo al azar de una lista (de fuentes)
        };

    function SetLang(language)	{

        var elements = document.querySelectorAll('[lang]');

        for(var i= 0, max= elements.length ; i<max; i++){
            if ( ((elements[i]).getAttribute("lang")) !== language)
                elements[i].style.display = "none";
            else
                elements[i].style.display = "block";
        }

        var Cookies = new CookieHandler();
    //    console.log('saving Cookie: ' + language);
        Cookies.setCookie('lang',language, 365*60*60);
    }                                                                                       // Función para setear idioma y guardar config. en un cookie

    function getElementsByClass( searchClass, domNode, tagName) {
        if (domNode == null) domNode = document;
        if (tagName == null) tagName = '*';
        var el = new Array();
        var tags = domNode.getElementsByTagName(tagName);
        var tcl = " "+searchClass+" ";
        for(var i=0,j= 0, max=tags.length ; i<max; i++) {
            var test = " " + tags[i].className + " ";
            if (test.indexOf(tcl) != -1)
                el[j++] = tags[i];
        }
        return el;
    }                                                       // Función para obtener todos los elementos de una clase

    function lookBrowserLang() {
        var idiomaNavegador = new String;

        if (navigator.language){
            idiomaNavegador = navigator.language[0] + navigator.language[1];

            // En este caso, el idioma devuelto puede contener el subcódigo de idioma (p.ej. "es-ES").
        } else {
            idiomaNavegador = navigator.browserLanguage;
            // En este caso, el idioma devuelto solo conteniene el código de idioma (p.ej. "es")
        }

        if ((idiomaNavegador !== 'es') && (idiomaNavegador !== 'pt') && (idiomaNavegador !== 'br') && (idiomaNavegador !== 'en'))   // si se trata de otro país configurar por default
            idiomaNavegador = 'en';

//        console.log(idiomaNavegador);
        return idiomaNavegador;
    }                                                                                        // Función para obtener el idioma de un navegador

    function CookieHandler() {

        this.setCookie = function (name, value, seconds) {

            if (typeof(seconds) != 'undefined') {
                var date = new Date();
                date.setTime(date.getTime() + (seconds*1000));
                var expires = "; expires=" + date.toGMTString();
            }
            else {
                var expires = "";
            }

            document.cookie = name+"="+value+expires+"; path=/";
        };

        this.getCookie = function (name) {

            name = name + "=";
            var carray = document.cookie.split(';');

            for(var i= 0, max = carray.length;i < max;i++) {
                var c = carray[i];
                while (c.charAt(0)==' ') c = c.substring(1,c.length);
                if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
            }

            return null;
        };

        this.deleteCookie = function (name) {
            this.setCookie(name, "", -1);
        };

    }                                                                                                                       // namespace utilitario para manejar Cookies







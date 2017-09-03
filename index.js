var color = getCookie("bg-color");
var shadow = getCookie("nav-shadow");
var isNavbarFixed = getCookie("nav-fixed") == "false" ? false : true;
if (color !== "") changeTheme(color);
if (shadow !== "") navShadow(shadow);
setNavbarFixed(isNavbarFixed);


function changeTheme(name) {
    document.body.className = "container-boxed " + (name == "white" ? "theme-red styled-scrollbar-colored" : "styled-scrollbar") + " bg-" + name + (isNavbarFixed ? " navbar-margin" : "");
    setCookie("bg-color", name, 60);
}

function navShadow(level) {
    document.getElementById("navbar").className = "navbar " + (isNavbarFixed ? "fixed-top " : "") + "shadow-" + level + " bg-green";
    setCookie("nav-shadow", level, 60);
}

function setNavbarFixed(isFixed) {
    var level = getCookie("nav-shadow");
    var color = getCookie("nav-shadow");
    if (level == "") level = 2;
    if (color == "") color = "white";

    document.getElementById("navbar").className = "navbar " + (isFixed ? "fixed-top " : "") + "shadow-" + level + " bg-green";
    document.body.className = "container-boxed " + (color == "white" ? "theme-red styled-scrollbar-colored" : "styled-scrollbar") + " bg-" + color + (isFixed ? " navbar-margin" : "");
    setCookie("nav-fixed", isFixed, 60);
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
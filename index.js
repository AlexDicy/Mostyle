var color = getCookie("bg-color");
var shadow = getCookie("nav-shadow");
var isNavbarFixed = getCookie("nav-fixed") == "false" ? false : true;
var previous = color == "" ? "white" : color;

if (color !== "") changeTheme(false, false, false, color);
if (shadow !== "") navShadow(shadow);
setNavbarFixed(isNavbarFixed);


function changeTheme(element, save, loadPrevious, cookie) {
    var color = "white";
    if (element) color = element.getAttribute("data-color");
    else color = cookie;
    if (loadPrevious) color = previous;
    document.body.className = "container-boxed " + (color == "white" ? "theme-red styled-scrollbar-colored" : "styled-scrollbar") + " bg-" + color + (isNavbarFixed ? " navbar-margin" : "");
    if (save) {
        setCookie("bg-color", color, 60);
        previous = color;
    }
}

function navShadow(level) {
    document.getElementById("navbar").className = "navbar " + (isNavbarFixed ? "fixed-top " : "") + "shadow-" + level + " bg-green";
    setCookie("nav-shadow", level, 60);
}

function setNavbarFixed(isFixed) {
    var level = getCookie("nav-shadow");
    var color = getCookie("bg-color");
    if (level == "") level = 2;
    if (color == "") color = "white";

    document.getElementById("navbar").className = "navbar " + (isFixed ? "fixed-top " : "") + "shadow-" + level + " bg-green";
    document.body.className = "container-boxed " + (color == "white" ? "theme-red styled-scrollbar-colored" : "styled-scrollbar") + " bg-" + color + (isFixed ? " navbar-margin" : "");
    setCookie("nav-fixed", isFixed, 60);
    isNavbarFixed = isFixed;
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
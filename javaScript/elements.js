let switchMode1 = document.getElementById("switch1");
let switchMode2 = document.getElementById("switch2");
let switchMode3 = document.getElementById("switch3");
let switchMode4 = document.getElementById("switch4");
let switchMode5 = document.getElementById("switch5");
let switchMode6 = document.getElementById("switch6");
let switchMode7 = document.getElementById("switch7");

switchMode1.onclick = function() {
    let theme = document.getElementById("theme");
    if(theme.getAttribute("href") != "../css/themes/anemo.css"){
        theme.href = "../css/themes/anemo.css";
    }
    else{
        theme.href = "../css/themes/baseColor.css";
    }
}

switchMode2.onclick = function() {
    let theme = document.getElementById("theme");
    if(theme.getAttribute("href") != "../css/themes/geo.css"){
        theme.href = "../css/themes/geo.css";
    }
    else{
        theme.href = "../css/themes/baseColor.css";
    }
}

switchMode3.onclick = function() {
    let theme = document.getElementById("theme");
    if(theme.getAttribute("href") != "../css/themes/electro.css"){
        theme.href = "../css/themes/electro.css";
    }
    else{
        theme.href = "../css/themes/baseColor.css";
    }
}

switchMode4.onclick = function() {
    let theme = document.getElementById("theme");
    if(theme.getAttribute("href") != "../css/themes/dendro.css"){
        theme.href = "../css/themes/dendro.css";
    }
    else{
        theme.href = "../css/themes/baseColor.css";
    }
}

switchMode5.onclick = function() {
    let theme = document.getElementById("theme");
    if(theme.getAttribute("href") != "../css/themes/hydro.css"){
        theme.href = "../css/themes/hydro.css";
    }
    else{
        theme.href = "../css/themes/baseColor.css";
    }
}

switchMode6.onclick = function() {
    let theme = document.getElementById("theme");
    if(theme.getAttribute("href") != "../css/themes/pyro.css"){
        theme.href = "../css/themes/pyro.css";
    }
    else{
        theme.href = "../css/themes/baseColor.css";
    }
}

switchMode7.onclick = function() {
    let theme = document.getElementById("theme");
    if(theme.getAttribute("href") != "../css/themes/сrio.css"){
        theme.href = "../css/themes/сrio.css";
    }
    else{
        theme.href = "../css/themes/baseColor.css";
    }
}
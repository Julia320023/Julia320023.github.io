let temaButton = document.getElementById("tema");
temaButton.addEventListener("click", darkLightTema);
let mode = 'light';
//let element = document.getElementById("log");

function darkLightTema() {
    if(mode == 'light'){
        mode = 'dark';
        document.body.setAttribute('dark', '');
        //element.src = "../images/Logo_dark.png";
        localStorage.setItem('theme', 'dark');
    }else{
        mode = 'light';
        document.body.removeAttribute('dark');
        //element.src = "../images/Logo_light.png";
        localStorage.removeItem('theme');
    }
}

window.onload = function(){
    if(localStorage.getItem('theme') === 'dark'){
        document.body.setAttribute('dark', '');
        //element.src = "../images/Logo_dark.png";
    }
}

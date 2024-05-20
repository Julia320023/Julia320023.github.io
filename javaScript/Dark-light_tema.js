let temaButton = document.getElementById("tema");
temaButton.addEventListener("click", darkLightTema);
let sum = 1;

function darkLightTema() {
    let element = document.getElementById("log");
    if(sum == 1){
        document.body.setAttribute('dark', '');
        sum = 2;
        element.src = "../images/Logo_dark.png";
    }else{
        document.body.removeAttribute('dark');
        sum = 1;
        element.src = "../images/Logo_light.png";
        
    }
}
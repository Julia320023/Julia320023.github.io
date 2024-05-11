let temaButton = document.getElementById("tema");
temaButton.addEventListener("click", darkLightTema);
let sum = 1;

function darkLightTema() {
    if(sum == 1){
        document.body.setAttribute('dark', '');
        sum = 2;
        document.getElementById("Dark-light").innerHTML = "День";
    }else{
        document.body.removeAttribute('dark');
        sum = 1;
        document.getElementById("Dark-light").innerHTML = "Ночь";
    }
}
let temaButton = document.getElementById("tema");
temaButton.addEventListener("click", darkLightTema);
let mode = 'light';

function darkLightTema() {
    if(mode == 'light'){
        mode = 'dark';
        document.body.setAttribute('dark', '');
        localStorage.setItem('theme', 'dark');
    }else{
        mode = 'light';
        document.body.removeAttribute('dark');
        localStorage.removeItem('theme');
    }
}

window.onload = function(){
    if(localStorage.getItem('theme') === 'dark'){
        document.body.setAttribute('dark', '');
    }
}

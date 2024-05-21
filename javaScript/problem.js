temaButton.addEventListener("click", elementsTema);
let sum = document.get;

function elementsTema() {
    if(sum == 'light'){
        sum = 'dark';
        document.body.setAttribute('dark', '');
        element.src = "../images/Logo_dark.png";
        localStorage.setItem('theme', 'dark');
    }else{
        sum = 'light';
        document.body.removeAttribute('dark');
        element.src = "../images/Logo_light.png";
        localStorage.removeItem('theme');
    }
}

window.onload = function(){
    if(localStorage.getItem('theme') === 'dark'){
        document.body.setAttribute('dark', '');
        element.src = "../images/Logo_dark.png";
    }
}
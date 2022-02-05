function openMenu(){
    document.getElementById('menu').style.width = '350px';
}

function closeMenu(){
    document.getElementById('menu').style.width = '0px';
}

function popUp(id){
    document.getElementById(id).style.display = 'block';
}

function closePopUp(id){
    document.getElementById(id).style.display = 'none';
}

let img = document.querySelector('#social-footer-pin')
img.setAttribute('src', './assets/social_midias/Pinterest_active.png')

function roll(id){
    document.getElementById(id).style.display = 'none'
}
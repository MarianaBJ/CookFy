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


async function getThing(){
    const response = await fetch('https://randomuser.me/api/')
    const data = await response.json()
    const user = data.results[0]
    console.log(user)
    displayUser(user)
    
}


function displayUser(user){
    const name = document.getElementById('profile')
    const name1 = document.getElementById('profile1')
    const name2 = document.getElementById('profile2')

    const email = document.getElementById('email')
    const telefone = document.getElementById('telefone')

    name.innerText = `${user.name.first}`
    name1.innerText = `${user.name.first}`
    name2.innerText = `${user.name.first}`
    email.innerText = `${user.email}`
    telefone.innerHTML = `${user.cell}`
}
getThing()
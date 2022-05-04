import { rickandmorty } from './data.js';


let selectGender = document.getElementById('selectgender'); //obtengo el elemento html con id selectgender
let genders = rickandmorty.getGenders(); //extrae genders del json

for (let i = 0; i < genders.length; i++) {
    let opt = document.createElement('option'); //crea elemento options por cada indice
    opt.value = genders[i];// se le agrega un valor ( value)
    opt.innerHTML = genders[i]; // agrega el texto de ese valor 
    selectGender.appendChild(opt); // para agregarlo como hijo..... para que todos los valores que se vayan ingresando queden dentro del camco select
}


document.getElementById("selectgender").addEventListener('change', () => { //cada vez que cambia el valor del selectgender, ejecuta (change) lo siquiente
    let selectGender = document.getElementById('selectgender'); //obtengo el elemento html con id selectgender
    let genderSelected = selectGender.options[selectGender.selectedIndex].value; // obtengo todos los generos, de esos saco el seleccionado y le obtengo el valor
    
    let selectSpecies = document.getElementById('selectspecies'); 
    let species = rickandmorty.getSpecies(genderSelected); 
    
    selectSpecies.innerHTML = "";
    let opt = document.createElement('option'); 
    opt.innerHTML = "Seleccionar Especie"; 
    opt.disabled = true;
    opt.selected = true;
    selectSpecies.appendChild(opt); 

    for (let i = 0; i < species.length; i++) {
        let opt = document.createElement('option'); 
        opt.value = species[i];
        opt.innerHTML = species[i]; 
        selectSpecies.appendChild(opt); 
    }
});

document.getElementById("selectspecies").addEventListener('change', () => { //cada vez que cambia el valor del selectgender, ejecuta (change) lo siquiente
    
    let selectGender = document.getElementById('selectgender'); //obtengo el elemento html con id selectgender
    let genderSelected = selectGender.options[selectGender.selectedIndex].value; // obtengo todos los generos, de esos saco el seleccionado y le obtengo el valor

    let selectSpecies = document.getElementById('selectspecies'); //obtengo el elemento html con id selectgender
    let speciesSelected = selectSpecies.options[selectSpecies.selectedIndex].value; // obtengo todos los generos, de esos saco el seleccionado y le obtengo el valor

    let selectStatus = document.getElementById('selectstatus'); 
    let status = rickandmorty.getStatus(genderSelected,speciesSelected); 
    selectStatus.innerHTML = "";

    let opt = document.createElement('option'); 
    opt.innerHTML = "Seleccionar Estado de Vida"; 
    opt.disabled = true;
    opt.selected = true;
    selectStatus.appendChild(opt); 

    for (let i = 0; i < status.length; i++) {
        let opt = document.createElement('option'); 
        opt.value = status[i];
        opt.innerHTML = status[i]; 
        selectStatus.appendChild(opt); 
    }
});

document.getElementById("selectstatus").addEventListener('change', () => { //cada vez que cambia el valor del selectgender, ejecuta (change) lo siquiente
     
let selectGender = document.getElementById('selectgender'); //obtengo el elemento html con id selectgender
let genderSelected = selectGender.options[selectGender.selectedIndex].value; // obtengo todos los generos, de esos saco el seleccionado y le obtengo el valor

let selectSpecies = document.getElementById('selectspecies'); //obtengo el elemento html con id selectgender
let speciesSelected = selectSpecies.options[selectSpecies.selectedIndex].value; // obtengo todos los generos, de esos saco el seleccionado y le obtengo el valor

let selectStatus = document.getElementById('selectstatus'); //obtengo el elemento html con id selectgender
let statusSelected = selectStatus.options[selectStatus.selectedIndex].value; // obtengo todos los generos, de esos saco el seleccionado y le obtengo el valor


let selectCharacter = document.getElementById('selectcharacter'); 
let character = rickandmorty.getCharacter(genderSelected,speciesSelected,statusSelected); 

selectCharacter.innerHTML = "";
let opt = document.createElement('option'); 
opt.innerHTML = "Seleccionar Personaje"; 
opt.disabled = true;
opt.selected = true;
selectCharacter.appendChild(opt); 
for (let i = 0; i < character.length; i++) {
    let opt = document.createElement('option'); 
    opt.value = character[i].id;
    opt.innerHTML = character[i].name; 
    selectCharacter.appendChild(opt); 
}
});



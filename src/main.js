import { rickandmorty } from './data.js';


let selectGender = document.getElementById('selectgender'); //obtengo el elemento html con id selectgender
let genders = rickandmorty.getGenders(); //extrae genders de data.js (este archivo los extrae del json)
for (let i = 0; i < genders.length; i++) { //ocupo los genders extraidos del elemento getGenders
    let opt = document.createElement('option'); //crea elemento options por cada uno de los generos 
    opt.value = genders[i];// se le agrega un valor ( value)
    opt.innerHTML = genders[i]; // agrega el texto de ese valor 
    selectGender.appendChild(opt); // para agregarlo como hijo..... para que todos los valores que se vayan ingresando queden dentro del campo select
}


document.getElementById("selectgender").addEventListener('change', () => { //cada vez que cambia el valor del selectgender, ejecuta (change) lo siquiente
    let selectGender = document.getElementById('selectgender'); //obtengo el elemento html con id selectgender
    let genderSelected = selectGender.options[selectGender.selectedIndex].value; // obtengo todos los generos, de esos saco el seleccionado y le obtengo el valor
//obtengo el genero seleccionado

    let selectSpecies = document.getElementById('selectspecies');//obtener el elemento que luego voy a manipular
    let species = rickandmorty.getSpecies(genderSelected);//obtengo las especies que sus personajes coincidan con el genero
    selectSpecies.innerHTML = "";//borro todas las opciones que haya  tenido la seleccion anterior 
    let opt = document.createElement('option');//creo un elemento option 
    opt.innerHTML = "Select Species";//esa opcion le agrego un texto
    opt.disabled = true;//esa opcion la desactivo
    opt.selected = true;//pero lo muestro pero no se puede seleccionar 
    selectSpecies.appendChild(opt);// se agrega 

    for (let i = 0; i < species.length; i++) {
        let opt = document.createElement('option');
        opt.value = species[i];
        opt.innerHTML = species[i];
        selectSpecies.appendChild(opt);
    }
});

document.getElementById("selectspecies").addEventListener('change', () => { //cada vez que cambia el valor del selectspecies, ejecuta (change) lo siquiente

    let selectGender = document.getElementById('selectgender'); 
    let genderSelected = selectGender.options[selectGender.selectedIndex].value; 

    let selectSpecies = document.getElementById('selectspecies'); 
    let speciesSelected = selectSpecies.options[selectSpecies.selectedIndex].value; 

    let selectStatus = document.getElementById('selectstatus');
    let status = rickandmorty.getStatus(genderSelected, speciesSelected);
    selectStatus.innerHTML = "";

    let opt = document.createElement('option');
    opt.innerHTML = "Select State of life";
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

document.getElementById("selectstatus").addEventListener('change', () => { 

    let selectGender = document.getElementById('selectgender'); 
    let genderSelected = selectGender.options[selectGender.selectedIndex].value; 

    let selectSpecies = document.getElementById('selectspecies'); 
    let speciesSelected = selectSpecies.options[selectSpecies.selectedIndex].value; 

    let selectStatus = document.getElementById('selectstatus'); 
    let statusSelected = selectStatus.options[selectStatus.selectedIndex].value; 


    let selectCharacter = document.getElementById('selectcharacter');
    let character = rickandmorty.getCharacters(genderSelected, speciesSelected, statusSelected);
    selectCharacter.innerHTML = "";
    let opt = document.createElement('option');
    opt.innerHTML = "Select a Character";
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

document.getElementById("selectcharacter").addEventListener('change', () => {

    let selectCharacter = document.getElementById("selectcharacter");//obtengo el campo
    let characterSelected = selectCharacter.options[selectCharacter.selectedIndex].value;//para saber cual personaje se seleccionó en base a su valor (id)

    let character = rickandmorty.getCharacter(characterSelected)
    document.getElementById("imagecharacter").src = character[0].image;
    document.getElementById("namedetail").innerHTML = character[0].name;
    document.getElementById("genderdetail").innerHTML = character[0].gender;
    document.getElementById("stausdetail").innerHTML = character[0].status;
    document.getElementById("origindetail").innerHTML = character[0].origin.name;
    document.getElementById("speciedetail").innerHTML = character[0].species;
    document.getElementById("typedetail").innerHTML = character[0].type;

  let listchaptes = "";
  character[0].episode.forEach(x => {
    listchaptes = listchaptes + x.replace("https://rickandmortyapi.com/api/episode/" , "") + ", ";
  });
    document.getElementById("AllTheChapters").innerHTML = listchaptes.substring (0,listchaptes.length - 2);

    document.getElementById("datapersonajes").style.display="flex";// va a hacer que al momento de seleccionar un personaje el cuadro de descripcion aparezca ordenado con flexbox

});

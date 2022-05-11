import data from './data/rickandmorty/rickandmorty.js';

export const rickandmorty = {
  getGenders: () => {
    let genders = data.results.map(
      g => g.gender
    );
    let uniqueGenders = [];
    for(let i=0; i<genders.length; i++){
      if(!uniqueGenders.includes(genders[i])){
        uniqueGenders.push(genders[i]);
      }
    }
    return uniqueGenders.sort();
  },

  getSpecies: (gender) => {
    let speciesfilter = data.results.filter( //voy a filtrar la informacion que se encuentra en "results" de json en donde.....
      element => element.gender === gender // si el genero es exactamente igual al genero seleccionado, tome toda la informacion de ese genero
    );
    let species = speciesfilter.map(
      g => g.species
    );

    let uniqueSpecies = [];
    for(let i=0; i<species.length; i++){
      if(!uniqueSpecies.includes(species[i])){
        uniqueSpecies.push(species[i]);
      }
    }
    return uniqueSpecies.sort();
  },

  getStatus: (gender,species) => {
    let statusfilter = data.results.filter( //voy a filtrar la informacion que se encuentra en "results" de json en donde.....
      element =>  element.gender === gender && 
                  element.species === species // si el genero es exactamente igual al genero y especie seleccionado, tome toda la informacion de ese genero
    );
    let status = statusfilter.map(
      g => g.status
    );

    let uniqueStatus = [];
    for(let i=0; i<status.length; i++){
      if(!uniqueStatus.includes(status[i])){
        uniqueStatus.push(status[i]);
      }
    }
    return uniqueStatus.sort();
    },

    getCharacters: (gender,species, status) => {
      let characterfilter = data.results.filter( 
        element =>  element.gender === gender && 
                    element.species === species &&
                    element.status === status 
      );
      let character = characterfilter.map(
        g => {
         return {
           id: g.id,
           name: g.name
         }
        }
      );
  
      let uniqueCharacter = [];
      for(let i=0; i<character.length; i++){
        if(!uniqueCharacter.includes(character[i])){
          uniqueCharacter.push(character[i]);
        }
      }
      return uniqueCharacter.sort();
      },



getCharacter: (id) =>{
  let characterfilter = data.results.filter( 
    element =>  element.id ==id);
  debugger;
    return characterfilter;

}                                                                  
}

// function ObtenerComunasUnicasLargo(){
//   //obtener una descripción de forma unica
//       console.log(arreglo);
      // let comunas = arreglo.map(
      //     elemento => elemento.comuna
      // );
      // console.log(comunas);
  //     let comunaunica = [];
  //     for(let i = 0; i < comunas.length; i++){
  //         if(!comunaunica.includes(comunas[i])){
  //             comunaunica.push(comunas[i]);
  //         }
  //     }
  //     console.log(comunaunica);
  
  // }
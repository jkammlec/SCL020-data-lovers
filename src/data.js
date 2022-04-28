// estas funciones son de ejemplo

// export const example = () => {
//   return 'example';
// };

// export const anotherExample = () => {
//   return 'OMG';
// };

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
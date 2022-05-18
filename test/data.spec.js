import { rickandmorty } from '../src/data.js';

describe('Genders', () => {
  it(
    'Cantidad de generos' // Mensaje que aparecera en la prueba
    , () => {
    expect(
      rickandmorty.getGenders().length // Que voy a probar
      ).toBe(
        4 // Que resultado espero de esa prueba
        );
  });
  it('El primer resultado es "Female"', () => {
    expect(rickandmorty.getGenders()[0]).toBe("Female");
  });
});

describe('Species', () => {
  it('Cantidad especies si el genero es Male', () => {
    expect(rickandmorty.getSpecies("Male").length).toBe(11);
  });
  it('Cantidad especies si el genero es Female', () => {
    expect(rickandmorty.getSpecies("Female").length).toBe(7);
  });
});

describe('Status', () => {
  it('Cantidad de estados si el genero es Famele y la especie es Human', () => {
    expect(rickandmorty.getStatus("Female", "Human").length).toBe(3);
  });
  it('Cantidad de estados si el genero es Female y la especie es Alien', () => {
    expect(rickandmorty.getStatus("Female", "Alien").length).toBe(2);
  });
});

describe('Characters', () => {
  it('Cantidad  personajes si el estado es Alive, el genero es Famele y la especie es Human', () => {
    expect(rickandmorty.getCharacters("Female","Human","Alive").length).toBe(33);
  });
  it('Cantidad de personajes si el estado es Dead si el genero es Female y la especie es Alien', () => {
    expect(rickandmorty.getCharacters("Female", "Alien","Dead").length).toBe(6);
  });
});

describe('Character', () => {
  it('El nombre del personaje es Alien Rick si el id es 15', () => {
    expect(rickandmorty.getCharacter("15")[0].name).toBe("Alien Rick");
  });
  it('El nombre del personaje es Bill si el id es 46', () => {
    expect(rickandmorty.getCharacter("46")[0].name).toBe("Bill");
  });
});

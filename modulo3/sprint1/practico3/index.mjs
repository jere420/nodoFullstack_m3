import { leerSuperheroes,agregarSuperheroes } from '../utils.mjs';
// Leer y mostrar la lista de superhéroes ordenada
const agregar =  agregarSuperheroes('../superheroes.txt','../agregarSuperheroes.txt');
const superheroes = leerSuperheroes('../superheroes.txt');
// Filtrar los superhéroes que tienen debilidad radioactiva
const superheroesConDebilidadRadioactiva = superheroes.filter((superheroe) => {
  return superheroe.debilidad.toLowerCase().includes('radioactiva');
});

  
  // Mostrar solo los superhéroes con debilidad a "radioactiva"
  console.log('Superhéroes con debilidad a Radioactiva:');
  console.log(superheroesConDebilidadRadioactiva);
console.log('Superhéroes ordenados:');
console.log(agregar);
console.log(superheroes);
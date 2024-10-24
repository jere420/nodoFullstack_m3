import { agregarSuperheroe, leerSuperheroes } from './utils.mjs';

// Definir un nuevo superhéroe
const nuevoSuperheroe = {
    id: 4,
    nombreSuperheroe: "Hulk",
    nombreReal: "Bruce Banner",
    nombreSociedad: "Avengers",
    edad: 40,
    planetaOrigen: "Tierra",
    debilidad: "Furia",
    poder: ["Super fuerza", "Regeneración"],
    habilidadEspecial: "Fuerza incontrolable",
    aliado: ["Ironman"],
    enemigo: ["Abominación"]
};

// Agregar el nuevo superhéroe
agregarSuperheroe('./superheroes.txt', nuevoSuperheroe);

// Leer y mostrar la lista actualizada de superhéroes
const superheroes = leerSuperheroes('./superheroes.txt');
console.log('Lista de superhéroes actualizada:');
console.log(superheroes);




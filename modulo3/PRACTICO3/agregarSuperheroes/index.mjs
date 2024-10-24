import { agregarSuperheroe, leerSuperheroes } from './utilsInvencible.mjs';

// Definir un nuevo superhéroe (puedes cambiar esto por los personajes de Invencible)
const nuevoSuperheroe = {
    id: 1,
    nombreSuperheroe: "Invencible",
    nombreReal: "Mark Grayson",
    nombreSociedad: "Guardians of the Globe",
    edad: 18,
    planetaOrigen: "Tierra",
    debilidad: "Emociones humanas",
    poder: ["Vuelo", "Super fuerza", "Regeneración", "Velocidad"],
    habilidadEspecial: "Resistencia sobrehumana",
    aliado: ["Atom Eve"],
    enemigo: ["The Flaxans"]
};

// Agregar el nuevo superhéroe
agregarSuperheroe('./agregarSuperheroes.txt', nuevoSuperheroe);

// Leer y mostrar la lista actualizada de superhéroes
const superheroes = leerSuperheroes('./agregarSuperheroes.txt');
console.log('Lista de superhéroes actualizada:');
console.log(superheroes);

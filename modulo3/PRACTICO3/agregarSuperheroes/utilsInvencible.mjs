import fs from 'fs';

// Clase para representar un Superhéroe
class Superheroe {
    constructor(id, nombreSuperheroe, nombreReal, nombreSociedad, edad, planetaOrigen, debilidad, poder, habilidadEspecial, aliado, enemigo) {
        this.id = id;
        this.nombreSuperheroe = nombreSuperheroe;
        this.nombreReal = nombreReal;
        this.nombreSociedad = nombreSociedad;
        this.edad = edad;
        this.planetaOrigen = planetaOrigen;
        this.debilidad = debilidad;
        this.poder = poder;
        this.habilidadEspecial = habilidadEspecial;
        this.aliado = aliado;
        this.enemigo = enemigo;
    }
}

// Función para leer y ordenar los superhéroes por ID
export function leerSuperheroes(ruta) {
    const datos = fs.readFileSync(ruta, 'utf8'); 
    const superheroesArray = JSON.parse(datos); 
    
    // Convertir a instancias de Superheroe
    const superheroes = superheroesArray.map(hero => new Superheroe(
        hero.id, 
        hero.nombreSuperheroe, 
        hero.nombreReal,
        hero.nombreSociedad, 
        hero.edad, 
        hero.planetaOrigen, 
        hero.debilidad, 
        hero.poder, 
        hero.habilidadEspecial, 
        hero.aliado, 
        hero.enemigo
    ));
    
    // Ordenar por ID
    superheroes.sort((a, b) => a.id - b.id);
    
    return superheroes;
}

// Función para agregar un nuevo superhéroe, si no existe
export function agregarSuperheroe(ruta, nuevoHeroe) {
    // Leer los datos actuales
    const datos = fs.readFileSync(ruta, 'utf8');
    const superheroesArray = JSON.parse(datos);
    
    // Verificar si ya existe un superhéroe con el mismo ID
    const existe = superheroesArray.some(heroe => heroe.id === nuevoHeroe.id);
    
    if (!existe) {
        // Agregar el nuevo superhéroe al array si no existe
        superheroesArray.push(nuevoHeroe);
        console.log('Nuevo superhéroe agregado');
    } else {
        console.log('El superhéroe con ese ID ya existe.');
    }
    
    // Escribir los datos actualizados de vuelta al archivo
    fs.writeFileSync(ruta, JSON.stringify(superheroesArray, null, 2), 'utf8');
}

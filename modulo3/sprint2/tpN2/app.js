// Importa mongoose para conectar y manejar la base de datos
const mongoose = require('mongoose');

// Conexión a MongoDB
mongoose.connect('mongodb+srv://Grupo-18:grupo18@cursadanodejs.ls9ii.mongodb.net/Node-js', {})
  .then(() => console.log('Conexión exitosa a MongoDB'))
  .catch(error => console.error('Error al conectar a MongoDB:', error));

// Definición del esquema para los superhéroes
const superheroSchema = new mongoose.Schema({
  nombreSuperHeroe: { type: String, required: true },
  nombreReal: { type: String, required: true },
  edad: { type: Number, min: 0 },
  planetaOrigen: { type: String, default: 'Desconocido' },
  debilidad: String,
  poderes: [String],
  aliados: [String],
  enemigos: [String],
  createdAt: { type: Date, default: Date.now }
}, { collection: 'Grupo-18' }); // Aquí defines la colección de cada grupo

// Definición del modelo SuperHero basado en el esquema superheroSchema
const SuperHero = mongoose.model('SuperHero', superheroSchema);

// Función para insertar un nuevo superhéroe en la base de datos
async function insertSuperHero() {
  // Crea una nueva instancia del modelo SuperHero con la información de Superman
  const hero = new SuperHero({
    nombreSuperHeroe: 'Superman',
    nombreReal: 'Clark Kent',
    edad: 35,
    planetaOrigen: 'Krypton',
    debilidad: 'Kryptonita',
    poderes: ['Super fuerza', 'Vuelo', 'Visión láser', 'Invulnerabilidad', 'Súper velocidad'],
    aliados: ['Batman', 'Wonder Woman'],
    enemigos: ['Lex Luthor', 'Doomsday']
  });

  


  // Guarda el superhéroe en la base de datos
  await hero.save();
  // Imprime un mensaje de confirmación con los detalles del superhéroe insertado
  console.log('Superhéroe insertado:', hero);
}

insertSuperHero();


// Función para actualizar la edad de un superhéroe específico
async function updateSuperHero(nombreSuperHeroe) {
  // Busca un superhéroe por el nombre y actualiza la edad a 26
  const result = await SuperHero.updateOne(
    { nombreSuperHeroe: nombreSuperHeroe },
    { $set: { edad: 26 } }
  );
  // Imprime el resultado de la actualización
  console.log('Resultado de la actualización:', result);
}

// Función para eliminar un superhéroe de la base de datos
async function deleteSuperHero(nombreSuperHeroe) {
  // Busca un superhéroe por el nombre y lo elimina de la base de datos
  const result = await SuperHero.deleteOne({ nombreSuperHeroe: nombreSuperHeroe });
  // Imprime un mensaje de confirmación con los detalles del superhéroe eliminado
  console.log('Superhéroe eliminado:', result);
}

// Función para encontrar superhéroes cuyo planeta de origen sea "Tierra"
async function findSuperHeroes() {
  // Busca todos los superhéroes cuyo planeta de origen sea "Tierra"
  const heroes = await SuperHero.find({ planetaOrigen: 'Tierra' });
  // Imprime la lista de superhéroes encontrados
  console.log('Superhéroes encontrados:', heroes);
}

// Llama a la función para buscar superhéroes cuyo planeta de origen sea "Tierra"
findSuperHeroes();

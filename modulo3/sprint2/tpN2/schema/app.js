const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Grupo-18:grupo18@cursadanodejs.ls9ii.mongodb.net/PracticaSuperHeroes')
  .then(() => console.log('Conexión exitosa a MongoDB'))
  .catch(error => console.error('Error al conectar a MongoDB:', error));





// //esquema

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
  });
  
  const SuperHero = mongoose.model('SuperHero', superheroSchema);
  



// insertar un nuevo superhéroe en la base de datos
  async function insertSuperHero() {
    const hero = new SuperHero({
      nombreSuperHeroe: 'Spiderman',
      nombreReal: 'Peter Parker',
      edad: 25,
      planetaOrigen: 'Tierra',
      debilidad: 'Radioactiva',
      poderes: ['Trepar paredes', 'Sentido arácnido', 'Super fuerza', 'Agilidad'],
      aliados: ['Ironman'],
      enemigos: ['Duende Verde']
    });
  
    await hero.save();
    console.log('Superhéroe insertado:', hero);
  }
  
  insertSuperHero();



  //actualización de un superhéroe ya existente

  async function updateSuperHero(nombreSuperHeroe) {
    const result = await SuperHero.updateOne(
      { nombreSuperHeroe: nombreSuperHeroe },
      { $set: { edad: 26 } }
    );
    console.log('Resultado de la actualización:', result);
  }
  
  updateSuperHero('Spiderman');
  
  

// para eliminar un superhéroe de la base de datos MongoDB

  async function deleteSuperHero(nombreSuperHeroe) {
    const result = await SuperHero.deleteOne({ nombreSuperHeroe: nombreSuperHeroe });
    console.log('Superhéroe eliminado:', result);
  }
  
  deleteSuperHero('Spiderman');
  

  //para buscar todos los superhéroes cuyo planeta de origen sea "Tierra"


  async function findSuperHeroes() {
    const heroes = await SuperHero.find({ planetaOrigen: 'Tierra' });
    console.log('Superhéroes encontrados:', heroes);
  }
  
  findSuperHeroes();
  
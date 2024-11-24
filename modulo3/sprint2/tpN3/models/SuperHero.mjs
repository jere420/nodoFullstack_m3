import mongoose from 'mongoose';

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

export default mongoose.model('SuperHero', superheroSchema);



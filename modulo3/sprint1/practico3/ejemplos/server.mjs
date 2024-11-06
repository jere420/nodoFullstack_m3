import express from 'express';
import { leerSuperheroes, agregarSuperheroes } from '../utils.mjs';

const app = express();
const PORT = 3000;

// Middleware para analizar datos JSON
app.use(express.json());

// Endpoint para obtener la lista de superhéroes
app.get('/superheroes', (req, res) => {
  const superheroes = leerSuperheroes('../superheroes.txt');
  res.json(superheroes);
});



// Endpoint para agregar nuevos superhéroes
app.post('/superheroes', (req, res) => {
  try {
    // Supone que envías la lista de nuevos superhéroes en el cuerpo de la solicitud
    agregarSuperheroes('../superheroes.txt', '../agregarSuperheroes.txt');
    res.status(201).send('Superhéroes agregados con éxito.');
  } catch (error) {
    res.status(500).send('Error al agregar superhéroes.');
  }
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});



import express from 'express';
import { connectDB } from './config/dbConfig.mjs';
import superHeroRoutes from './routes/superHeroRoutes.mjs';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());

// Conexión a MongoDB
connectDB();

// Configuración de rutas
app.use('/api', superHeroRoutes);

// Manejo de errores para rutas no encontradas
app.use((req, res) => {
  res.status(404).send({ mensaje: "Ruta no encontrada" });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});

/* 
Este código es el archivo principal de la aplicación que define la configuración de Express,
 establece la conexión a MongoDB, configura las rutas de la API y maneja los errores de rutas no encontradas.
  También inicia el servidor en el puerto definido.
Funcionalidad: Inicializa el servidor, conecta a la base de datos, y carga las rutas para gestionar todas las
solicitudes relacionadas con superhéroes. */
import mongoose from 'mongoose';

export async function connectDB() {
  try {
    await mongoose.connect(
      'mongodb+srv://usuario:contraseña@cluster0.mongodb.net/PracticaSuperHeroes', {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    );
    console.log('Conexión exitosa a MongoDB');
  } catch (error) {
    console.error('Error al conectar a MongoDB:', error);
    process.exit(1);
  }
}


//Este código define una función asíncrona connectDB que se encarga de conectar la aplicación a una base de datos MongoDB utilizando la librería mongoose.
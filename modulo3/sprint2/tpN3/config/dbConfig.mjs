import mongoose from 'mongoose';

export async function connectDB() {
  try {
    await mongoose.connect(
      'mongodb+srv://Grupo-18:grupo18@cursadanodejs.ls9ii.mongodb.net/Node-js', {

      }
    );
    console.log('Conexión exitosa a MongoDB');
  } catch (error) {
    console.error('Error al conectar a MongoDB:', error);
    process.exit(1);
  }
}


/*Este código define una función asíncrona connectDB que 
se encarga de conectar la aplicación a una base de datos 
MongoDB utilizando la librería mongoose*/



/* // Importa el módulo mongoose, que es una librería de Node.js para interactuar con MongoDB
import mongoose from 'mongoose';

// Exporta de forma asíncrona la función connectDB para poder conectarse a la base de datos MongoDB
export async function connectDB() {
  try {
  
    // Intenta conectarse a la base de datos usando la función connect de mongoose.
    // La URL de conexión contiene la dirección del clúster MongoDB y el nombre de la base de datos.
    await mongoose.connect(
      'mongodb+srv://Grupo-18:grupo18@cursadanodejs.ls9ii.mongodb.net/Node-js', {
        // Aquí podrías incluir opciones adicionales de configuración, como { useNewUrlParser: true, useUnifiedTopology: true }
      }
    );
    // Si la conexión es exitosa, muestra este mensaje en la consola
    console.log('Conexión exitosa a MongoDB');
  } catch (error) {
    // Si ocurre un error durante la conexión, muestra el error en la consola
    console.error('Error al conectar a MongoDB:', error);
    // Termina el proceso de Node.js con un estado de error (1 indica que el proceso terminó con un fallo)
    process.exit(1);
  }
}
 */
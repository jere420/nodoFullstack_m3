import EventEmitter from 'events';

const emisor = new EventEmitter();

// Escuchar el evento 'saludo'
emisor.on('saludo', (nombre) => {
    console.log(`¡Hola, ${nombre}!`);
});

// Emitir el evento 'saludo'
emisor.emit('saludo', 'Mundo');

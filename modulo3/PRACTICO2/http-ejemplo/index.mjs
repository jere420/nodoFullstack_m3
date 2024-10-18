import http from 'http';

// Crear el servidor
const server = http.createServer((req, res) => {
    // Establecer el encabezado de respuesta
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    // Enviar la respuesta al cliente
    res.end('¡Hola, Mundo desde el servidor HTTP!');
});

// Escuchar en el puerto 3000
server.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});

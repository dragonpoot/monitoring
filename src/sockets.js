module.exports = io =>{
    io.on('connection', (socket) => {
        console.log('Vendedor connectado');
        
        socket.on('userCoordinates', coords => {
            socket.broadcast.emit('newUserCoordinates', coords);
        });
    });
}
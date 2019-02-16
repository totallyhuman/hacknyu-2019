
export var uploadImage = (base64) => {
    window.navigator.userAgent = "react-native";

    const io = require('socket.io-client/dist/socket.io');
    var socket = io('http://localhost:5000');

    socket.on('connect', () => {
        console.log("Connected!");
    });

    console.log("Uploading image on socketio instance " + socket);

    socket.emit("uploadimage", base64);
};

window.navigator.userAgent = "ReactNative";
var io = require('socket.io-client');
var serverURL = "http://0.0.0.0:5000";
var socket = io.connect(serverURL);
socket.on('connect', () => {
    console.log("Connected");
});

export var uploadImage = (base64) => {

    console.log(base64);
    
    console.log("Uploading image on socketio instance " + socket);

    socket.emit("uploadimage", base64);
};

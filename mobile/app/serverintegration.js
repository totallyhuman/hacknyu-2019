var serverURL = "http://localhost:5000";

import Toast from 'react-native-simple-toast';

export var uploadImage = (uri) => {

    Toast.show("Uploading and processing image. Please be patient.", Toast.LONG);
    const file = {
        uri: uri,
        name: "image123.jpg",
        type: "image/jpg"
    };

    const body = new FormData();
    body.append('image', file);


    fetch(serverURL + "/api/uploadimage", {
        method: "POST",
        body
    });  
}

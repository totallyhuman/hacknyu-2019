var serverURL = "http://0.0.0.0:5000";

import Toast from 'react-native-simple-toast';

export var uploadImage = async (uri, navigation) => {

    Toast.show("Uploading and processing image. Please be patient.");

    const file = {
        uri: uri,
        name: "image123.jpg",
        type: "image/jpg"
    };

    const body = new FormData();
    body.append('image', file);


    return fetch(serverURL + "/api/uploadimage", {
        method: "POST",
        body
    })
        .then((response) => response.json())
        .then((json) => navigation.navigate("Home"));
}

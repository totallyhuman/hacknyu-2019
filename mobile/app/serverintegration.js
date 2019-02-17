var serverURL = "https://budgetbucket.net";

import Toast from 'react-native-simple-toast';

export var uploadImage = async (uri, navigation) => {

    Toast.show("Uploading and processing image. Please be patient.");

    const file = {
        uri: uri,
        name: "image.jpg",
        type: "image/jpg"
    };

    const body = new FormData();
    body.append('image', file);


    return fetch(serverURL + "/api/uploadimage", {
        method: "POST",
        body
    }).catch(error => console.error(error));
}

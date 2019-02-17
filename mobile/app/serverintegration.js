var serverURL = "https://budgetbucket.net";

import Toast from 'react-native-simple-toast';

export var uploadImage = (uri) => {

    Toast.show("Uploading and processing image. Please be patient.", Toast.LONG);
    const file = {
        uri: uri,
        name: "image.jpg",
        type: "image/jpg"
    };

    const body = new FormData();
    body.append('image', file);


    fetch(serverURL + "/api/uploadimage", {
        method: "POST",
        body
    }).catch(error => console.error(error));
}

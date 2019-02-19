import Toast from 'react-native-simple-toast';

export var uploadImage = async (uri, navigation, reference) => {

    Toast.show("Uploading and processing image - please be patient.");

    const file = {
        uri: uri,
        name: "image.jpg",
        type: "image/jpg"
    };

    const body = new FormData();
    body.append('image', file);


    return fetch(global.serverURL + "/api/uploadimage", {
        method: "POST",
        body
    }).then((response) => {
        reference.setState({imageLink: response._bodyInit});
    });
}

import React from 'react';

import {View, TouchableOpacity} from 'react-native';

import { RNCamera } from 'react-native-camera';

import {camera} from '../styles';
import colors from '../colors';

import CameraButton from '../components/camerabutton';

import firebase from 'firebase';

import {uploadImage} from '../serverintegration';

export default class Camera extends React.Component {
    static navigationOptions = {
        title: 'Capture Image',
        headerStyle: {
            backgroundColor: colors.green
        },
        headerTitleStyle: {
            color: 'white'
        }
    };

    takePicture = async () => {
        if (this.camera) {
            const options = { quality: 0.5, base64: true };
            const data = await this.camera.takePictureAsync(options);
            uploadImage(data.base64);
        }
    }

    render() {
        return (
            <View style={camera.container}>
                <RNCamera
                  ref={ref => {
                      this.camera = ref;
                  }}
                  style={camera.preview}
                  type={RNCamera.Constants.Type.back}
                  flashMode={RNCamera.Constants.FlashMode.off}
                  permissionDialogTitle={'Permission to use camera'}
                  permissionDialogMessage={'We need your permission to use your camera phone'}
                />

              <CameraButton style={{width: "100%"}} onPress={this.takePicture} backgroundColor={colors.green} text="Take Picture!" />
              
            </View>
        );
    }
}

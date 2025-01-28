import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { useState } from 'react';
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Button as BtnElm } from '@rneui/themed';
import { Icon } from "@rneui/base";


export default function Index() {
  const [facing, setFacing] = useState('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [camera, setCamera] = useState(null);
  const [imgSrc, setImgSrc] = useState('https://upload.wikimedia.org/wikipedia/commons/2/25/Coldplay_%282842037407%29.jpg');

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  const btnSnap = async () => {
    const photo = await camera.takePictureAsync({
      quality: 0.5, // Adjust this value (0.0 - 1.0) for picture quality
      skipProcessing: true, // Set to true to skip processing
    });
    console.log(photo);
    console.log(photo.uri);
    setImgSrc(photo.uri);
  }



  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing={facing} ref={myref => setCamera(myref)}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
        </View>
      </CameraView>

      <Button title="Native" onPress={() => console.log('native')} />
      <View style={{ margin: 10 }}>
        <BtnElm radius={"sm"} color="error" onPress={btnSnap}>
          Snap
          <Icon name="camera" color="purple" />
        </BtnElm>
      </View>


      <Image
        source={{ uri: imgSrc }}
        style={{ width: 200, height: 150, borderWidth: 1, borderColor: 'red', margin: 10 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    flex: 0.5,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});


// export default function Index() {
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <Text>Ruppin's App.</Text>
//       <Button title="Native" onPress={() => console.log('native')} />
//       <View style={{margin:10}}>
//         <BtnElm radius={"sm"} color="error"  onPress={() => console.log('elm')}>
//           Save
//           <Icon name="save" color="purple" />
//         </BtnElm>
//       </View>

//     </View>
//   );
// }

import React, { useState } from "react";
import { View, StyleSheet, Image, Button, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from "expo-permissions"

export const PhotoPicker = ({ onPick }) => {
    const [img, setImg] = useState(null)

   const takePhoto = async () => {
   const permissions = Permissions.CAMERA;
   const status = await Permissions.askAsync(permissions)
   console.log(status)

   if(!status.granted) {
    return Alert.alert('Помилка', 'Ви не дали права для створення фото!')
   }

   let image = await ImagePicker.launchCameraAsync({
    quality: 0.8,
    allowsEditing: false,
    aspect: [16, 9]
   });

   if (!image.cancelled) {
    setImg(image.uri);
    onPick(image.uri)
  }
   }

    return (
        <View style={styles.wrapper}>
            <Button title="Зробити фото" onPress={takePhoto}/>
            { img && <Image style={styles.image} source={{uri: img}} /> }
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        marginBottom: 10
    },
    image: {
        width: '100%',
        height: 200,
        marginTop: 10
    }
})
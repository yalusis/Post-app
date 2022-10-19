import { useNavigation } from "@react-navigation/native";
import React, { useRef, useState } from "react";
import { View, Text, StyleSheet, TextInput, Button, ScrollView} from "react-native";
import { useDispatch } from "react-redux";
import { PhotoPicker } from "../components/PhotoPicker";
import { addPost } from "../store/actions/post";

export const CreateScreen = ({}) => {
const dispatch = useDispatch();
const navigation = useNavigation()
const [text, setText] = useState('')
const Ref = useRef()

const saveHandler = () => {
    const post = {
    date: new Date().toJSON(),
    text: text,
    img: Ref.current,
    booked: false
    }

    dispatch(addPost(post))
    navigation.navigate('Портал Новин')
}

const photoPickHandler = (uri) => {
  Ref.current = uri
}

    return (
        <ScrollView>
         <View style={styles.wrapper}>
            <Text style={styles.title}>Створити нову статтю</Text>
            <TextInput style={styles.textarea} 
            placeholder='Введіть текст статті' 
            value={text} 
            onChangeText={setText}
            multiline/>
            <PhotoPicker onPick={photoPickHandler}/>
            <Button title="Створити статтю" color='#8451f0' onPress={saveHandler} disabled={!text}/>
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        padding: 10
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        fontFamily: 'regular-open',
        marginVertical: 10
    },
    textarea: {
        padding: 10,
        marginBottom: 10
    },
    image: {
        width: '100%',
        height: 200,
        marginBottom: 10
    }
})
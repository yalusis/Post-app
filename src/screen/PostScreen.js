import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image, Button, ScrollView, Alert } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { THEME } from "../theme";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { AppHeaderIcon } from "../components/AppHeaderIcon";
import { useDispatch, useSelector } from "react-redux";
import { removePost, toggleBooked } from "../store/actions/post";

export const PostScreen = () => {

    const route = useRoute();
    const dispatch = useDispatch();
    const navigation = useNavigation()

    const { postId, date, booked } = route.params;

    const post = useSelector(state => state.post.allPosts.find(post => post.id === postId))
    const change_booked = useSelector(state => state.post.bookedPosts.some(post => post.id === postId));
    useEffect(() => {
      navigation.setParams({ booked: change_booked })
    }, [change_booked])

    let iconName = booked ? 'ios-star' : 'ios-star-outline';

    navigation.setOptions({ title: "Стаття від " + new Date(date).toLocaleDateString() })
    navigation.setOptions({  headerRight: () => (
        <HeaderButtons  HeaderButtonComponent={AppHeaderIcon}>
          <Item title='Star' iconName={iconName} onPress={() => dispatch(toggleBooked(post))} />
        </HeaderButtons>
        ) })

    const removeHandler = () => {
    Alert.alert(
        'Видалення поста',
        'Ви точно хочете видалити цю статтю?',
        [
            {
                text: 'Відминити' ,
                style: 'cancel'
            },
            {
                text: 'Видалити' ,
                style: 'destructive',
                onPress: () => {
                    navigation.navigate('Портал Новин');
                    dispatch(removePost(postId))
                }
            }           
        ],
        { cancelable: false }
    )
    }

    return (
        <ScrollView>
            <Image source={{uri: post.img }} style={styles.image}/>
            <View style={styles.textWrap}>
                <Text style={styles.title}>{post.text}</Text>
            </View>
            <Button title="Видалити" color={THEME.DANGER_COLOR} onPress={removeHandler}/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },
    textWrap: {
        padding: 10
    },
    title: {
        fontFamily: 'regular-open'
    }
})
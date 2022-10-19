import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { PostList } from "../components/PostList";
import {useDispatch, useSelector} from 'react-redux'
import { loadPosts } from "../store/actions/post";
import { View, StyleSheet, ActivityIndicator } from "react-native";

export const MainScreen = ({ }) => {

    const navigation = useNavigation()
    const dispatch = useDispatch()

    useEffect(() => {
    dispatch(loadPosts())
    }, [dispatch])
    const allpost = useSelector(state => state.post.allPosts)
    const loading = useSelector(state => state.post.loading)

    if(loading) {
       <View style={StyleSheet.center}>
        <ActivityIndicator />
       </View>
    }

    const handlerPost = (post) => {
    navigation.navigate('Post', {postId: post.id, date: post.date, booked : post.booked})
    }

    return (
        <PostList data={allpost} onOpen={handlerPost}/>
    )
}

const styles = StyleSheet.create({
    center: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: "center"
    }
})
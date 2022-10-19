import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useSelector } from "react-redux";
import { PostList } from "../components/PostList";

export const BookedScreen = ({ }) => {

    const navigation = useNavigation()
    const bookedPost = useSelector(state => state.post.bookedPosts)

    const handlerPost = (post) => {
    navigation.navigate('Post', {postId: post.id, date: post.date, booked : post.booked})
    }

    return (
        <PostList data={bookedPost} onOpen={handlerPost}/>
    )
}
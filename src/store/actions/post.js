import { DB } from "../../db"
import { ADD_POST, LOAD_POST, REMOVE_POST, TOGGLE_BOOKED } from "../types";
import * as FileSystem from 'expo-file-system';
import * as ImageManipulator from 'expo-image-manipulator';

export const loadPosts = () => {
    return async dispatch => {
    const posts = await DB.getPosts()

        dispatch({
            type: LOAD_POST,
            payload: posts
        })
    }
}

export const toggleBooked = post => async dispatch => {
    await DB.updatePost(post)

    dispatch({
        type: TOGGLE_BOOKED,
        payload: post.id
    })
}

export const removePost = id => async dispatch => {
    await DB.removePost(id)

    dispatch({
        type: REMOVE_POST,
        payload: id
    })
}

export const addPost = post => async dispatch => {
   const fileName = post.img.split('/').pop();
   const newPath = FileSystem.documentDirectory + fileName;
   const payload = {...post}

    try {
        const uri = await ImageManipulator.manipulateAsync(newPath)
        payload.img = uri
    } catch(e) {
        console.log(e)
    }

    const id = await DB.createPost(payload)

    payload.id = id

    dispatch({
        type: ADD_POST,
        payload
    })
}
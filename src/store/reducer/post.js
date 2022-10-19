import { ADD_POST, LOAD_POST, REMOVE_POST, TOGGLE_BOOKED } from "../types";

const InitialState = {
    allPosts: [],
    bookedPosts: [],
    loading: true
}

export const postReducer = (state = InitialState, action) => {
    switch(action.type) {
        case LOAD_POST:
            return {...state, allPosts: action.payload, bookedPosts: action.payload.filter(post => post.booked), loading: false}
        case TOGGLE_BOOKED:
            const allpost = state.allPosts.map((post) => {
                if(post.id == action.payload) {
                    post.booked = !post.booked
                }
                return post
            })

            return {...state, allPosts: allpost, bookedPosts: allpost.filter(post => post.booked)}
        case REMOVE_POST:
            return {...state, allPosts: state.allPosts.filter(post => post.id !== action.payload),
            bookedPosts: state.bookedPosts.filter(post => post.id !== action.payload)}
        case ADD_POST:
            return {...state, allPosts: [{...action.payload}, ...state.allPosts ]}
        default:
             return state;
    }
}
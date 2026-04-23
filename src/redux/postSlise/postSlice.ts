import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {IPost} from "../../modules/PostsModules/IPost.ts";
import {loadPosts} from "../functions/funtctionsForPostSlice.ts";

interface IPostSlice {
    posts: IPost[];
}

const postInitialState:IPostSlice = {posts:[]}


export const postSlice = createSlice({
    name: "postSlice",
    initialState: postInitialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loadPosts.fulfilled,
                (state, action:PayloadAction<IPost[]>) => {

                state.posts = action.payload;
                })
            .addCase(loadPosts.rejected,
                (state,action) => {
                console.log(state);
                console.log(action.payload);
                })
    }
})

export {loadPosts};
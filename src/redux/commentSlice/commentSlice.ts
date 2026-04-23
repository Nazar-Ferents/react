import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {IComment} from "../../modules/CommentsModules/IComment.ts";
import {loadComments} from "../functions/funtctionsForCommentSlice.ts";

interface ICommentSlice {
    comments: IComment[];
}

const commentInitialState:ICommentSlice = {comments: []};

export const commentSlice = createSlice({
    name: "commentSlice",
    initialState: commentInitialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loadComments.fulfilled,
                (state, action:PayloadAction<IComment[]>) => {
                state.comments = action.payload;
                })
            .addCase(loadComments.rejected,
                (state, action) => {
                console.log(state);
                console.log(action.payload);
                })
    }
})


export {loadComments}
import {configureStore} from "@reduxjs/toolkit";
import {userSlice} from "./userSlice/userSlice.ts";
// import {postSlice} from "./postSlise/postSlice.ts";
// import {commentSlice} from "./commentSlice/commentSlice.ts";


export const storeJSON = configureStore({
    reducer: {
        userSlice: userSlice.reducer,
        // postSlice: postSlice.reducer,
        // commentSlice: commentSlice.reducer
    }
});
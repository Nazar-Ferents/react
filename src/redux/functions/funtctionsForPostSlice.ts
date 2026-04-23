import {createAsyncThunk} from "@reduxjs/toolkit";
import {serviceJSON} from "../../services/services.tsx";


export const loadPosts = createAsyncThunk(
    'postSlice/loadPosts',
    async (_,thunkAPI) => {
        try {
            const posts = await serviceJSON.getPosts();

            return thunkAPI.fulfillWithValue(posts);
        }
        catch(error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error);
        }
    }
)
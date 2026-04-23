import {createAsyncThunk} from "@reduxjs/toolkit";
import {serviceJSON} from "../../services/services.tsx";


export const loadComments = createAsyncThunk(
    'commentSlice/loadComments',
    async (_,thunkAPI) => {

        try {
            const comments = await serviceJSON.getComments()

            return thunkAPI.fulfillWithValue(comments);
        }
        catch(err) {
            console.log(err);

            return thunkAPI.rejectWithValue(err);
        }
    }
)
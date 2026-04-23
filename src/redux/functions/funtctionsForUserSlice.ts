import {createAsyncThunk} from "@reduxjs/toolkit";
import {serviceJSON} from "../../services/services.tsx";


export const loadUsers = createAsyncThunk(
    'userSlice/loadUser',
    async (_,thunkAPI) => {
        try{
            const users = await serviceJSON.getUsers()

            return thunkAPI.fulfillWithValue(users)
        }
        catch(error){
            console.log(error)
            return thunkAPI.rejectWithValue(error)
        }
    }
)

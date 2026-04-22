import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {IUser} from "../../modules/UsersModules/IUser.ts";
import {serviceJSON} from "../../services/services.tsx";

interface IUserSlice {
    users: IUser[];
}

const userInitialState:IUserSlice = {users:[]}

const loadUsers = createAsyncThunk(
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


export const userSlice = createSlice({
    name: "userSlice",
    initialState: userInitialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loadUsers.fulfilled, (state, action:PayloadAction<IUser[]>) => {

                state.users = action.payload;
        })
            .addCase(loadUsers.rejected,(state, action) => {

                console.log(state);
                console.log(action.payload);
            })
    }
})


export const userSliceActions = {
    ...userSlice.actions, loadUsers
}
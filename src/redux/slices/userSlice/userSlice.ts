import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {IUser} from "../../../modules/IUser.ts";

type UsersSliceType = {
    users:IUser[];
}

const initialState: UsersSliceType = {users: []}

const loadUsers = createAsyncThunk(
    'userSlice/loadUsers',
    async (_,thunkAPI) => {

     try {
         const users =   await fetch('https://jsonplaceholder.typicode.com/users')
             .then(res => res.json())
         return thunkAPI.fulfillWithValue(users);
     }
     catch (error) {
         console.log(error);
         return thunkAPI.rejectWithValue('some error')
     }
    })

 export const userSlice = createSlice ({
    name: "userSlice",
    initialState: initialState,
    reducers: {},
     extraReducers: (builder) => {
        builder.addCase(loadUsers.fulfilled,(state, action:PayloadAction<IUser[]>) => {
            state.users = action.payload;
        })
            .addCase(loadUsers.rejected,(state, action) => {
                console.log(state)
                console.log(action.payload)
            })
     }
})

export const userSliceActions = {
    ...userSlice.actions, loadUsers
}
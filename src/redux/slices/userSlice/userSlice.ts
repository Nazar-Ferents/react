import {createAsyncThunk, createSlice, isFulfilled, type PayloadAction} from "@reduxjs/toolkit";
import type {IUser} from "../../../modules/IUser.ts";

type UsersSliceType = {
    users:IUser[];
    user:IUser | null;
    loadState: boolean;
}

const initialState: UsersSliceType = {users: [],
user:null, loadState: false};

const loadUsers = createAsyncThunk(
    'userSlice/loadUsers',
    async (_,thunkAPI) => {

     try {
         const users =   await fetch('https://jsonplaceholder.typicode.com/users')
             .then(res => res.json())
         // thunkAPI.dispatch(userSliceActions.changeLoadState(true));
         return thunkAPI.fulfillWithValue(users);
     }
     catch (error) {
         console.log(error);
         return thunkAPI.rejectWithValue('some error')
     }
    })

const loadUser = createAsyncThunk(
    'userSlice/loadUser',
    async (id:string,thunkAPI) => {

        try {
            const user =   await fetch('https://jsonplaceholder.typicode.com/users/'+ id)
                .then(res => res.json())
            // thunkAPI.dispatch(userSliceActions.changeLoadState(true));

            return thunkAPI.fulfillWithValue(user);
        }
        catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue('some error')
        }
    })

 export const userSlice = createSlice ({
    name: "userSlice",
    initialState: initialState,
    reducers: {

        changeLoadState:(state,action:PayloadAction<boolean>) => {

            state.loadState = action.payload;
        }
    },
     extraReducers: (builder) => {
        builder.addCase(loadUsers.fulfilled,(state, action:PayloadAction<IUser[]>) => {
            state.users = action.payload;
        })
            .addCase(loadUsers.rejected,(state, action) => {
                console.log(state)
                console.log(action.payload)
            })
            .addCase(loadUser.fulfilled,(state, action:PayloadAction<IUser>) => {
                state.user = action.payload
            })
            .addMatcher(isFulfilled(loadUser,loadUsers),(state) => {
                state.loadState = true
            })
     }
})

export const userSliceActions = {
    ...userSlice.actions, loadUsers, loadUser
}
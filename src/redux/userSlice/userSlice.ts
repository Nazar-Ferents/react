import { createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {IUser} from "../../modules/UsersModules/IUser.ts";
import {loadUsers} from "../functions/funtctionsForUserSlice.ts";

interface IUserSlice {
    users: IUser[];
}

const userInitialState:IUserSlice = {users:[]}

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
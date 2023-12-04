import { createSlice } from "@reduxjs/toolkit";

export const initialUser = {
    id: 0,
    first_name: "",
    last_name: "",
    email: "",
    role: "",
    assignments: []
};

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        isCreate: false,
        selectedUser: initialUser,
        users: [],
    },
    reducers: {
        loadUsers: (state, action) => {
            state.users = action.payload
        },
        change: (state, action) => {
            state.isCreate = action.payload
        },
        editUser: (state, action) => {
            state.selectedUser = action.payload
            state.isCreate = false
        },
    },
    
})

export const { loadUsers, editUser, change } = userSlice.actions

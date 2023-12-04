import { createSlice } from "@reduxjs/toolkit";

const initialLogin = JSON.parse(sessionStorage.getItem("login")) || {
    isAuth: false,
    user: undefined,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        login: initialLogin
    },
    reducers: {
        authSuccess: (state, action) => {
            state.login = {
                isAuth: true,
                user: action.payload.user,
                token: action.payload.token
            }
        },
        authLogout: (state) => {
            state.login = {
                isAuth: false,
                user: undefined,
                token: undefined
            }
        },
    },
})

export const { authSuccess, authLogout } = authSlice.actions
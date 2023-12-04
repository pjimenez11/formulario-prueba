
import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/auth/authSlice";
import { formSlice } from "./slices/form/formSlice";
import { userSlice } from "./slices/users/userSlice";

const store = configureStore ({
    reducer: {
        auth: authSlice.reducer,
        form: formSlice.reducer,
        user: userSlice.reducer,
    },
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/auth/authSlice";
import { formSlice } from "./slices/form/formSlice";

const store = configureStore ({
    reducer: {
        auth: authSlice.reducer,
        form: formSlice.reducer,
    },
});

export default store;
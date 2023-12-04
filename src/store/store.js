
import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/auth/authSlice";
import { formSlice } from "./slices/form/formSlice";
import { userSlice } from "./slices/users/userSlice";
import { assignmentSlice } from "./slices/assignment/assigmentSlice";

const store = configureStore ({
    reducer: {
        auth: authSlice.reducer,
        form: formSlice.reducer,
        user: userSlice.reducer,
        assignment: assignmentSlice.reducer,
    },
});

export default store;
import { createSlice } from "@reduxjs/toolkit";

export const assignmentSlice = createSlice({
    name: 'assignment',
    initialState: {
        assignments: []
    },
    reducers: {
        loadAssignments: (state, action) => {
            state.assignments = action.payload;
        },
    }
});

export const { loadAssignments } = assignmentSlice.actions;
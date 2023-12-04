import { createSlice } from "@reduxjs/toolkit"

export const initalForm = {
    id: 0,
    proyect_name: "",
    description: "",
    application_number: "",
    date: new Date().toISOString().split("T")[0],
    address: "",
    justification: "",
    status: "",
    priority_level: "low",
    deadline: "",
    requesting: "",
    assigned_users: []
}

export const formSlice = createSlice({
    name: 'form',
    initialState: {
        isCreate: false,
        selectedForm: initalForm,
        forms: [],
    },
    reducers: {
        loadForms: (state, action) => {
            state.forms = action.payload
        },
        change: (state, action) => {
            state.isCreate = action.payload
        },
        editForm: (state, action) => {
            state.selectedForm = action.payload
            state.isCreate = false
        },
    },
    
})

export const { loadForms, createForm, editForm, change } = formSlice.actions

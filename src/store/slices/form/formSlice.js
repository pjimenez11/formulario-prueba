import { createSlice } from "@reduxjs/toolkit"

const initalForm = {
    id: 0,
    title: null,
    description: null,
    application_number: null,
    date: null,
    address: null,
    justification: null,
    status: null,
    priority_level: null,
    deadline: null,
    requesting: null,
    assigned_users: []
}

export const formSlice = createSlice({
    name: 'form',
    initialState: {
        selectedForm: initalForm,
        forms: [],
    },
    reducers: {
        loadForms: (state, action) => {
            state.forms = action.payload
        },
    },
})

export const { loadForms } = formSlice.actions

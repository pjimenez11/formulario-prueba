import formsApi from "../apis/formsApi"

const BASE_URL = '/forms'

export const findAllForms = async () => {
    try {
        return await formsApi.get(BASE_URL);
    } catch (error) {
        return error
    }
}

export const findFormById = async (id) => {
    try {
        return await formsApi.get(`${BASE_URL}/${id}`);
    } catch (error) {
        return error
    }
}

export const createForm = async (form) => {
    try {
        return await formsApi.post(BASE_URL, form);
    } catch (error) {
        return error
    }
}

export const updateForm = async (form) => {
    try {
        return await formsApi.put(`${BASE_URL}/${form.id}`, form);
    } catch (error) {
        return error
    }
}
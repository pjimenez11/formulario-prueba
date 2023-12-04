import formsApi from "../apis/formsApi"
const BASE_URL = '/users'

export const findAllUsers = async () => {
    try {
        return await formsApi.get(BASE_URL);
    } catch (error) {
        return error
    }
}

export const findUserById = async (id) => {
    try {
        return await formsApi.get(`${BASE_URL}/${id}`);
    } catch (error) {
        return error
    }
}

export const createUser = async (user) => {
    try {
        return await formsApi.post(BASE_URL, user);
    } catch (error) {
        return error
    }
}

export const updateUser = async (user) => {
    try {
        return await formsApi.put(`${BASE_URL}/${user.id}`, user);
    } catch (error) {
        return error
    }
}

export const deleteUser = async (id) => {
    try {
        return await formsApi.delete(`${BASE_URL}/${id}`);
    } catch (error) {
        return error
    }
}

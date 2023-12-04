import formsApi from "../apis/formsApi"

const BASE_URL = '/assignments'

export const findAllAssignments = async () => {
    try {
        return await formsApi.get(BASE_URL);
    } catch (error) {
        return error
    }
}

export const findAssignmentById = async (id) => {
    try {
        return await formsApi.get(`${BASE_URL}/${id}`);
    } catch (error) {
        return error
    }
}

export const createAssignment = async (assignment) => {
    try {
        return await formsApi.post(BASE_URL, assignment);
    } catch (error) {
        return error
    }
}

export const updateAssignment = async (assignment) => {
    try {
        return await formsApi.put(`${BASE_URL}/${assignment.id}`, assignment);
    } catch (error) {
        return error
    }
}

export const deleteAssignment = async (id) => {
    try {
        return await formsApi.delete(`${BASE_URL}/${id}`);
    } catch (error) {
        return error
    }
}

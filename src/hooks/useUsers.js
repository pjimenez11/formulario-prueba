import { useDispatch, useSelector } from "react-redux"
import { createUser, findAllUsers } from "../services/usersService";
import { loadUsers } from "../store/slices/users/userSlice";
import Swal from "sweetalert2";

const useUsers = () => {
    const { users } = useSelector(state => state.user)
    const dispach = useDispatch();

    const getUsers = async () => {
        const response = await findAllUsers();
        if (response.status === 200) {
            const { data } = response;
            dispach(loadUsers(data.users.map(formString => JSON.parse(formString))));
        } 
    }

    const saveUser = async (user) => {
        try {
            const response = await createUser(user);
            if (response.status === 201) {
                Swal.fire({
                    icon: 'success',
                    title: 'Usuario creado correctamente!',
                    showConfirmButton: false,
                    timer: 1500
                });
                getUsers();
            } 
        } catch (error) {
            console.log(error);
        }
    }

    return { users, getUsers, saveUser }
}

export default useUsers
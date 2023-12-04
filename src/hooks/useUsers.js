import { useDispatch, useSelector } from "react-redux"
import { findAllUsers } from "../services/usersService";
import { loadUsers } from "../store/slices/users/userSlice";

const useUsers = () => {
    const { users } = useSelector(state => state.user)
    const dispach = useDispatch();

    const getUsers = async () => {
        const response = await findAllUsers();
        if (response.status === 200) {
            const { data } = response;
            dispach(loadUsers(data.users.map(formString => JSON.parse(formString))));
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Usuario no autorizado!',
            });
            handlerLogout();
        }
    }

    return { users, getUsers }
}

export default useUsers
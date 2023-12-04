import { useDispatch, useSelector } from "react-redux"
import { register, sign_in } from "../pages/services/authService";
import { authLogout, authSuccess } from "../../store/slices/auth/authSlice";
import Swal from "sweetalert2";

const useAuth = () => {
    const { login } = useSelector((state) => state.auth);
    const dispach = useDispatch();

    const handlerLogin = async (user) => {
        try {
            const response = await sign_in(user)
            if (response.status === 200) {
                const { data } = response
                const { headers } = response
                sessionStorage.setItem("login", JSON.stringify({ isAuth: true, user: data.status.data }))
                sessionStorage.setItem("token", JSON.stringify(headers.authorization).replace(/['"]+/g, ''))
                dispach(authSuccess({ user: data.status.data, token: headers.authorization }))
            } else {
                Swal.fire("Error Login", "Username o password invalidos", "error");
            }
        }
        catch (error) {
            console.log()
        }
    }

    const handlerLogout = () => {
        dispach(authLogout())
        sessionStorage.clear();
    }

    const handlerRegister = async (user) => {
        try {
            const response = await register(user)
            if (response.status === 200) {
                const { data } = response
                const { headers } = response
                sessionStorage.setItem("login", JSON.stringify({ isAuth: true, user: data.status.data }))
                sessionStorage.setItem("token", JSON.stringify(headers.authorization).replace(/['"]+/g, ''))
                dispach(authSuccess({ user: data.status.data, token: headers.authorization }))
            } else {
                console.log(response)
                Swal.fire("Error Registro", "Error al registrarse", "error");
            }
        }
        catch (error) {
            console.log()
        }
    }

    return { login, handlerLogin, handlerLogout, handlerRegister }
}
export default useAuth
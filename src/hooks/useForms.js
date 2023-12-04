import { useDispatch, useSelector } from "react-redux";
import { createForm, findAllForms } from "../services/formsService";
import { loadForms, initalForm, change, } from "../store/slices/form/formSlice";
import Swal from "sweetalert2";
import useAuth from "../auth/hooks/useAuth";
import { createAssignment } from "../services/assignmentsService";

const useForms = () => {
    const { forms, selectedForm, isCreate } = useSelector((state) => state.form);
    const dispach = useDispatch();
    const { handlerLogout } = useAuth();

    const getForms = async () => {
        try {
            const response = await findAllForms();
            if (response.status === 200) {
                const { data } = response;
                dispach(loadForms(data.forms.map(formString => JSON.parse(formString))));
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Usuario no autorizado!',
                });
                handlerLogout();
            }
        } catch (error) {
            console.log(error);
        }
    };

    const changeNewUpdate = (value) => {
        dispach(change(value));
    };

    const addForm = async (form, user_id) => {
        try {
            const response = await createForm(form);
            if (response.status === 201) {
                const { data } = response;
                const id = JSON.parse(data.form).id;
                const response2 = await createAssignment({ user_id, form_id: id });
                console.log(response2);
                if (response2.status === 201) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Formulario creado con exito!',
                        showConfirmButton: false,
                        timer: 1500
                    });
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Error al crear el formulario!',
                    });
                }

            }
        } catch (error) {
            console.log(error);
        }

    };


    return { forms, getForms, selectedForm, isCreate, initalForm, changeNewUpdate, addForm };
}

export default useForms;
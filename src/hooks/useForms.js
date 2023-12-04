import { useDispatch, useSelector } from "react-redux";
import { findAllForms } from "../services/formsService";
import { loadForms, initalForm, change, } from "../store/slices/form/formSlice";
import Swal from "sweetalert2";
import useAuth from "../auth/hooks/useAuth";

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
        }
    };

    const changeNewUpdate = (value) => {
        dispach(change(value));
    };

    const addForm = (form) => {
        const newForm = {
            ...form,
            id: forms.length + 1,
        };
        dispach(loadForms([...forms, newForm]));
    };


    return { forms, getForms, selectedForm, isCreate, initalForm, changeNewUpdate };
}

export default useForms;
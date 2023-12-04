import { useDispatch, useSelector } from "react-redux";
import {
  createForm,
  findAllForms,
  findFormById,
  updateForm,
} from "../services/formsService";
import {
  loadForms,
  initalForm,
  change,
  editForm,
} from "../store/slices/form/formSlice";
import Swal from "sweetalert2";
import useAuth from "../auth/hooks/useAuth";
import { createAssignment } from "../services/assignmentsService";
import { useNavigate } from "react-router-dom";

const useForms = () => {
  const { forms, selectedForm, isCreate } = useSelector((state) => state.form);
  const dispach = useDispatch();
  const { handlerLogout } = useAuth();
  const navigation = useNavigate();

  const getForms = async () => {
    try {
      const response = await findAllForms();
      if (response.status === 200) {
        const { data } = response;
        dispach(
          loadForms(data.forms.map((formString) => JSON.parse(formString)))
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getById = async (id) => {
    try {
      const response = await findFormById(id);
      if (response.status === 200) {
        const { data } = response;
        dispach(editForm(JSON.parse(data.form)));
      } else {
        navigation("/formu/asignaciones");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const update = async (form) => {
    try {
      const response = await updateForm(form, form.id);
      if (response.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Formulario actualizado con exito!",
          showConfirmButton: false,
          timer: 1500,
        });
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
      console.log(response);
      if (response.status === 201) {
        const { data } = response;
        const id = JSON.parse(data.form).id;
        const response2 = await createAssignment({ user_id, form_id: id });
        if (response2.status === 201) {
          getForms();
          Swal.fire({
            icon: "success",
            title: "Formulario creado con exito!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    forms,
    getForms,
    selectedForm,
    isCreate,
    initalForm,
    changeNewUpdate,
    addForm,
    getById,
    update,
  };
};

export default useForms;

import { FiSave } from "react-icons/fi";
import { useNavigate, useParams } from "react-router-dom";
import HeaderForm from "./HeaderForm";
import RequestData from "./RequestData";
import DetailsChange from "./DetailsChange";
import PriorityUrgency from "./PriorityUrgency";
import Approval from "./Approval";
import { useEffect, useState } from "react";
import useForms from "../hooks/useForms";

export default function Form() {
  const navigate = useNavigate();
  const {
    isCreate,
    selectedForm,
    initalForm,
    changeNewUpdate,
    addForm,
    getById,
    updateForm,
    update
  } = useForms();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      changeNewUpdate(false);
      getById(id);
    } else {
      changeNewUpdate(true);
    }
  }, []);

  const [form, setForm] = useState(isCreate ? initalForm : selectedForm);

  useEffect(() => {
    setForm(isCreate ? initalForm : selectedForm);
  }, [selectedForm, isCreate]);

  const [userAsign, setUserAsign] = useState(0);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setForm({ ...form, [name]: value });
  };

  const handlerSave = () => {
    addForm(form, userAsign);
    navigate("/formu/formularios");
  };

  const handlerUpdate = () => {
    update(form)
    navigate("/formu/asignaciones");
  }

  return (
    <section className="flex flex-col gap-3">
      <div className="flex flex-row justify-end">
        <button
          className="flex items-center justify-center px-2 py-1.5 space-x-2 text-sm font-medium text-white transition-colors duration-150 bg-green-600 border border-transparent rounded-lg active:bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          onClick={() => {isCreate? handlerSave() : handlerUpdate() }}
        >
          <FiSave className="w-4 h-4 text-white" />
          <span>Guardar {isCreate === false && "cambios"}</span>
        </button>
      </div>
      <HeaderForm />
      <form className="flex flex-col gap-3">
        <RequestData form={form} onInputChange={onInputChange} />
        <DetailsChange form={form} onInputChange={onInputChange} />
        <PriorityUrgency form={form} onInputChange={onInputChange} />
        <Approval form={form} onInputChange={onInputChange} userAsign={userAsign} setUserAsign={setUserAsign} />
      </form>
    </section>
  );
}

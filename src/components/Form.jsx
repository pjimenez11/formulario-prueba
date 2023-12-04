import { FiSave } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import HeaderForm from "./HeaderForm";
import RequestData from "./RequestData";
import DetailsChange from "./DetailsChange";
import PriorityUrgency from "./PriorityUrgency";
import Approval from "./Approval";


export default function Form() {
  const navigate = useNavigate();
  return (
    <section className="flex flex-col gap-3">
      <div className="flex flex-row justify-end">
        <button
          className="flex items-center justify-center px-2 py-1.5 space-x-2 text-sm font-medium text-white transition-colors duration-150 bg-green-600 border border-transparent rounded-lg active:bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          onClick={() => navigate("/formu/formularios")}
        >
          <FiSave className="w-4 h-4 text-white" />
          <span>Guardar</span>
        </button>
      </div>
      <HeaderForm />
      <form className="flex flex-col gap-3">
        <RequestData />
        <DetailsChange />
        <PriorityUrgency />
        <Approval />
      </form>
    </section>
  );
}

import { useDispatch, useSelector } from "react-redux";
import { findAllAssignments } from "../services/assignmentsService";
import { loadAssignments } from "../store/slices/assignment/assigmentSlice";

const useAssignment = () => {
    const { assignments } = useSelector((state) => state.assignment);
    const dispach = useDispatch();

    const getAssignments = async () => {
        try {
            const response = await findAllAssignments();
            if (response.status === 200) {
                const { data } = response;
                dispach(loadAssignments(data.assignments.map(assignmentString => JSON.parse(assignmentString))));
            }
        } catch (error) {
            console.log(error);
        }
    }

    return { assignments, getAssignments };
}

export default useAssignment;
import { useEffect } from "react";
import TableAssignments from "../components/TableAssignments";
import useAssignment from "../hooks/useAssignment";

export default function AssignmentsPage() {

  const { getAssignments } = useAssignment();

  useEffect(() => {
    getAssignments();
  }, []);

  return (
    <section className="flex flex-col">
      <div className="overflow-x-auto ">
        <div className="inline-block min-w-full py-2 align-middle ">
          <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
            <TableAssignments />
          </div>
        </div>
      </div>
    </section>
  );
}

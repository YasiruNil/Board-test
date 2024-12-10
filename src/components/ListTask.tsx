import React, { useEffect, useState } from "react";

function ListTask({ tasksList }: any) {
  const [todos, setTodos] = useState([]);
  const [inprogress, setInprogress] = useState([]);
  const [approved, setApproved] = useState([]);
  const [rejected, setRejected] = useState([]);
  const statuses = ["todo", "inprogress", "approved", "rejected"];

  useEffect(() => {
    const fTodo = tasksList.filter((task: any) => task.status === "todo");
    const fApproved = tasksList.filter((task: any) => task.status === "approved");
    const fRejected = tasksList.filter((task: any) => task.status === "rejected");
    const fInprogress = tasksList.filter(
      (task: any) => task.status === "inprogress"
    );

    setTodos(fTodo);
    setRejected(fRejected);
    setApproved(fApproved);
    setInprogress(fInprogress);
  }, [tasksList]);
  return (
    <div className="flex w-full">
      {statuses.map((status, index) => (
        <Section key={index} status={status} />
      ))}
    </div>
  );
}

export default ListTask;

const Section = ({ status }: any) => {
  return <h2>{status}</h2>;
};

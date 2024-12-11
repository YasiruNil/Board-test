import { useEffect } from "react";
import { StatusConstants } from "../util/constants";
import Section from "./Section";
import { useAppDispatch } from "../redux/hooks";
import {
  moveTasks,
  setApprovedList,
  setInProgressList,
  setRejectedList,
  setTodoList,
} from "../redux/slice/dashboard";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";

function ListTask({ tasksList }: any) {
  const dispatch = useAppDispatch();
  const statuses = Object.values(StatusConstants);

  const onDragEnd = (result: any) => {
    console.log(result);
    dispatch(moveTasks(result));
  };

  useEffect(() => {
    const fTodo = tasksList.filter(
      (task: any) => task.status === StatusConstants.todo
    );
    const fApproved = tasksList.filter(
      (task: any) => task.status === StatusConstants.approved
    );
    const fRejected = tasksList.filter(
      (task: any) => task.status === StatusConstants.rejected
    );
    const fInprogress = tasksList.filter(
      (task: any) => task.status === StatusConstants.inProgress
    );

    dispatch(setTodoList(fTodo));
    dispatch(setRejectedList(fRejected));
    dispatch(setApprovedList(fApproved));
    dispatch(setInProgressList(fInprogress));
  }, [tasksList]);

  return (
    <div className="grid grid-cols-4">
      <DragDropContext onDragEnd={onDragEnd}>
        {statuses.map((status, index) => (
          <Droppable key={index} droppableId={status} direction="vertical">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                <Section status={status}/>
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </DragDropContext>
    </div>
  );
}

export default ListTask;

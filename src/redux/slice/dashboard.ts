import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import list from "./data.json";
import { StatusConstants } from "../../util/constants";

const initialState = {
  tasks: {
    tasksList: list.data,
    todoList: [],
    approvedList: [],
    rejectedList: [],
    inProgressList: [],
  },
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setTodoList: (state: any, action: PayloadAction<any>) => {
      state.tasks.todoList = action.payload;
    },
    setRejectedList: (state: any, action: PayloadAction<any>) => {
      state.tasks.rejectedList = action.payload;
    },
    setApprovedList: (state: any, action: PayloadAction<any>) => {
      state.tasks.approvedList = action.payload;
    },

    setInProgressList: (state: any, action: PayloadAction<any>) => {
      state.tasks.inProgressList = action.payload;
    },
    moveTasks: (state: any, action: PayloadAction<any>) => {
      const findMovedItem = state.tasks.tasksList.find(
        (item: any) => item.id === action.payload.draggableId
      );
      if (
        action.payload.destination.droppableId !==
        action.payload.source.droppableId
      ) {
       
        addMoveItemToTheRelaventGroup(
          findMovedItem,
          action.payload.destination,
          state.tasks
        );
        removeAlreadyMovedTask(
          action.payload.draggableId,
          action.payload.source,
          state.tasks
        );
      }else {
        moveSameStatusItems(
          action.payload.source,
          action.payload.destination,
          state.tasks);
      }
    },
  },
});

const arraymove =( arr: any, fromIndex: number, toIndex: number, on = 1)=> {
  return arr.splice(toIndex, 0, ...arr.splice(fromIndex, on)), arr
}

const insert = (arr: string | any[], index: any, newItem: any) => [
  // part of the array before the specified index
  ...arr.slice(0, index),
  // inserted item
  newItem,
  // part of the array after the specified index
  ...arr.slice(index),
];

const moveSameStatusItems= (
  source: any,
  destination: any,
  tasks: any)=>{
    console.log(source,destination,tasks)
  switch (destination.droppableId) {
    case StatusConstants.todo:
      tasks.todoList = arraymove(tasks.todoList,source.index,destination.index);
      break;
    case StatusConstants.approved:
      tasks.approvedList = arraymove(tasks.approvedList,source.index,destination.index);
      break;
    case StatusConstants.inProgress:
      tasks.inProgressList = arraymove(tasks.inProgressList,source.index,destination.index);
      break;
    case StatusConstants.rejected:
      tasks.rejectedList = arraymove(tasks.rejectedList,source.index,destination.index);
      break;
  }
}

const removeAlreadyMovedTask = (id: string, source: any, tasks: any) => {
  switch (source.droppableId) {
    case StatusConstants.todo:
      tasks.todoList = tasks.todoList.filter((item: any) => item.id !== id);
      break;
    case StatusConstants.approved:
      tasks.approvedList = tasks.approvedList.filter(
        (item: any) => item.id !== id
      );
      break;
    case StatusConstants.inProgress:
      tasks.inProgressList = tasks.inProgressList.filter(
        (item: any) => item.id !== id
      );
      break;
    case StatusConstants.rejected:
      tasks.rejectedList = tasks.rejectedList.filter(
        (item: any) => item.id !== id
      );
      break;
  }
};

const addMoveItemToTheRelaventGroup = (
  findMovedItem: any,
  destination: any,
  tasks: any
) => {
  let newTaskItem = { ...findMovedItem };
  newTaskItem.status = destination.droppableId;
  switch (destination.droppableId) {
    case StatusConstants.todo:
      tasks.todoList = insert(tasks.todoList, destination.index, newTaskItem);
      break;
    case StatusConstants.approved:
      tasks.approvedList = insert(
        tasks.approvedList,
        destination.index,
        newTaskItem
      );
      break;
    case StatusConstants.inProgress:
      tasks.inProgressList = insert(
        tasks.inProgressList,
        destination.index,
        newTaskItem
      );
      break;
    case StatusConstants.rejected:
      tasks.rejectedList = insert(
        tasks.rejectedList,
        destination.index,
        newTaskItem
      );
      break;
    default:
      break;
  }
};

export const {
  moveTasks,
  setTodoList,
  setRejectedList,
  setApprovedList,
  setInProgressList,
} = taskSlice.actions;

export default taskSlice.reducer;

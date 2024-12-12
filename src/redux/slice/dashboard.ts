import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import list from "./data.json";
import { StatusConstants } from "../../util/constants";
import {
  TaskGroup,
  TaskList,
  TaskState,
} from "../../interfaces/task.interface";
import { DropResult } from "@hello-pangea/dnd";

const initialState = {
  tasks: {
    tasksList: list.data,
    todoList: [],
    approvedList: [],
    rejectedList: [],
    inProgressList: [],
  },
} as TaskState;

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setTodoList: (state: TaskState, action: PayloadAction<TaskList[]>) => {
      state.tasks.todoList = action.payload;
    },
    setRejectedList: (state: TaskState, action: PayloadAction<TaskList[]>) => {
      state.tasks.rejectedList = action.payload;
    },
    setApprovedList: (state: TaskState, action: PayloadAction<TaskList[]>) => {
      state.tasks.approvedList = action.payload;
    },

    setInProgressList: (
      state: TaskState,
      action: PayloadAction<TaskList[]>
    ) => {
      state.tasks.inProgressList = action.payload;
    },
    moveTasks: (state: TaskState, action: PayloadAction<DropResult>) => {
      const findMovedItem = state.tasks.tasksList.find(
        (item: TaskList) => item.id === action.payload.draggableId
      );
      // draggable id, destination and source should not be undefined or null to move item
      if (
        findMovedItem &&
        action.payload.destination &&
        action.payload.source
      ) {
        // here droppableId is column id
        // if destination and source item columns are not the same we need to add the task to the relavent column and remove from the previous coulmn
        // if both columns are same we are trying to swap places amoung same column so .we only need to change item index
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
        } else {
          moveSameStatusItems(
            action.payload.source,
            action.payload.destination,
            state.tasks
          );
        }
      }
    },
  },
});

const arraymove = (
  arr: TaskList[],
  fromIndex: number,
  toIndex: number,
  on = 1
) => {
  return arr.splice(toIndex, 0, ...arr.splice(fromIndex, on)), arr;
};

const insert = (arr: string | any[], index: number, newItem: TaskList) => [
  // part of the array before the specified index
  ...arr.slice(0, index),
  // inserted item
  newItem,
  // part of the array after the specified index
  ...arr.slice(index),
];

const moveSameStatusItems = (
  source: { index: number; droppableId: string },
  destination: { index: number; droppableId: string },
  tasks: TaskGroup
) => {
  switch (destination.droppableId) {
    case StatusConstants.todo:
      tasks.todoList = arraymove(
        tasks.todoList,
        source.index,
        destination.index
      );
      break;
    case StatusConstants.approved:
      tasks.approvedList = arraymove(
        tasks.approvedList,
        source.index,
        destination.index
      );
      break;
    case StatusConstants.inProgress:
      tasks.inProgressList = arraymove(
        tasks.inProgressList,
        source.index,
        destination.index
      );
      break;
    case StatusConstants.rejected:
      tasks.rejectedList = arraymove(
        tasks.rejectedList,
        source.index,
        destination.index
      );
      break;
  }
};

const removeAlreadyMovedTask = (id: string, source: {index: number;droppableId: string}, tasks: TaskGroup) => {
  switch (source.droppableId) {
    case StatusConstants.todo:
      tasks.todoList = tasks.todoList.filter((item: any) => item.id !== id);
      break;
    case StatusConstants.approved:
      tasks.approvedList = tasks.approvedList.filter(
        (item: TaskList) => item.id !== id
      );
      break;
    case StatusConstants.inProgress:
      tasks.inProgressList = tasks.inProgressList.filter(
        (item: TaskList) => item.id !== id
      );
      break;
    case StatusConstants.rejected:
      tasks.rejectedList = tasks.rejectedList.filter(
        (item: TaskList) => item.id !== id
      );
      break;
  }
};

const addMoveItemToTheRelaventGroup = (
  findMovedItem: TaskList,
  destination: {index: number; droppableId: string},
  tasks: TaskGroup
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

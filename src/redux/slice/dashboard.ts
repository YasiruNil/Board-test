import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    getTasksList: (state: any) => {
      state.tasks = [];
    },
  }
});

export const { getTasksList } = taskSlice.actions;
export default taskSlice.reducer;
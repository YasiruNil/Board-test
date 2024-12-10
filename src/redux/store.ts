import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./slice/dashboard";

export const store = configureStore({
    reducer: taskSlice
})

export function setupStore() {
    return configureStore({
      reducer: taskSlice
    })
  }

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = ReturnType<typeof setupStore>;
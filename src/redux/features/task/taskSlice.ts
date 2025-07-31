import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";


interface IInitialState {
    tasks: ITask[];
    filter: "all" | "high" | "medium" | "low"
}

const initialState: IInitialState = {
  tasks: [
    {
    id: "asjashdfjjk",
    title: "Initialize Frontend",
    description: "Create Home Page, and Routing",
    dueDate: "2025-11",
    isCompleted: false,
    priority: "high",
  },
    {
    id: "asjashdfj",
    title: "Create Github Repo",
    description: "Create Home Page, and Routing",
    dueDate: "2025-11",
    isCompleted: false,
    priority: "high",
  },
  ],
  filter: "all"
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

export const selectTasks = (state: RootState) => {
    return state.todo.tasks;
}

export const selectFilter = (state: RootState) => {
    return state.todo.filter;
}

export default taskSlice.reducer;

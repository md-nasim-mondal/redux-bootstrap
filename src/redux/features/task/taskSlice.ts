import type { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";


interface IInitialState {
    task: ITask[]
}

const initialState: IInitialState = {
  task: [
    {
    id: "asjashdfjjk",
    title: "Initialize Frontend",
    description: "Create Home Page, and Routing",
    dueDate: "2025-11",
    isCompleted: false,
    priority: "High",
  },
    {
    id: "asjashdfj",
    title: "Create Github Repo",
    description: "Create Home Page, and Routing",
    dueDate: "2025-11",
    isCompleted: false,
    priority: "High",
  },
  ]
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

export default taskSlice.reducer;

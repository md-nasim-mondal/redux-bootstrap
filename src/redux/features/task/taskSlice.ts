import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";
// import { v4 as uuidv4 } from "uuid";

interface IInitialState {
  tasks: ITask[];
  filter: "all" | "high" | "medium" | "low";
}

const initialState: IInitialState = {
  tasks: [
    // {
    //   id: "asjashdfjjk",
    //   title: "Initialize Frontend",
    //   description: "Create Home Page, and Routing",
    //   dueDate: "2025-11",
    //   isCompleted: false,
    //   priority: "high",
    // },
    // {
    //   id: "asjashdfj",
    //   title: "Init Github Repo",
    //   description: "Create stage branch",
    //   dueDate: "2025-11",
    //   isCompleted: false,
    //   priority: "medium",
    // },
  ],
  filter: "all",
};

type DraftTask = Pick<ITask, "title" | "description" | "dueDate" | "priority">;

const createTask = (taskData: DraftTask): ITask =>{
  return {id: nanoid(), isCompleted: false, ...taskData}
}

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<DraftTask>) => {
      // const id = uuidv4();
      // const taskData = {
      //   ...action.payload,
      //   id,
      //   isCompleted: false,
      // };
      const taskData = createTask(action.payload)
      state.tasks.push(taskData);
    },
  },
});

export const selectTasks = (state: RootState) => {
  return state.todo.tasks;
};

export const selectFilter = (state: RootState) => {
  return state.todo.filter;
};

export const { addTask } = taskSlice.actions;

export default taskSlice.reducer;

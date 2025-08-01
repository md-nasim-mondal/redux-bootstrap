export interface ITask {
    id: string;
    title: string;
    description: string;
    dueDate: string;
    isCompleted: boolean;
    priority: "high" | "medium" | "low";
    assignedTo: string | null;
}


export type TFilter = "all" | "high" | "medium" | "low";

export interface IUser {
  name: string;
  _id: string;
}

export interface IInput {
  name: string;
  label: string;
  defaultValue?: string;
}
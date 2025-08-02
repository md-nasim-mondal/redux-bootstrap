import { AddTaskModal } from "@/components/modules/tasks/AddTaskModal";
import TaskCard from "@/components/modules/tasks/TaskCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGetTasksQuery } from "@/redux/api/baseApi";
import { selectTasks, updateFilter } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hook";
import type { ITask } from "@/types";
import { useDispatch } from "react-redux";

const Tasks = () => {
  const tasks = useAppSelector(selectTasks);
  const dispatch = useDispatch();
  const {data, isLoading, isError} = useGetTasksQuery(undefined)

  console.log(data, isLoading, isError, tasks);

  if(isLoading){
    return <p className="text-center">Loading....</p>
  }

  return (
    <div className='mx-auto max-w-7xl px-5 mt-20'>
      <div className='flex justify-end items-center gap-5'>
        <h3 className='text-3xl mr-auto'>Tasks</h3>
        <Tabs defaultValue="all">
        <TabsList >
          <TabsTrigger onClick={() => dispatch(updateFilter("all"))} value="all">All</TabsTrigger>
          <TabsTrigger onClick={() => dispatch(updateFilter("low"))}  value="low">Low</TabsTrigger>
          <TabsTrigger onClick={() => dispatch(updateFilter("medium"))}  value="medium">Medium</TabsTrigger>
          <TabsTrigger onClick={() => dispatch(updateFilter("high"))}  value="high">High</TabsTrigger>
        </TabsList>
        </Tabs>
        <AddTaskModal />
      </div>
      <div className='space-y-5 mt-5'>
        {/* {tasks.map((task, i) => (
          <TaskCard key={i + 1} task={task} />
        ))} */}
        {!isLoading && data?.tasks?.map((task: ITask, i: number) => (
          <TaskCard key={i + 1} task={task} />
        ))}
      </div>
    </div>
  );
};

export default Tasks;

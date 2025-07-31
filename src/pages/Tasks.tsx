import { AddTaskModal } from "@/components/modules/tasks/AddTaskModal";
import TaskCard from "@/components/modules/tasks/TaskCard";
import { selectTasks } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hook";

const Tasks = () => {
  const tasks = useAppSelector(selectTasks);

  return (
    <div className='mx-auto max-w-7xl px-5 mt-20'>
      <div className='flex justify-between items-center'>
        <h3 className='text-3xl'>Tasks</h3>
        <AddTaskModal />
      </div>
      <div className='space-y-5 mt-5'>
        {tasks.map((task, i) => (
          <TaskCard key={i + 1} task={task} />
        ))}
      </div>
    </div>
  );
};

export default Tasks;

import TaskCard from "@/components/modules/tasks/TaskCard";
import { selectTasks } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hook";

const Tasks = () => {
    const tasks = useAppSelector(selectTasks);
    

    console.log(tasks);

    return (
        <div>
            <h3 className="text-3xl">Tasks</h3>
            <div className="space-y-5 mt-5">
                {
                    tasks.map((task) => (
                        <TaskCard task={task} />
                    ))
                }
            </div>
        </div>
    );
};

export default Tasks;
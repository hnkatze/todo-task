import { TaskForm } from "@/components/task-form";
import { Task } from "@prisma/client";

function Page() {
  const emptyTask: Task = {
    id: 0,
    name: "",
    description: "",
    priority: "",
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  return (
    <div className=' flex items-center justify-center h-screen'>
      <TaskForm task={emptyTask} />
    </div>
  );
}

export default Page;

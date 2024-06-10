import TaskCard from "@/components/task-card";
import prisma from "@/lib/prisma";

async function Home() {
  const tar = await prisma.task.findMany();
  return (
    <div className=' grid grid-cols-3 gap-3 rounded-md'>
      {tar.map((task) => (
        <TaskCard task={task} key={task.id} />
      ))}
    </div>
  );
}
export default Home;

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Task } from "@prisma/client";
import clsx from "clsx";
import { TaskButtonDelete } from "./task-button-delete";
import Link from "next/link";

async function TaskCard({ task }: { task: Task }) {
  return (
    <Card key={task.id}>
      <CardHeader className='flex flex-row justify-between'>
        <CardTitle>{task.name}</CardTitle>
        <Badge
          className={clsx({
            "bg-red-500": task.priority === "High",
            "bg-yellow-500": task.priority === "Medium",
            "bg-green-500": task.priority === "Low",
            "bg-blue-500": task.priority === "Urgent",
          })}>
          {task.priority}
        </Badge>
      </CardHeader>
      <CardContent>
        <p>{task.description}</p>
        <span>{new Date(task.createdAt).toLocaleDateString()} </span>
      </CardContent>
      <CardFooter className='flex gap-x-2 justi`'>
        <TaskButtonDelete taskId={task.id} />
        <Button className=' bg-gray-500 rounded-b-lg'>
          <Link href={`/task/${task.id}/edit`}> Edit </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
export default TaskCard;

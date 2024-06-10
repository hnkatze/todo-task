import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { createTask, updateTask } from "@/actions/task-actions";
import { Task } from "@prisma/client";

function TaskForm({ task }: { task: Task }) {
  const actionfun = task?.id ? updateTask : createTask;

  return (
    <form action={actionfun}>
      <input type='hidden' name='id' value={task?.id} />
      <Card className='w-[350px]'>
        <CardHeader>
          <CardTitle>Create Task</CardTitle>
          <CardDescription>
            Fill in the details below to create a new task.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid w-full items-center gap-4'>
            <div className='flex flex-col space-y-1.5'>
              <Label htmlFor='name'>Name</Label>
              <Input
                name='name'
                id='name'
                placeholder='name of task '
                defaultValue={task?.name}
              />
            </div>
            <div className='flex flex-col space-y-1.5'>
              <Label htmlFor='description'>Description</Label>
              <Textarea
                name='description'
                id='description'
                placeholder='Description of your task'
                defaultValue={task?.description}
              />
            </div>
            <div className='flex flex-col space-y-1.5'>
              <Label htmlFor='priority'>Priority</Label>
              <Select name='priority' defaultValue={task?.priority}>
                <SelectTrigger id='priority'>
                  <SelectValue placeholder='Select' />
                </SelectTrigger>
                <SelectContent
                  className='dark:bg-gray-900 bg-white'
                  position='popper'>
                  <SelectItem value='Low'>Low</SelectItem>
                  <SelectItem value='Medium'>Medium</SelectItem>
                  <SelectItem value='High'>High</SelectItem>
                  <SelectItem value='Urgent'>Urgent</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
        <CardFooter className='flex justify-between'>
          <Button variant='outline'>Cancel</Button>
          <Button type='submit'>
            {task?.id ? "Update Task" : "Create Task"}
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
}

export { TaskForm };

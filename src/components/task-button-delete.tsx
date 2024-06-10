import { Button } from "./ui/button";
import { removeTask } from "@/actions/task-actions";

export function TaskButtonDelete({ taskId }: { taskId: number }) {
  return (
    <form action={removeTask}>
      <input type='hidden' name='id' value={taskId} />
      <Button type='submit' className='btn btn-red bg-red-500 rounded'>
        Delete
      </Button>
    </form>
  );
}

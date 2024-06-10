import Link from "next/link";
import { ModeToggle } from "./ToggleButtom";
import { Button } from "./ui/button";

function Navbar() {
  return (
    <nav className='flex justify-between pt-10 pb-10'>
      <Link href='/'>
        <h1 className='text-2xl uppercase'>Todo Task</h1>
      </Link>

      <div className='flex gap-x-2 items-center'>
        <Button>
          <Link href='/new'>Create New Task</Link>
        </Button>

        <ModeToggle />
      </div>
    </nav>
  );
}
export default Navbar;

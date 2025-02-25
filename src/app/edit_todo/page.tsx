import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const EditTodoPage = () => {
  return (
    <div>
      <h1>Edit your task</h1>
      <Link href="/">Go back</Link>
      <Input type="text" placeholder="Edit task name" />
      <Button type="submit">Edit task</Button>
    </div>
  );
};

export default EditTodoPage;

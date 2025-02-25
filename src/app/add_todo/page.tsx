import React from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const AddTodoPage = () => {
  return (
    <div>
      <h1 className="text-blue-400">Add your task</h1>
      <Link href="/" className="text-green-300">
        Go back
      </Link>
      <Input type="text" placeholder="Enter task name" />
      <Button type="submit">Add task</Button>
      <Link href="/edit_todo">Edit task</Link>
    </div>
  );
};

export default AddTodoPage;

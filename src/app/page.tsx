"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className=" w-full h-full flex flex-col gap-8 row-start-2 items-center sm:items-start">
        My todo app
        <Input type="text" placeholder="Search tasks" />
        <Link href="/add_todo">
          <Button>Add task</Button>
        </Link>
        {/* this is hard-coded for testing navigation purposes, will be replaced with dynamic data */}
        <Link href="/task_details/1">Task 1</Link>
      </main>
    </div>
  );
}

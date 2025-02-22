import { create } from "zustand";
import type { Todo } from "./types";

const useTodos = create((set) => {
  return {
    todos: [],
    addTodo: (todo: Todo) =>
      set((state: { todos: Todo[] }) => ({
        todos: [
          ...state.todos,
          {
            value: todo.value,
            id: todo.id,
            priority: todo.priority,
            complexity: todo.complexity,
            dueDate: todo.dueDate,
            subtasks: todo.subtasks,
            tags: todo.tags,
            isCompleted: todo.isCompleted,
          },
        ],
      })),
    deleteTodo: (id: number) =>
      set((state: { todos: Todo[] }) => ({
        todos: state.todos.filter((todo: Todo) => todo.id !== id),
      })),
    toggleTodo: (id: number) =>
      set((state: { todos: Todo[] }) => ({
        todos: state.todos.map((todo: Todo) =>
          todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
        ),
      })),
  };
});

export default useTodos;

import { createStore } from "zustand";
import type { Todo } from "../types";

export type Todos = {
  todos: Todo[];
};

export type TodosActions = {
  addTodo: (todo: Todo) => void;
  deleteTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
};

export type TodosStore = Todos & TodosActions;

export const defaultState: Todos = {
  todos: [],
};

export const createTodosStore = (initialState: Todos = defaultState) => {
  return createStore<TodosStore>()((set) => ({
    ...initialState,
    addTodo: (todo: Todo) =>
      set((state: Todos) => ({
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
      set((state: Todos) => ({
        todos: state.todos.filter((todo: Todo) => todo.id !== id),
      })),
    toggleTodo: (id: number) =>
      set((state: Todos) => ({
        todos: state.todos.map((todo: Todo) =>
          todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
        ),
      })),
  }));
};

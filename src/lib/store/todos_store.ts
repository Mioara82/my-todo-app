// import { createStore } from "zustand";
// import type { Tables } from "../../../database.types";

// type Todo = Tables<"todos">;

// export type Todos = {
//   todos: Todo[];
// };

// export type TodosActions = {
//   addTodo: (todo: Todo) => void;
//   deleteTodo: (id: number) => void;
//   toggleTodo: (id: number) => void;
// };

// export type TodosStore = Todos & TodosActions;

//             id: todo.id,
//             priority: todo.priority,
//             complexity: todo.complexity,
//             dueDate: todo.due_date,
//             isCompleted: todo.is_completed,
//             value: todo.value ?? null,
//             subtasks: todo.subtasks ?? [],
//             tags: todo.tags ?? [],
//       set((state: Todos) => ({
//         todos: [
//           ...state.todos,
//           {
//             value: todo.value,
//             id: todo.id,
//             priority: todo.priority,
//             complexity: todo.complexity,
//             dueDate: todo.due_date,
//             subtasks: todo.subtasks,
//             tags: todo.tags,
//             isCompleted: todo.is_completed,
//           },
//         ],
//       })),
//     deleteTodo: (id: number) =>
//       set((state: Todos) => ({
//         todos: state.todos.filter((todo: Todo) => todo.id !== id),
//       })),
//     toggleTodo: (id: number) =>
//       set((state: Todos) => ({
//         todos: state.todos.map((todo: Todo) =>
//           todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
//         ),
//       })),
//   }));
// };

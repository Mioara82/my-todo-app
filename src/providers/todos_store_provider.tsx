"use client";
import { type ReactNode, createContext, useRef, useContext } from "react";
import { useStore } from "zustand";

import { type TodosStore, createTodosStore } from "@/lib/store/todos_store";

export type TodosStoreApi = ReturnType<typeof createTodosStore>;

export const TodosStoreContext = createContext<TodosStoreApi | undefined>(
  undefined
);

export interface TodosStoreProviderProps {
  children: ReactNode;
}

export const TodosStoreProvider = ({ children }: TodosStoreProviderProps) => {
  const storeRef = useRef<TodosStoreApi>(null);
  if (!storeRef.current) {
    storeRef.current = createTodosStore();
  }
  return (
    <TodosStoreContext.Provider value={storeRef.current}>
      {children}
    </TodosStoreContext.Provider>
  );
};

export const useTodosStore = <T,>(selector: (store: TodosStore) => T): T => {
  const todosStoreContext = useContext(TodosStoreContext);
  if (!todosStoreContext) {
    throw new Error("useTodosStore must be used within a TodosStoreProvider");
  }
  return useStore(todosStoreContext, selector);
};

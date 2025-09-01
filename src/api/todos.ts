

// import axios from "axios";
// import { Todo } from "../types";

// ✅ Only keep the root API URL
// const api = axios.create({
//   baseURL: "https://jsonplaceholder.typicode.com",
// });

// const baseURL = "https://jsonplaceholder.typicode.com"

// // ✅ Fetch paginated todos
//  const fetchTodos = async () => {
//   const res = await fetch(`${baseURL}/todos`)
//   const data = await res.json()
//   console.log(data)
// };

// export default fetchTodos


// // ✅ Fetch single todo
// export const fetchTodoById = async (id: string | number): Promise<Todo> => {
//   const res = await api.get<Todo>(`/todos/${id}`);
//   return res.data;
// };

// // ✅ Create todo
// export const createTodo = async (todo: Partial<Todo>): Promise<Todo> => {
//   const res = await api.post<Todo>("/todos", todo);
//   return res.data;
// };

// // ✅ Update todo
// export const updateTodo = async (
//   id: number,
//   updates: Partial<Todo>
// ): Promise<Todo> => {
//   const res = await api.put<Todo>(`/todos/${id}`, updates);
//   return res.data;
// };

// // ✅ Delete todo
// export const deleteTodo = async (id: number): Promise<void> => {
//   await api.delete(`/todos/${id}`);
// };












import { Todo } from "../types";

// ✅ Base URL
const baseURL = "https://jsonplaceholder.typicode.com";

// ✅ Fetch all todos (paginated if needed)
export const fetchTodos = async (): Promise<Todo[]> => {
  const res = await fetch(`${baseURL}/todos`);
  if (!res.ok) throw new Error("Failed to fetch todos");
  return await res.json();
};

// ✅ Fetch single todo
export const fetchTodoById = async (id: string | number): Promise<Todo> => {
  const res = await fetch(`${baseURL}/todos/${id}`);
  if (!res.ok) throw new Error(`Failed to fetch todo with id ${id}`);
  return await res.json();
};

// ✅ Create todo
export const createTodo = async (todo: Partial<Todo>): Promise<Todo> => {
  const res = await fetch(`${baseURL}/todos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(todo),
  });
  if (!res.ok) throw new Error("Failed to create todo");
  return await res.json();
};

// ✅ Update todo
export const updateTodo = async (
  id: number,
  updates: Partial<Todo>
): Promise<Todo> => {
  const res = await fetch(`${baseURL}/todos/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updates),
  });
  if (!res.ok) throw new Error(`Failed to update todo with id ${id}`);
  return await res.json();
};

// ✅ Delete todo
export const deleteTodo = async (id: number): Promise<void> => {
  const res = await fetch(`${baseURL}/todos/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error(`Failed to delete todo with id ${id}`);
};

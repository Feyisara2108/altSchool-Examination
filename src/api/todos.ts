// import axios from "axios";

// const api = axios.create({
//   baseURL: "https://jsonplaceholder.typicode.com/todos",
// });

// export const fetchTodos = async (page = 1) => {
//   const res = await api.get(`?_page=${page}&_limit=10`);
//   return res.data;
// };

// export const fetchTodoById = async (id) => {
//   const res = await api.get(`/${id}`);
//   return res.data;
// };

// export const createTodo = async (todo) => {
//   const res = await api.post("/", todo);
//   return res.data;
// };

// export const updateTodo = async (id, updates) => {
//   const res = await api.put(`/${id}`, updates);
//   return res.data;
// };

// export const deleteTodo = async (id) => {
//   const res = await api.delete(`/${id}`);
//   return res.data;
// };














// api/todos.ts
import axios, { AxiosResponse } from "axios";
import { Todo } from '../types';

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/todos",
});

export const fetchTodos = async (page: number = 1): Promise<Todo[]> => {
  const res: AxiosResponse<Todo[]> = await api.get(`?_page=${page}&_limit=10`);
  return res.data;
};

export const fetchTodoById = async (id: string): Promise<Todo> => {
  const res: AxiosResponse<Todo> = await api.get(`/${id}`);
  return res.data;
};

export const createTodo = async (todo: Partial<Todo>): Promise<Todo> => {
  const res: AxiosResponse<Todo> = await api.post("/", todo);
  return res.data;
};

export const updateTodo = async (id: number, updates: Partial<Todo>): Promise<Todo> => {
  const res: AxiosResponse<Todo> = await api.put(`/${id}`, updates);
  return res.data;
};

export const deleteTodo = async (id: number): Promise<void> => {
  await api.delete(`/${id}`);
};
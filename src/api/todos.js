import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/todos",
});

export const fetchTodos = async (page = 1) => {
  const res = await api.get(`?_page=${page}&_limit=10`);
  return res.data;
};

export const fetchTodoById = async (id) => {
  const res = await api.get(`/${id}`);
  return res.data;
};

export const createTodo = async (todo) => {
  const res = await api.post("/", todo);
  return res.data;
};

export const updateTodo = async (id, updates) => {
  const res = await api.put(`/${id}`, updates);
  return res.data;
};

export const deleteTodo = async (id) => {
  const res = await api.delete(`/${id}`);
  return res.data;
};
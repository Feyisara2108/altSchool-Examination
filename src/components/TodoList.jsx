import { useQuery } from "@tanstack/react-query";
import { fetchTodos } from "../api/todos";
import TodoItem from "./TodoItem";
import Pagination from "./Pagination";

export default function TodoList({ page, setPage }) {
  const { data: todos, isLoading, isError } = useQuery({
    queryKey: ["todos", page],
    queryFn: () => fetchTodos(page),
  });

  if (isLoading) return <div className="loading">Loading...</div>;
  if (isError) return <div className="error">Failed to load todos</div>;

  return (
    <div className="todo-list">
      <ul>
        {todos?.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
      <Pagination page={page} setPage={setPage} />
    </div>
  );
}
import { useQuery } from "@tanstack/react-query";
import { fetchTodoById } from "../api/todos";
import { useParams, Link } from "react-router-dom";

export default function TodoDetail() {
  const { id } = useParams();
  const { data: todo, isLoading } = useQuery({
    queryKey: ["todo", id],
    queryFn: () => fetchTodoById(id),
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="todo-detail">
      <h2>{todo.title}</h2>
      <p>Status: {todo.completed ? "✅ Done" : "❌ Pending"}</p>
      <Link to="/">Back to List</Link>
    </div>
  );
}
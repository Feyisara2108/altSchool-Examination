// import { useQuery } from "@tanstack/react-query";
// import { fetchTodoById } from "../api/todos";
// import { useParams, Link } from "react-router-dom";

// export default function TodoDetail() {
//   const { id } = useParams();
//   const { data: todo, isLoading } = useQuery({
//     queryKey: ["todo", id],
//     queryFn: () => fetchTodoById(id),
//   });

//   if (isLoading) return <div>Loading...</div>;

//   return (
//     <div className="todo-detail">
//       <h2>{todo.title}</h2>
//       <p>Status: {todo.completed ? "✅ Done" : "❌ Pending"}</p>
//       <Link to="/">Back to List</Link>
//     </div>
//   );
// }









// pages/TodoDetails.tsx
import React from 'react';
import { useQuery } from "@tanstack/react-query";
// import { fetchTodoById } from "../api/todos";
import { useParams, Link } from "react-router-dom";
import { Todo } from '../types';

// interface TodoDetailParams {
//   id: string;
// }

const TodoDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  const { data: todo, isLoading, error } = useQuery<Todo, Error>({
    queryKey: ["todo", id],
    // queryFn: () => fetchTodoById(id!),
    enabled: !!id, // Only run query if id exists
  });

  if (isLoading) return <div>Loading...</div>;
  
  if (error) return <div>Error loading todo: {error.message}</div>;
  
  if (!todo) return <div>Todo not found</div>;

  return (
    <div className="todo-detail">
      <h2>{todo.title}</h2>
      <p>Status: {todo.completed ? "✅ Done" : "❌ Pending"}</p>
      <Link to="/">Back to List</Link>
    </div>
  );
};

export default TodoDetail;
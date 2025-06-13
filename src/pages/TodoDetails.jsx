// TodoDetail.jsx
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

export default function TodoDetail() {
  const { id } = useParams();

  const { data: todo, isLoading } = useQuery({
    queryKey: ['todo', id],
    queryFn: () =>
      fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res => res.json())
  });

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="detail">
      <h2 className="detail__title">{todo.title}</h2>
      <p className="detail__status">
        Status: {todo.completed ? '✅ Completed' : '❌ Not Completed'}
      </p>
      <p className="detail__info">Todo ID: {todo.id}</p>
      <p className="detail__info">User ID: {todo.userId}</p>
    </div>
  );
}

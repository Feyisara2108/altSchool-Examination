// TodoItem.jsx
import { Link } from 'react-router-dom';

export default function TodoItem({ todo }) {
  return (
    <li className={`todo-item todo-item--${todo.completed ? 'done' : 'pending'}`}>
      <Link to={`/todos/${todo.id}`} className="todo-item__title">
        {todo.title}
      </Link>
      <span className="todo-item__status">
        {todo.completed ? '✅ Completed' : '❌ Not Completed'}
      </span>
    </li>
  );
}

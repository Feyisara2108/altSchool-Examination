// // TodoItem.jsx
// import { Link } from 'react-router-dom';

// export default function TodoItem({ todo }) {
//   return (
//     <li className={`todo-item todo-item--${todo.completed ? 'done' : 'pending'}`}>
//       <Link to={`/todos/${todo.id}`} className="todo-item__title">
//         {todo.title}
//       </Link>
//       <span className="todo-item__status">
//         {todo.completed ? '✅ Completed' : '❌ Not Completed'}
//       </span>
//     </li>
//   );
// }














import React from 'react';
import { Link } from 'react-router-dom';

const TodoItem = ({ todo, onToggle }) => {
  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <button
        onClick={() => onToggle(todo.id)}
        className={`todo-checkbox ${todo.completed ? 'completed' : ''}`}
        aria-label={`Mark "${todo.title}" as ${todo.completed ? 'incomplete' : 'complete'}`}
      >
      </button>
      
      <div className="todo-content">
        <Link 
          to={`/todos/${todo.id}`} 
          className={`todo-title-text ${todo.completed ? 'completed' : ''}`}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          {todo.title}
        </Link>
        <div className="todo-meta">
          <span className={`todo-status ${todo.completed ? 'completed' : 'pending'}`}>
            {todo.completed ? '✅ Completed' : '⏳ Pending'}
          </span>
          <span className="todo-id">ID: {todo.id}</span>
        </div>
      </div>
      
      <div className="todo-actions">
        <button className="action-btn edit" title="Edit todo">
          ✏️
        </button>
        <button className="action-btn delete" title="Delete todo">
          🗑️
        </button>
      </div>
    </li>
  );
};

export default TodoItem;


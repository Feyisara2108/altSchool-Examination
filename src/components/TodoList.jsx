// THE SECOND ONE THAT IS WORKING AS WELL
// import React from 'react';
// import TodoItem from './TodoItem';

// const TodoList = ({ todos, onToggle, searchTerm }) => {
//   if (todos.length === 0) {
//     return (
//       <div className="empty-state">
//         <div className="empty-icon">📝</div>
//         <p>No todos found. {searchTerm && "Try adjusting your search."}</p>
//       </div>
//     );
//   }

//   return (
//     <ul className="todo-list">
//       {todos.map((todo) => (
//         <TodoItem
//           key={todo.id}
//           todo={todo}
//           onToggle={onToggle}
//         />
//       ))}
//     </ul>
//   );
// };

// export default TodoList;











// TodoList.jsx - Updated to work with your existing component structure
import React from 'react';

const TodoList = ({ todos, onToggle, onEdit, onDelete, searchTerm }) => {
  
  const highlightSearchTerm = (text, searchTerm) => {
    if (!searchTerm) return text;
    
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    const parts = text.split(regex);
    
    return parts.map((part, index) => 
      regex.test(part) ? 
        <mark key={index} className="highlight">{part}</mark> : part
    );
  };

  const getPriorityClass = (priority) => {
    switch (priority) {
      case 'high': return 'priority-high';
      case 'medium': return 'priority-medium';
      case 'low': return 'priority-low';
      default: return 'priority-medium';
    }
  };

  const getPriorityIcon = (priority) => {
    switch (priority) {
      case 'high': return '🔴';
      case 'medium': return '🟡';
      case 'low': return '🟢';
      default: return '🟡';
    }
  };

  if (todos.length === 0) {
    return (
      <div className="empty-todos">
        <p>No todos to display</p>
      </div>
    );
  }

  return (
    <div className="todo-list">
      {todos.map(todo => (
        <div 
          key={todo.id} 
          className={`todo-item ${todo.completed ? 'completed' : ''}`}
        >
          <div className="todo-main">
            <div className="todo-checkbox-container">
              <input
                type="checkbox"
                id={`todo-${todo.id}`}
                checked={todo.completed}
                onChange={() => onToggle(todo.id)}
                className="todo-checkbox"
              />
              <label htmlFor={`todo-${todo.id}`} className="checkbox-label">
                <span className="checkmark"></span>
              </label>
            </div>

            <div className="todo-content">
              <div className="todo-title">
                {highlightSearchTerm(todo.title, searchTerm)}
              </div>
              
              {todo.description && (
                <div className="todo-description">
                  {highlightSearchTerm(todo.description, searchTerm)}
                </div>
              )}
              
              <div className="todo-meta">
                <span className={`priority-badge ${getPriorityClass(todo.priority)}`}>
                  <span className="priority-icon">{getPriorityIcon(todo.priority)}</span>
                  {todo.priority || 'medium'} priority
                </span>
                <span className="todo-id">ID: {todo.id}</span>
              </div>
            </div>
          </div>

          <div className="todo-actions">
            <button
              className="action-btn edit-btn"
              onClick={() => onEdit(todo)}
              title="Edit todo"
              aria-label={`Edit ${todo.title}`}
            >
              ✏️
            </button>
            <button
              className="action-btn delete-btn"
              onClick={() => onDelete(todo)}
              title="Delete todo"
              aria-label={`Delete ${todo.title}`}
            >
              🗑️
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;




import React, { useState, useMemo } from 'react';
import { fetchTodos as fetchTodosAPI } from '../api/todos';
import TodoList from '../components/TodoList';
import Pagination from '../components/Pagination';
import Header from '../components/Header';

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [dataLoaded, setDataLoaded] = useState(false);
  
  // Modal states
  const [showTodoModal, setShowTodoModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [editingTodo, setEditingTodo] = useState(null);
  const [todoToDelete, setTodoToDelete] = useState(null);
  
  // Form states for modal
  const [modalTitle, setModalTitle] = useState('');
  const [modalDescription, setModalDescription] = useState('');
  const [modalPriority, setModalPriority] = useState('medium');
  const [formErrors, setFormErrors] = useState({});
  
  const todosPerPage = 10;

  // Function to fetch todos when needed
  const loadTodos = async () => {
    if (dataLoaded || loading) return;
    
    try {
      setLoading(true);
      setError(null);
      const data = await fetchTodosAPI();
      setTodos(data);
      setDataLoaded(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Call loadTodos when component first renders
  if (!dataLoaded && !loading) {
    loadTodos();
  }

  // Filter and search logic with memoization for performance
  const filteredTodos = useMemo(() => {
    return todos.filter(todo => {
      const matchesSearch = todo.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFilter = 
        filterStatus === 'all' || 
        (filterStatus === 'completed' && todo.completed) ||
        (filterStatus === 'incomplete' && !todo.completed);
      
      return matchesSearch && matchesFilter;
    });
  }, [todos, searchTerm, filterStatus]);

  // Pagination logic with memoization
  const paginationData = useMemo(() => {
    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = filteredTodos.slice(indexOfFirstTodo, indexOfLastTodo);
    const totalPages = Math.ceil(filteredTodos.length / todosPerPage);
    
    return { currentTodos, totalPages };
  }, [filteredTodos, currentPage, todosPerPage]);

  // Generate unique ID for new todos
  const generateId = () => {
    return Math.max(0, ...todos.map(todo => todo.id)) + 1;
  };

  // CRUD Operations
  
  // CREATE: Add new todo
  const handleAddTodo = () => {
    setEditingTodo(null);
    setModalTitle('');
    setModalDescription('');
    setModalPriority('medium');
    setFormErrors({});
    setShowTodoModal(true);
  };

  // Form validation
  const validateForm = () => {
    const newErrors = {};
    
    if (!modalTitle.trim()) {
      newErrors.title = 'Title is required';
    } else if (modalTitle.trim().length < 3) {
      newErrors.title = 'Title must be at least 3 characters';
    }
    
    setFormErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSaveTodo = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    const todoData = {
      title: modalTitle.trim(),
      description: modalDescription.trim(),
      priority: modalPriority
    };

    if (editingTodo) {
      // UPDATE: Edit existing todo
      setTodos(todos.map(todo => 
        todo.id === editingTodo.id 
          ? { ...todo, ...todoData }
          : todo
      ));
    } else {
      // CREATE: Add new todo
      const newTodo = {
        id: generateId(),
        userId: 1, // Default user ID
        completed: false,
        ...todoData
      };
      setTodos([newTodo, ...todos]);
    }
    setShowTodoModal(false);
    setEditingTodo(null);
  };

  // UPDATE: Toggle todo completion
  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // UPDATE: Edit todo
  const handleEditTodo = (todo) => {
    setEditingTodo(todo);
    setModalTitle(todo.title || '');
    setModalDescription(todo.description || '');
    setModalPriority(todo.priority || 'medium');
    setFormErrors({});
    setShowTodoModal(true);
  };

  // DELETE: Remove todo
  const handleDeleteTodo = (todo) => {
    setTodoToDelete(todo);
    setShowConfirmModal(true);
  };

  const confirmDelete = () => {
    if (todoToDelete) {
      setTodos(todos.filter(todo => todo.id !== todoToDelete.id));
      setShowConfirmModal(false);
      setTodoToDelete(null);
    }
  };

  const cancelDelete = () => {
    setShowConfirmModal(false);
    setTodoToDelete(null);
  };

  // Modal handlers
  const handleCloseModal = () => {
    setShowTodoModal(false);
    setEditingTodo(null);
    setFormErrors({});
  };

  // Handle escape key and backdrop clicks
  const handleModalBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  const handleConfirmBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      cancelDelete();
    }
  };

  // Search and filter handlers
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handleFilterChange = (e) => {
    setFilterStatus(e.target.value);
    setCurrentPage(1);
  };

  const handleRetry = () => {
    setError(null);
    setDataLoaded(false);
    setLoading(false);
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-content">
          <div className="loading-spinner"></div>
          <p className="loading-text">Loading your todos...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <div className="error-message">
          <h2>Oops! Something went wrong</h2>
          <p>{error}</p>
          <button 
            onClick={handleRetry} 
            className="retry-button"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="todo-app">
      <div className="todo-container">
        <Header />
        
        {/* Controls */}
        <div className="todo-controls">
          <div className="controls-row">
            {/* Search */}
            <div className="search-container">
              <span className="search-icon">🔍</span>
              <input
                type="text"
                placeholder="Search todos..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="search-input"
              />
            </div>

            {/* Filter */}
            <div className="filter-container">
              <span className="filter-icon">📋</span>
              <select
                value={filterStatus}
                onChange={handleFilterChange}
                className="filter-select"
              >
                <option value="all">All Todos</option>
                <option value="completed">Completed</option>
                <option value="incomplete">Incomplete</option>
              </select>
            </div>

            {/* Add Todo Button */}
            <button 
              className="add-todo-btn"
              onClick={handleAddTodo}
            >
              <span>➕</span>
              Add Todo
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-number total">{todos.length}</div>
            <div className="stat-label">Total Todos</div>
          </div>
          <div className="stat-card">
            <div className="stat-number completed">
              {todos.filter(todo => todo.completed).length}
            </div>
            <div className="stat-label">Completed</div>
          </div>
          <div className="stat-card">
            <div className="stat-number remaining">
              {todos.filter(todo => !todo.completed).length}
            </div>
            <div className="stat-label">Remaining</div>
          </div>
        </div>

        {/* Todo List */}
        <div className="todos-container">
          <div className="todos-header">
            <h2 className="todos-title">
              Your Todos ({filteredTodos.length})
            </h2>
          </div>
          
          {filteredTodos.length === 0 && dataLoaded ? (
            <div className="empty-state">
              <p>No todos found. {searchTerm || filterStatus !== 'all' ? 'Try adjusting your search or filter.' : 'Start by adding a new todo!'}</p>
            </div>
          ) : (
            <TodoList 
              todos={paginationData.currentTodos} 
              onToggle={toggleTodo}
              onEdit={handleEditTodo}
              onDelete={handleDeleteTodo}
              searchTerm={searchTerm}
            />
          )}
        </div>

        {/* Pagination */}
        {paginationData.totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={paginationData.totalPages}
            onPageChange={setCurrentPage}
            totalItems={filteredTodos.length}
            itemsPerPage={todosPerPage}
          />
        )}

        {/* Todo Modal */}
        {showTodoModal && (
          <div className="modal-overlay" onClick={handleModalBackdropClick}>
            <div className="modal-content">
              <div className="modal-header">
                <h2>{editingTodo ? 'Edit Todo' : 'Add New Todo'}</h2>
                <button 
                  className="modal-close-btn"
                  onClick={handleCloseModal}
                  aria-label="Close modal"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handleSaveTodo} className="todo-form">
                <div className="form-group">
                  <label htmlFor="title" className="form-label">
                    Title <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="title"
                    value={modalTitle}
                    onChange={(e) => setModalTitle(e.target.value)}
                    className={`form-input ${formErrors.title ? 'error' : ''}`}
                    placeholder="Enter todo title..."
                    maxLength="100"
                  />
                  {formErrors.title && <span className="error-message">{formErrors.title}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <textarea
                    id="description"
                    value={modalDescription}
                    onChange={(e) => setModalDescription(e.target.value)}
                    className="form-textarea"
                    placeholder="Enter todo description..."
                    rows="3"
                    maxLength="500"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="priority" className="form-label">
                    Priority
                  </label>
                  <select
                    id="priority"
                    value={modalPriority}
                    onChange={(e) => setModalPriority(e.target.value)}
                    className="form-select"
                  >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </select>
                </div>

                <div className="modal-actions">
                  <button
                    type="button"
                    className="btn-secondary"
                    onClick={handleCloseModal}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn-primary"
                  >
                    {editingTodo ? 'Update Todo' : 'Add Todo'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Confirm Delete Modal */}
        {showConfirmModal && (
          <div className="modal-overlay" onClick={handleConfirmBackdropClick}>
            <div className="confirm-modal-content">
              <div className="confirm-modal-header">
                <div className="confirm-icon">⚠️</div>
                <h3>Delete Todo</h3>
              </div>
              
              <div className="confirm-modal-body">
                <p>Are you sure you want to delete "{todoToDelete?.title}"? This action cannot be undone.</p>
              </div>
              
              <div className="confirm-modal-actions">
                <button
                  type="button"
                  className="btn-secondary"
                  onClick={cancelDelete}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn-danger"
                  onClick={confirmDelete}
                  autoFocus
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;





























// import { useState } from "react";
// import TodoList from "../components/TodoList";
// // import SearchFilter from "../components/SearchFilter";

// export default function Home() {
//   const [page, setPage] = useState(1);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filter, setFilter] = useState("all"); // "all", "completed", "incomplete"

//   return (
//     <main>
//       <h1>Todo App</h1>
//       <TodoList page={page} setPage={setPage} />
//     </main>
//   );
// }

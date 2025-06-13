// // src/pages/Home.jsx
// import React, { useState } from 'react';
// import { useQuery } from '@tanstack/react-query';
// import { Link } from 'react-router-dom';
// import './Home.css';

// const fetchTodos = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/todos');
//   if (!res.ok) throw new Error('Network response was not ok');
//   return res.json();
// };

// const Home = () => {
//   const { data: todos, isLoading, isError } = useQuery({
//     queryKey: ['todos'],
//     queryFn: fetchTodos,
//   });

//   const [currentPage, setCurrentPage] = useState(1);
//   const [search, setSearch] = useState('');
//   const [filterStatus, setFilterStatus] = useState('all');

//   const itemsPerPage = 10;

//   const filteredTodos = todos?.filter((todo) => {
//     const matchSearch = todo.title.toLowerCase().includes(search.toLowerCase());
//     const matchStatus =
//       filterStatus === 'all'
//         ? true
//         : filterStatus === 'completed'
//         ? todo.completed
//         : !todo.completed;
//     return matchSearch && matchStatus;
//   });

//   const totalPages = Math.ceil(filteredTodos?.length / itemsPerPage);
//   const currentItems = filteredTodos?.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

//   if (isLoading) return <div className="home__loading">Loading...</div>;
//   if (isError) return <div className="home__error">Something went wrong!</div>;

//   return (
//     <main className="home">
//       <header className="home__header">
//         <h1 className="home__title">Todo List</h1>
//         <div className="home__controls">
//           <input
//             type="text"
//             className="home__search"
//             placeholder="Search todos..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             aria-label="Search todos"
//           />
//           <select
//             className="home__filter"
//             value={filterStatus}
//             onChange={(e) => setFilterStatus(e.target.value)}
//             aria-label="Filter todos"
//           >
//             <option value="all">All</option>
//             <option value="completed">Completed</option>
//             <option value="incomplete">Incomplete</option>
//           </select>
//         </div>
//       </header>

//       <ul className="home__list">
//         {currentItems?.map((todo) => (
//           <li key={todo.id} className="home__item">
//             <Link to={`/todos/${todo.id}`} className="home__link">
//               <h2 className="home__item-title">{todo.title}</h2>
//               <p className={`home__item-status home__item-status--${todo.completed ? 'done' : 'pending'}`}>
//                 {todo.completed ? 'Completed' : 'Incomplete'}
//               </p>
//             </Link>
//           </li>
//         ))}
//       </ul>

//       <nav className="home__pagination" aria-label="Pagination">
//         {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
//           <button
//             key={page}
//             className={`home__page-btn ${page === currentPage ? 'home__page-btn--active' : ''}`}
//             onClick={() => setCurrentPage(page)}
//             aria-current={page === currentPage ? 'page' : undefined}
//           >
//             {page}
//           </button>
//         ))}
//       </nav>
//     </main>
//   );
// };

// export default Home;




// Home.jsx
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import TodoItem from '../components/TodoItem';

export default function Home() {
  const [page, setPage] = useState(1);

  const { data: todos = [], isLoading } = useQuery({
    queryKey: ['todos', page],
    queryFn: () =>
      fetch(`https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=10`).then(res => res.json())
  });

  return (
    <div className="home">
      <h2 className="home__title">Todos</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul className="home__list">
          {todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
        </ul>
      )}
      <div className="home__pagination">
        <button onClick={() => setPage(p => Math.max(p - 1, 1))}>Prev</button>
        <span>Page {page}</span>
        <button onClick={() => setPage(p => p + 1)}>Next</button>
      </div>
    </div>
  );
}

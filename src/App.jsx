// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Home from "./pages/Home";
import TodoDetail from "./pages/TodoDetail";
import NotFound from "./pages/NotFound";
import ErrorBoundary from "./components/ErrorBoundary";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/todos/:id",
    element: <TodoDetail />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ReactQueryDevtools 
        initialIsOpen={false} 
        position="bottom-right"
        toggleButtonProps={{
          style: {
            marginRight: '3.5rem', // Prevents overlap with other devtools
          },
        }}
      />
    </>
  );
}
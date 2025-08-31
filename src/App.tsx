
// // import { createBrowserRouter, RouterProvider } from "react-router-dom";
// // import Home from "./pages/Home";
// // import TodoDetail from "./pages/TodoDetail";
// // import NotFound from "./pages/NotFound";
// // import ErrorBoundary from "./components/ErrorBoundary";

// // const router = createBrowserRouter([
// //   {
// //     path: "/",
// //     element: <Home />,
// //     errorElement: <ErrorBoundary />,
// //   },
// //   {
// //     path: "/todos/:id",
// //     element: <TodoDetail />,
// //   },
// //   {
// //     path: "*",
// //     element: <NotFound />,
// //   },
// // ]);

// // export default function App() {
// //   return <RouterProvider router={router} />;
// // }










// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import ErrorBoundary from './components/ErrorBoundary';
// import Layout from './components/Layout';
// import Home from './pages/Home';
// import TodoDetail from './pages/TodoDetail';
// import ErrorTest from './pages/ErrorTest';
// import NotFound from './pages/NotFound';
// import './styles/main.css';

// const App = () => {
//   return (
//     <ErrorBoundary>
//       <Router>
//         <Layout>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/todos/:id" element={<TodoDetail />} />
//             <Route path="/error-test" element={<ErrorTest />} />
//             <Route path="*" element={<NotFound />} />
//           </Routes>
//         </Layout>
//       </Router>
//     </ErrorBoundary>
//   );
// };

// export default App;



















//  App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import Layout from './components/Layout';
import Home from './pages/Home';
import TodoDetail from './pages/TodoDetail';
import ErrorTest from './pages/ErrorTest';
import NotFound from './pages/NotFound';
import './styles/main.css';

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todos/:id" element={<TodoDetail />} />
            <Route path="/error-test" element={<ErrorTest />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Router>
    </ErrorBoundary>
  );
};

export default App;

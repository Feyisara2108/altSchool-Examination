// // AppRouter.jsx
// import { createBrowserRouter } from 'react-router-dom';
// import Layout from '../components/Layout';
// import Home from '../pages/Home';
// import TodoDetail from '../pages/TodoDetail';
// import NotFound from '../pages/NotFound';
// import ErrorTest from '../pages/ErrorTest';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     errorElement: <NotFound />,
//     children: [
//       { path: '/', element: <Home /> },
//       { path: '/todos/:id', element: <TodoDetail /> },
//       { path: '/error', element: <ErrorTest /> }
//     ]
//   }
// ]);

// export default router;

















// routes/AppRouter.tsx
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import TodoDetail from '../pages/TodoDetail';
import NotFound from '../pages/NotFound';
import ErrorTest from '../pages/ErrorTest';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/todos/:id', element: <TodoDetail /> },
      { path: '/error', element: <ErrorTest /> }
    ]
  }
]);

export default router;

// Layout.jsx
import { Outlet, Link } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="layout">
      <header className="layout__header">
        <h1 className="layout__title">Todo App</h1>
        <nav className="layout__nav">
          <Link to="/">Home</Link>
          <Link to="/error">Trigger Error</Link>
        </nav>
      </header>
      <main className="layout__main">
        <Outlet />
      </main>
    </div>
  );
}

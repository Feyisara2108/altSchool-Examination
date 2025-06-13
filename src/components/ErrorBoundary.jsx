import { useEffect } from "react";

export default function ErrorBoundary({ error }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div role="alert" className="error-boundary">
      <h1>Something went wrong</h1>
      <pre>{error.message}</pre>
    </div>
  );
}
import { useState } from "react";
import TodoList from "../components/TodoList";
import SearchFilter from "../components/SearchFilter";

export default function Home() {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all"); // "all", "completed", "incomplete"

  return (
    <main>
      <h1>Todo App</h1>
      <SearchFilter 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm}
        filter={filter}
        setFilter={setFilter}
      />
      <TodoList page={page} setPage={setPage} />
    </main>
  );
}
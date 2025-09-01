"use client"
import { useEffect, useState } from "react";

const Header = () => {
  // const[setData] = useState("")
  // useEffect(()=>{
  //     const baseURL = "https://jsonplaceholder.typicode.com"

  // // ✅ Fetch paginated todos
  // const fetchTodos = async () => {
  //   const res = await fetch(`${baseURL}/todos`)
  //   const data = await res.json()
  //   console.log(data)
  //   setData(data)
  // };

  // fetchTodos()
  // },[])

  

  return (
    <div className="todo-header">
      <h1 className="todo-title">✨ Todo App</h1>
      <p className="todo-subtitle">Stay organized and get things done</p>
    </div>

  );
};

export default Header




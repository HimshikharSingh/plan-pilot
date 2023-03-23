import React, { useState, useEffect } from "react";
import "./ToDoList.css";
import FormToDoList from "./components/FormToDoList";
import TodoList from "./components/TodoList";

function ToDoList() {
  //all state stuff
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  //use Effect to update filter every
  useEffect(() => {
    filterHandler();
  }, [todos, status]); // eslint-disable-line react-hooks/exhaustive-deps
  //filter fucntions
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  return (
    <div className="todolist-page">
      <div className="todolist-container">
        <header className="todolist-header">
          <h1>To-Do List</h1>
        </header>
        <FormToDoList
          inputText={inputText}
          todos={todos}
          setTodos={setTodos}
          setInputText={setInputText}
          setStatus={setStatus}
        />
        <TodoList
          filteredTodos={filteredTodos}
          setTodos={setTodos}
          todos={todos}
        />
      </div>
    </div>
  );
}

export default ToDoList;

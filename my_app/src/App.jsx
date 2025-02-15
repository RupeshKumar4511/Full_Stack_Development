import Header from "./Components/Header.jsx";
import { Footer } from "./Components/Footer.jsx";
import Todos from './Components/Todos.jsx';
import AddTodo from './Components/AddTodo.jsx'
import React, { useEffect, useState } from "react";
import About from './Components/About.jsx';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    setTodos(todos.filter((e) => {return e !== todo}));
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc) => {
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].Sno + 1;
    }
    const myTodo = {
      Sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo]);
  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>  // This is called React.Fragments 
      <Router>
        <Header title="MyTodosList" />
        <Routes>
          <Route exact path="/" element={
            <>
              <AddTodo addTodo={addTodo} />
              
              <Todos todo={todos} onDelete={onDelete} /> // here todo and onDelete is used for the props to pass data to child Components.
            </>
          } />
          <Route exact path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

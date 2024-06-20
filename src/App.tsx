import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './Todolist';
import Clock from './Timer';

function App() {
  let name = "리액트";
  return (
    <div className = "container">
      <TodoList></TodoList>
      <Clock></Clock>
    </div>
  );
}


export default App;

import React, { Component } from 'react';

import AddTodo from './components/addTodo';

import logo from './logo.svg';
import './App.css';

const App = () => (
  <div>
    <h1>Todo list</h1>
    <AddTodo submitTodo={() => {}}/>
  </div>
);

export default App;

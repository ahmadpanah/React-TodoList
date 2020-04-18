import React, { Component } from 'react';
import Todos from './components/Todos';

import './App.css';

class App extends Component {

  state ={
    todos: [
      {
        id: 1,
        title: 'Cooking',
        completed: false
      },
      {
        id: 2,
        title: 'Watching TV2',
        completed: false
      },
      {
        id: 3,
        title: 'Study My Lesson',
        completed: false
      },
    ]
  }


  render(){
  return (
    <div className="App">
      <Todos todos={this.state.todos} />
    </div>
  );
}
}

export default App;

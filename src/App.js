import React, { Component } from 'react';
import uniqid from "uniqid";
import Overview from "./components/Overview";

class App extends Component {
  constructor() {
    super();

    this.state = {
      task: {
        text: '',
        id: uniqid()
      },
      tasks: [],
    };
  }

  deleteTask = (e, index) => {
    e.preventDefault();
    const tasks = this.state.tasks.slice();

    tasks.splice(index, 1);
    this.setState( { tasks });
  }

  handleChange = (e) => {
    this.setState({
      task: {
        text: e.target.value,
        id: this.state.task.id
      },
    });
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: {
        text: '',
        id: uniqid()
       }
    });
  };

  render() {
    const { task, tasks } = this.state;

    return (
      <div>
        <form onSubmit={this.onSubmitTask}>
          <label htmlFor='taskInput'>Enter task</label>
          <input onChange={this.handleChange} value={task.text} type='text' id='taskInput'/>
          <button type='submit'>
            Add Task
          </button>
        </form>
        <Overview tasks={tasks} deleteTask={this.deleteTask}/>
      </div>
    );
  }
}

export default App;

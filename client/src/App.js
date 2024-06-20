import React, { useState } from 'react';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const handleTaskAdded = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div className='App'>
      <h1>To-Do List</h1>
      <AddTask onTaskAdded={handleTaskAdded} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default App;
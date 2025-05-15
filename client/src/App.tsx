import React, { useEffect, useState } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import axios from 'axios';

function App() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const res = await axios.get('http://localhost/todo-app/backend/routes/api.php');
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async (title) => {
    await axios.post('http://localhost/todo-app/backend/routes/api.php', { title });
    fetchTasks();
  };

  const toggleTask = async (task) => {
    await axios.put('http://localhost/todo-app/backend/routes/api.php', {
      id: task.id,
      completed: !task.completed
    });
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await axios.delete('http://localhost/todo-app/backend/routes/api.php', {
      data: { id }
    });
    fetchTasks();
  };

  return (
    <div>
      <h1>My Todo List</h1>
      <TaskForm onAdd={addTask} />
      <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
    </div>
  );
}

export default App;

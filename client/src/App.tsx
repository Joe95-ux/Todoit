import { useEffect, useState } from 'react';
import TaskForm from '@/components/TaskForm';
import TaskList from '@/components/TaskList';
import axios from 'axios';

type TaskType = {
  id: string,
  title: string,
  completed: boolean,
}

function App() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const res = await axios.get('http://localhost/todo-app/backend/routes/api.php');
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async (title:string) => {
    await axios.post('http://localhost/todo-app/backend/routes/api.php', { title });
    fetchTasks();
  };

  const toggleTask = async (task:TaskType) => {
    await axios.put('http://localhost/todo-app/backend/routes/api.php', {
      id: task.id,
      completed: !task.completed
    });
    fetchTasks();
  };

  const deleteTask = async (id:string) => {
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

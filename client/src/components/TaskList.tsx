
type TaskType ={
  id: string,
  title: string,
  completed: boolean
}
type TaskListType = {
  tasks: TaskType[],
  onToggle: (task: TaskType)=>void,
  onDelete: (id: string)=> void,
}

export default function TaskList({ tasks, onToggle, onDelete }: TaskListType) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <span
            style={{ textDecoration: task.completed ? 'line-through' : 'none', cursor: 'pointer' }}
            onClick={() => onToggle(task)}
          >
            {task.title}
          </span>
          <button onClick={() => onDelete(task.id)}>❌</button>
        </li>
      ))}
    </ul>
  );
}

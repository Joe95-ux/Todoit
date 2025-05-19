type TaskType = {
  id: string;
  title: string;
  completed: boolean;
};

type TaskListType = {
  tasks: TaskType[];
  onToggle: (task: TaskType) => void;
  onDelete: (id: string) => void;
};

export default function TaskList({ tasks, onToggle, onDelete }: TaskListType) {
  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <div className="px-4 py-3 bg-indigo-500">
        <h2 className="text-white font-semibold text-lg">Todo List</h2>
      </div>
      
      <ul className="divide-y divide-gray-200">
        {tasks.length === 0 ? (
          <li className="px-4 py-6 text-center text-gray-500">
            No tasks yet. Add one to get started!
          </li>
        ) : (
          tasks.map((task) => (
            <li key={task.id} className="px-4 py-3 hover:bg-gray-50 transition-colors duration-150">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => onToggle(task)}
                    className={`w-5 h-5 rounded-full border-2 flex-shrink-0 transition-colors duration-200 
                      ${task.completed 
                        ? 'bg-green-500 border-green-500 flex items-center justify-center' 
                        : 'border-gray-300 hover:border-indigo-500'}`}
                  >
                    {task.completed && (
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </button>
                  <span
                    className={`text-gray-800 transition-colors duration-200 ${
                      task.completed ? 'line-through text-gray-400' : ''
                    }`}
                  >
                    {task.title}
                  </span>
                </div>
                <button
                  onClick={() => onDelete(task.id)}
                  className="p-1 text-gray-400 hover:text-red-500 rounded-full hover:bg-red-50 transition-colors duration-200"
                  aria-label="Delete task"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
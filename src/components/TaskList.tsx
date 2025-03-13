interface Task {
  id: number;
  description: string;
  deadline: string;
  completed: boolean;
}

interface TaskListProps {
  tasks: Task[];
  onToggleComplete: (id: number) => void;
  onDeleteTask: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onToggleComplete,
  onDeleteTask,
}) => {
  return (
    <ul className="p-4 grid gap-2">
      {tasks.map((task) => (
        <li
          key={task.id}
          className={`flex justify-between p-2 border rounded ${
            task.completed ? "line-through text-gray-500" : ""
          }`}
        >
          <span>
            {task.description} - {task.deadline}
          </span>
          <div>
            <button
              onClick={() => onToggleComplete(task.id)}
              className="bg-green-500 text-white p-1.5 mx-1 rounded"
            >
              ✅
            </button>
            <button
              onClick={() => onDeleteTask(task.id)}
              className="w-8 bg-red-500 text-white p-1.5 rounded"
            >
              ❌
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;

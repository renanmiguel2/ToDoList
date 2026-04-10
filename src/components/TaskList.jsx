function TaskList({ removeTask, filteredTasks, toggleTask }) {
    return (
        <div className="flex flex-col gap-5 mt-7">
            {filteredTasks.map(task => (
                <div className="w-full bg-white px-5 py-3 rounded-lg flex justify-between items-center" key={task.id}>
                <span className={`text-gray-800 ${task.completed ? "line-through opacity-50" : ""}`}>{task.text}</span>
                <div className="flex">
                    <button onClick={() => removeTask(task.id)  } className="bg-red-500 text-white px-4 py-2 rounded-lg hover:opacity-80 cursor-pointer">X</button>
                    <button onClick={() => toggleTask(task.id)} className="bg-green-500 text-white px-4 py-2 rounded-lg ml-2 hover:opacity-80 cursor-pointer">✓</button>
                </div>
            </div>
            ))}
        </div>
    )
}
export default TaskList
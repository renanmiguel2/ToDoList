import { useEffect, useState } from "react"
import TaskForm from "./components/TaskForm"
import TaskList from "./components/TaskList"

function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks")
    return saved ? JSON.parse(saved) : []
  })
  const [filter, setFilter] = useState("todos")

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])
  function addTask(text) {

    if (text.trim() === "") return

    const newTask = {
      id: Date.now(),
      text: text,
      completed: false
    }
    setTasks([...tasks, newTask])
  }

  function removeTask(id) {
    const updatedTasks = tasks.filter(task => task.id !== id)
    setTasks(updatedTasks)
  }

  function toggleTask(id) {
    const updatedTasks = tasks.map(task =>
      task.id === id
        ? { ...task, completed: !task.completed }
        : task
    )
    setTasks(updatedTasks)
  }

  const filteredTasks = tasks.filter(task => {
    if (filter === "concluidas") return task.completed
    if (filter === "pendentes") return !task.completed
    return true
  })

  return (
    <div className="bg-gray-300 h-screen w-full py-10 px-5 md:px-0">
      <div className="bg-gray-100 w-full max-w-3xl mx-auto px-10 py-5 rounded-lg">
        <TaskForm addTask={addTask} filter={filter} setFilter={setFilter} />
        <TaskList removeTask={removeTask} filteredTasks={filteredTasks} toggleTask={toggleTask} />
      </div>
    </div>
  )
}

export default App


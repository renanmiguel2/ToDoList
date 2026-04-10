import { useRef } from "react"

function TaskForm({addTask, filter, setFilter}) {
    const inputRef = useRef()
    
    function handleAddTask() {
        const inputValue = inputRef.current.value
        addTask(inputValue)
        inputRef.current.value = ""
    }
    return (
        <div>
            <div>
                <h1 className="text-center font-medium text-3xl text-gray-700 mb-5">Lista de Tarefas</h1>
                <div>
                    <h2 className="text-2xl font-medium text-gray-700 mb-2">Adicionar tarefa:</h2>
                    <input type="text" 
                    className="border border-gray-400 bg-white w-full px-2 py-1 outline-none rounded-xl" placeholder="Digite a tarefa..."
                    ref={inputRef}
                    />
                    <button onClick={handleAddTask} className="mt-3 bg-blue-400 px-4 py-2 rounded-2xl hover:opacity-80 cursor-pointer">Adicionar</button>
                    <div className="border-t border-gray-700 mt-10"></div>
                    </div>
            <div className="mt-10">
                <h2 className="text-2xl font-medium text-gray-700 mb-2">Filtrar:</h2>
                <div>
                    <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="border border-gray-400 bg-white w-full px-2 py-1 outline-none rounded-xl">
                        <option value="todos">Todos</option>
                        <option value="concluidas">Concluídas</option>
                        <option value="pendentes">Pendentes</option>
                    </select>
                    <div className="border-t border-gray-700 mt-10"></div>
                </div>
            </div>
            <div>
            </div>
            </div>
        </div>
    )
}
export default TaskForm
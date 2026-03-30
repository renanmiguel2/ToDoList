import TaskList from "./TaskList"

function TaskForm() {

    return (
        <div className="bg-gray-300 h-screen w-full py-10 px-5 md:px-0">
            <div className="bg-gray-100 w-full max-w-3xl mx-auto px-10 py-5 rounded-lg">
                <h1 className="text-center font-medium text-3xl text-gray-700 mb-5">Lista de Tarefas</h1>
                <div>
                    <h2 className="text-2xl font-medium text-gray-700 mb-2">Pesquisar:</h2>
                    <input type="text" className="border border-gray-400 bg-white w-full px-2 py-1 outline-none rounded-xl" placeholder="Digite para pesquisar..."/>
                    <button className="mt-3 bg-blue-400 px-4 py-2 rounded-2xl ">Enviar</button>
                    <div className="border-t border-gray-700 mt-10"></div>
                    </div>
            <div className="mt-10">
                <h2 className="text-2xl font-medium text-gray-700 mb-2">Filtrar:</h2>
                <div>
                    <select name="Filter" id="" className="border border-gray-400 bg-white w-full px-2 py-1 outline-none rounded-xl">
                        <option value="todos">Todos</option>
                        <option value="concluidas">Concluídas</option>
                        <option value="pendentes">Pendentes</option>
                    </select>
                    <div className="border-t border-gray-700 mt-10"></div>
                </div>
            </div>
            <div>
                <TaskList />
            </div>
            </div>
        </div>
    )
}
export default TaskForm
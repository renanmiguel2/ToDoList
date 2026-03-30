function TaskList() {
    return (
        <div className="mt-7 w-full bg-white px-5 py-3 rounded-lg flex justify-between items-center hidden">
            <span className="text-gray-700 text-md"></span>
            <div className="flex">
                <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:opacity-80 cursor-pointer">X</button>
                <button className="bg-green-500 text-white px-4 py-2 rounded-lg ml-2 hover:opacity-80 cursor-pointer">✓</button>
            </div>
        </div>
    )
}
export default TaskList
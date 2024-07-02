import React, { useState } from "react";

function CreateTasks() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  const handleTaskData = (e) => {
    setTaskInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(taskInput);
    if (taskInput.trim()) {
      setTasks([...tasks, taskInput.trim()]);
      setTaskInput("");
    }
  };

  const handelTaskClear = (taskToClear) => {
    setTasks(tasks.filter((task) => task !== taskToClear));
  };

  return (
    <>
      <h3 className="text-2xl sm:text-4xl font-semibold my-8">Tasks</h3>
      <form onSubmit={handleSubmit} className="flex gap-6">
        <input
          type="text"
          placeholder="Enter Task"
          className="py-3 w-full sm:w-[30rem] px-4 text-lg font-normal sm:text-xl rounded-lg bg-zinc-300 text-zinc-800"
          required
          value={taskInput}
          onChange={handleTaskData}
        />
        <button
          type="submit"
          className="text-xl bg-gray-700 text-zinc-300 py-2 px-8 rounded-lg shadow-sm hover:shadow-lg transition hover:scale-105 duration-300 hover:text-zinc-300 hover:bg-gray-800"
        >
          Add Task
        </button>
      </form>
      {tasks.length > 0 && (
        <div className="bg-gray-300 rounded-lg mt-8 w-full">
          <ul className="py-8 px-6 flex flex-col gap-6">
            {tasks.map((task, index) => (
              <li
                key={index}
                className="flex justify-between items-center text-2xl font-medium"
              >
                {task}
                <button onClick={() => handelTaskClear(task)} className="text-xl bg-gray-700 text-zinc-300 py-2 px-8 rounded-lg shadow-sm hover:shadow-lg transition hover:scale-105 duration-300 hover:text-zinc-300 hover:bg-gray-800">
                  Clear
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default CreateTasks;

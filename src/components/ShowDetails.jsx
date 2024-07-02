import React, { useState } from "react";
import Tasks from "./CreateTasks";

function ShowDetails({ project, onDelete }) {
  if (!project) {
    return null;
  }

  function formatDate(dateString) {
    const date = new Date(dateString);

    // Options for formatting the date
    const options = { day: "2-digit", month: "long", year: "numeric" };

    // Format the date
    const formattedDate = date.toLocaleDateString("en-GB", options);

    return formattedDate;
  }

  const handleDelete = () => {
    onDelete(project.id);
  };

  return (
    <div className="flex items-start flex-col px-8">
      <div className="w-full items-center flex justify-between">
        <h2
          className="text-2xl tracking-wide sm:text-5xl mt-12 
          font-bold text-gray-700"
        >
          {project.title}
        </h2>
        <button
          onClick={handleDelete}
          className="text-xl sm:text-2xl bg-gray-700 text-zinc-300 py-2 px-8 rounded-lg shadow-sm hover:shadow-lg transition hover:scale-105 duration-300 hover:text-zinc-100 hover:bg-red-500"
        >
          Delete
        </button>
      </div>

      <p className="font-semibold text-xl text-gray-400 my-6">
        {formatDate(project.date)}
      </p>
      <p className="text-xl sm:text-2xl mt-4 text-gray-700 font-medium">
        {project.description}
      </p>
      <div className="h-[1px]  w-full bg-gray-900 mt-16"></div>
      <Tasks />
    </div>
  );
}

export default ShowDetails;

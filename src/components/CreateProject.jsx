import React, { useState } from "react";
import ShowForm from "./ShowForm";
import ShowDetails from "./ShowDetails";
import noProjectImg from "../assets/no-projects.png";

function CreateProject() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState(null);
  const [allFormData, setAllFormData] = useState([]);

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const handleFormData = (data) => {
    setAllFormData([...allFormData, data]);
    setFormData(data);
    setShowForm(false);
  };

  const handleDeleteProject = (id) => {
    const updatedFormData = allFormData.filter((data) => data.id !== id);
    setAllFormData(updatedFormData);
    console.log(updatedFormData);
    if (formData && formData.id === id) {
      setFormData(null);
    }
    console.log(formData);
  };

  const capitalizeFirstLetter = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  return (
    <>
      <div className="text-white mt-10 ml-14">
        <h2 className="text-5xl font-semibold my-16 leading-tight">
          YOUR PROJECTS
        </h2>
        <button
          onClick={handleShowForm}
          className="bg-zinc-700 hover:bg-zinc-800 hover:text-gray-300 shadow-sm hover:shadow-lg transition hover:translate-y-2 duration-300 px-8 py-4 text-2xl font-semibold rounded-lg text-gray-400 mb-10"
        >
          <span className="text-3xl text-gray-200">+</span> Add Project
        </button>
        {allFormData.map((data, index) => (
          <button
            key={index}
            className={`hover:bg-zinc-900 text-left sm:text-3xl mb-4 w-[100%] px-8 py-4 text-2xl ${formData && formData.id === data.id ? 'active transition duration-300' : ''}`}
            onClick={() => setFormData(data)}
          >
            {capitalizeFirstLetter(data.title)}
          </button>
        ))}
      </div>
      <div
        className={`w-2/3 h-screen bg-zinc-100 flex-col p-10 ${
          !formData && " flex justify-center items-center "
        }`}
      >
        {showForm ? (
          <ShowForm onClose={handleCloseForm} onFormSubmit={handleFormData} />
        ) : formData ? (
          <ShowDetails project={formData} onDelete={handleDeleteProject} />
        ) : (
          <div className="text-center">
            <img className="w-32 h-32 mx-auto" src={noProjectImg} alt="" />
            <h2 className="text-4xl my-8 font-bold text-gray-600">
              No Projects Selected
            </h2>
            <p className="text-gray-500 font-medium text-3xl">
              Select a project or get started with a new one
            </p>
            <button
              onClick={handleShowForm}
              className="text-3xl bg-gray-800 mt-20 text-zinc-400 py-3 px-6 rounded-lg shadow-sm hover:shadow-lg transition hover:translate-y-2 duration-300 hover:text-zinc-300 hover:bg-gray-800"
            >
              Create new project
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default CreateProject;

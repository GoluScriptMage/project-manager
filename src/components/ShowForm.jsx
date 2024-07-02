import React, { useState } from "react";
import CustomDatePicker from "./reactDatePicker/CustomDatePicker";
import "./reactDatePicker/customDatepicker.css"; // Ensure you import the custom CSS

function ShowForm({ onClose, onFormSubmit }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: null,
    id: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
      id: createId(),
    }));
  };

  const createId = () => {
    return Date.now().toString();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data before submission in ShowForm:", formData); // Debugging log
    onFormSubmit(formData);
    setFormData({
      title: "",
      description: "",
      date: null,
      id: null,
    });
    onClose(); // Hide the form by calling the onClose prop
  };

  const handleDateData = (date) => {
    setFormData((prevData) => ({
      ...prevData,
      date: date,
    }));
  };

  return (
    <form className="w-full h-screen mt-20" onSubmit={handleSubmit}>
      <div className="text-2xl font-semibold text-gray-600 mb-8">
        <label htmlFor="title" className="block text-gray-700 font-medium mb-2">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          className="w-full border border-gray-300 font-normal p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Project Title"
          onChange={handleChange}
          value={formData.title}
          required
        />
      </div>
      <div className="text-2xl font-semibold text-gray-600 mb-8">
        <label
          htmlFor="description"
          className="block text-gray-700 font-medium mb-2"
        >
          Description
        </label>
        <textarea
          id="description"
          name="description"
          className="w-full border border-gray-300 font-normal p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Project Description"
          rows="4"
          onChange={handleChange}
          value={formData.description}
          required
        ></textarea>
      </div>
      <div className="text-2xl font-semibold text-gray-600 mb-8">
        <label
          htmlFor="dueDate"
          className="block text-gray-700 font-medium mb-2"
        >
          Due Date
        </label>
        <CustomDatePicker
          onDataChange={handleDateData}
          selectedDate={formData.date}
        />
      </div>
      <div className="flex items-center gap-8">
        <button
          type="button"
          onClick={onClose}
          className="text-xl font-semibold"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="text-xl bg-gray-700 text-zinc-300 py-2 px-8 rounded-lg shadow-sm hover:shadow-lg transition hover:scale-105 duration-300 hover:text-zinc-300 hover:bg-gray-800"
        >
          Save
        </button>
      </div>
    </form>
  );
}

export default ShowForm;

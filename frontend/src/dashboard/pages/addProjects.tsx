import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Project } from "../interfaces";

const ProjectFormPage = () => {
  const history = useNavigate();
  const [project, setProject] = useState<Project>({
    id: 1,
    name: "",
    description: "",
    components: [],
  });

  const handleProjectChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setProject((prevProject) => ({
      ...prevProject,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Save the project data (e.g., send it to the server)
    console.log("Project Data:", project);
    // Redirect to the ComponentFormPage
    history("/component-form");
  };

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-semibold text-center mb-8">
        Create Project
      </h1>
      <form
        className="border p-4 rounded-lg max-w-md mx-auto"
        onSubmit={handleSubmit}
      >
        <label htmlFor="projectName" className="block font-semibold mb-2">
          Project Name
        </label>
        <input
          type="text"
          id="projectName"
          name="name"
          className="w-full border rounded-lg px-3 py-2"
          value={project.name}
          onChange={handleProjectChange}
          required
        />
        <label
          htmlFor="projectDescription"
          className="block font-semibold mt-2 mb-2"
        >
          Project Description
        </label>
        <textarea
          id="projectDescription"
          name="description"
          className="w-full border rounded-lg px-3 py-2"
          value={project.description}
          onChange={handleProjectChange}
          required
        />
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg mt-4"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProjectFormPage;

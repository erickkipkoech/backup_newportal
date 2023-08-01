import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Component } from "../interfaces";

const ComponentFormPage = () => {
  const history = useNavigate();
  const [components, setComponents] = useState<Component[]>([
    {
      id: 1,
      name: "",
      description: "",
      subComponent: [],
    },
  ]);

  const handleComponentChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setComponents((prevComponents) => {
      const updatedComponents = [...prevComponents];
      updatedComponents[index] = {
        ...updatedComponents[index],
        [name]: value,
      };
      return updatedComponents;
    });
  };

  const addComponent = () => {
    setComponents((prevComponents) => [
      ...prevComponents,
      {
        id: prevComponents.length + 1,
        name: "",
        description: "",
        subComponent: [],
      },
    ]);
  };

  // const removeComponent = (index: number) => {
  //   setComponents((prevComponents) =>
  //     prevComponents.filter((_, i) => i !== index)
  //   );
  // };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Save the components data (e.g., send it to the server)
    console.log("Components Data:", components);
    // Redirect to the ToolFormPage
    history("/subcomponent-form");
  };

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-semibold text-center mb-8">
        Create Components
      </h1>
      <form
        className="border p-4 rounded-lg max-w-md mx-auto"
        onSubmit={handleSubmit}
      >
        {components.map((component, componentIndex) => (
          <div key={component.id} className="mb-4">
            <label
              htmlFor={`componentName${componentIndex}`}
              className="block font-semibold mb-2"
            >
              Component Name
            </label>
            <input
              type="text"
              id={`componentName${componentIndex}`} // Unique id attribute
              name="name"
              className="w-full border rounded-lg px-3 py-2"
              value={component.name}
              onChange={(e) => handleComponentChange(componentIndex, e)}
              required
            />
            <label
              htmlFor={`componentDescription${componentIndex}`}
              className="block font-semibold mt-2 mb-2"
            >
              Component Description
            </label>
            <textarea
              id={`componentDescription${componentIndex}`} // Unique id attribute
              name="description"
              className="w-full border rounded-lg px-3 py-2"
              value={component.description}
              onChange={(e) => handleComponentChange(componentIndex, e)}
              required
            />
            {/* Tools section */}
            {/* Add tools here */}
          </div>
        ))}
        <button
          type="button"
          onClick={addComponent}
          className="text-blue-500 mt-4"
        >
          Add Component
        </button>
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

export default ComponentFormPage;

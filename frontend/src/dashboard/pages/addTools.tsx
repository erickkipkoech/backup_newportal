import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {  Tool } from "../interfaces";

const ToolFormPage = () => {
  const history = useNavigate();
  const [tools, setTools] = useState<Tool[]>([
    {
      id: 1,
      name: "",
      description: "",
    },
  ]);

  const handleToolChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setTools((prevTools) => {
      const updatedTools = [...prevTools];
      updatedTools[index] = {
        ...updatedTools[index],
        [name]: value,
      };
      return updatedTools;
    });
  };

  const addTool = () => {
    setTools((prevTools) => [
      ...prevTools,
      {
        id: prevTools.length + 1,
        name: "",
        description: "",
      },
    ]);
  };

  const removeTool = (index: number) => {
    setTools((prevTools) => prevTools.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Save the tools data (e.g., send it to the server)
    console.log("Tools Data:", tools);
    // Redirect to the PreviewPage or any other final step
    history("/preview");
  };

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-semibold text-center mb-8">Create Tools</h1>
      <form
        className="border p-4 rounded-lg max-w-md mx-auto"
        onSubmit={handleSubmit}
      >
        {tools.map((tool, toolIndex) => (
          <div key={tool.id} className="mb-4">
            <label
              htmlFor={`toolName${toolIndex}`}
              className="block font-semibold mb-2"
            >
              Tool Name
            </label>
            <input
              type="text"
              id={`toolName${toolIndex}`}
              name="name"
              className="w-full border rounded-lg px-3 py-2"
              value={tool.name}
              onChange={(e) => handleToolChange(toolIndex, e)}
              required
            />
            <label
              htmlFor={`toolDescription${toolIndex}`}
              className="block font-semibold mt-2 mb-2"
            >
              Tool Description
            </label>
            <textarea
              id={`toolDescription${toolIndex}`}
              name="description"
              className="w-full border rounded-lg px-3 py-2"
              value={tool.description}
              onChange={(e) => handleToolChange(toolIndex, e)}
              required
            />
            {tools.length > 1 && (
              <button
                type="button"
                onClick={() => removeTool(toolIndex)}
                className="text-red-500 mt-2"
              >
                Remove Tool
              </button>
            )}
          </div>
        ))}
        <button type="button" onClick={addTool} className="text-blue-500 mt-4">
          Add Tool
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

export default ToolFormPage;

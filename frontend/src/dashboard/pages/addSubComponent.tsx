import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SubComponent } from "../interfaces";

const SubComponentPage = () => {
  const history = useNavigate();
  const [SubComponents, setSubComponents] = useState<SubComponent[]>([
    {
      id: 1,
      name: "",
      description: "",
      tools:[]
    },
  ]);

  const handleSubComponentChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setSubComponents((prevSubComponents) => {
      const updatedSubComponents = [...prevSubComponents];
      updatedSubComponents[index] = {
        ...updatedSubComponents[index],
        [name]: value,
      };
      return updatedSubComponents;
    });
  };

  const addSubComponent = () => {
    setSubComponents((prevSubComponents) => [
      ...prevSubComponents,
      {
        id: prevSubComponents.length + 1,
        name: "",
        description: "",
        tools:[]
      },
    ]);
  };

  const removeSubComponent = (index: number) => {
    setSubComponents((prevSubComponents) => prevSubComponents.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Save the SubComponents data (e.g., send it to the server)
    console.log("SubComponents Data:", SubComponents);
    // Redirect to the PreviewPage or any other final step
    history("/tool-form");
  };

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-semibold text-center mb-8">Create SubComponents</h1>
      <form
        className="border p-4 rounded-lg max-w-md mx-auto"
        onSubmit={handleSubmit}
      >
        {SubComponents.map((SubComponent, SubComponentIndex) => (
          <div key={SubComponent.id} className="mb-4">
            <label
              htmlFor={`SubComponentName${SubComponentIndex}`}
              className="block font-semibold mb-2"
            >
              SubComponent Name
            </label>
            <input
              type="text"
              id={`SubComponentName${SubComponentIndex}`}
              name="name"
              className="w-full border rounded-lg px-3 py-2"
              value={SubComponent.name}
              onChange={(e) => handleSubComponentChange(SubComponentIndex, e)}
              required
            />
            <label
              htmlFor={`SubComponentDescription${SubComponentIndex}`}
              className="block font-semibold mt-2 mb-2"
            >
              SubComponent Description
            </label>
            <textarea
              id={`SubComponentDescription${SubComponentIndex}`}
              name="description"
              className="w-full border rounded-lg px-3 py-2"
              value={SubComponent.description}
              onChange={(e) => handleSubComponentChange(SubComponentIndex, e)}
              required
            />
            {SubComponents.length > 1 && (
              <button
                type="button"
                onClick={() => removeSubComponent(SubComponentIndex)}
                className="text-red-500 mt-2"
              >
                Remove SubComponent
              </button>
            )}
          </div>
        ))}
        <button type="button" onClick={addSubComponent} className="text-blue-500 mt-4">
          Add SubComponent
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

export default SubComponentPage;

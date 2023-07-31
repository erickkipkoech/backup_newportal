

// ConstructPage.tsx

import  { useState } from "react";
import { useParams } from "react-router-dom";
import { Project, Component } from "../interfaces";

const ConstructPage = () => {
  const { subcategory } = useParams<{ subcategory: string }>();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedComponent, setSelectedComponent] = useState<Component | null>(null);

  // Sample data for Projects, Components, and Tools
 const projects: Project[] = [
   {
     id: 1,
     name: "Project 1",
     description: "Description of Project 1",
     components: [
       {
         id: 1,
         name: "Component 1",
         description: "Description of Component 1",
         tools: [
           {
             id: 1,
             name: "Tool 1",
             description: "Description of Tool 1",
           },
           {
             id: 2,
             name: "Tool 2",
             description: "Description of Tool 2",
           },
         ],
       },
       {
         id: 2,
         name: "Component 2",
         description: "Description of Component 2",
         tools: [
           {
             id: 3,
             name: "Tool 3",
             description: "Description of Tool 3",
           },
           {
             id: 4,
             name: "Tool 4",
             description: "Description of Tool 4",
           },
         ],
       },
     ],
   },
   {
     id: 2,
     name: "Project 2",
     description: "Description of Project 2",
     components: [
       {
         id: 3,
         name: "Component 3",
         description: "Description of Component 3",
         tools: [
           {
             id: 5,
             name: "Tool 5",
             description: "Description of Tool 5",
           },
           {
             id: 6,
             name: "Tool 6",
             description: "Description of Tool 6",
           },
         ],
       },
       {
         id: 4,
         name: "Component 4",
         description: "Description of Component 4",
         tools: [
           {
             id: 7,
             name: "Tool 7",
             description: "Description of Tool 7",
           },
           {
             id: 8,
             name: "Tool 8",
             description: "Description of Tool 8",
           },
         ],
       },
     ],
   },
   // Add more projects here
 ];


  // Initialize selectedProject and selectedComponent with dummy data for "Select a Project" and "Select a Component" states
  const initialSelectedProject: Project = {
    id: -1,
    name: "Select a Component",
    description: "",
    components: [],
  };

  const initialSelectedComponent: Component = {
    id: -1,
    name: "Select a Project",
    description: "",
    tools: [],
  };

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setSelectedComponent(initialSelectedComponent); // Clear selected Component when a new Project is clicked
  };

  const handleComponentClick = (component: Component) => {
    setSelectedComponent(component);
  };

   return (
     <div className=" mx-1 p-1 border border-slate-400 rounded my-1">
       <h1 className="text-3xl bg-sky-700 font-semibold text-center mb-4">
         SkyTOP Construct Page
       </h1>
       <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
         {/* Projects, Components, and Tools columns (Take 1 column each on large screens) */}
         <div className="md:flex md:col-span-2 md:gap-4">
           {/* Projects column */}
           <div className="md:w-full">
             <fieldset className="border p-4 rounded-lg h-96">
               <legend className="text-xl font-semibold text-center mb-4">
                 Projects
               </legend>
               {projects.map((project) => (
                 <div
                   key={project.id}
                   className="cursor-pointer mb-4"
                   onClick={() => handleProjectClick(project)}
                 >
                   <h3 className="font-semibold">{project.name}</h3>
                   <p>{project.description}</p>
                 </div>
               ))}
             </fieldset>
           </div>

           {/* Components column */}
           <div className="md:w-full">
             <fieldset className="border p-4 rounded-lg h-96">
               <legend className="text-xl font-semibold text-center mb-4">
                 Components
               </legend>
               {selectedProject ? (
                 selectedProject.components.map((component) => (
                   <div
                     key={component.id}
                     className="cursor-pointer mb-4"
                     onClick={() => handleComponentClick(component)}
                   >
                     <h3 className="font-semibold">{component.name}</h3>
                     <p>{component.description}</p>
                   </div>
                 ))
               ) : (
                 <>
                   <div className="cursor-pointer mb-4">
                     <h3 className="font-semibold">
                       {initialSelectedComponent.name}
                     </h3>
                     <p>{initialSelectedComponent.description}</p>
                   </div>
                 </>
               )}
             </fieldset>
           </div>

           {/* Tools column */}
           <div className="md:w-full">
             <fieldset className="border p-4 rounded-lg h-96">
               <legend className="text-xl font-semibold text-center mb-4">
                 Tools
               </legend>
               {selectedComponent ? (
                 selectedComponent.tools.map((tool) => (
                   <div key={tool.id} className="mb-4">
                     <h3 className="font-semibold">{tool.name}</h3>
                     <p>{tool.description}</p>
                   </div>
                 ))
               ) : (
                 <>
                   <div className="cursor-pointer mb-4">
                     <h3 className="font-semibold">
                       {initialSelectedProject.name}
                     </h3>
                     <p>{initialSelectedProject.description}</p>
                   </div>
                 </>
               )}
             </fieldset>
           </div>
         </div>

         {/* Preview column (Takes 2 columns on large screens) */}
         <div className="md:col-span-2 md:col-start-3">
           <fieldset className="border p-4 rounded-lg h-96">
             <legend className="text-xl font-semibold text-center mb-4">
               Preview
             </legend>
             {/* Display the selected subcategory */}
             <p className="text-center font-semibold">{subcategory}</p>
             {/* Display the selected Project */}
             {selectedProject && selectedProject.id !== -1 && (
               <div>
                 <h3 className="font-semibold">{selectedProject.name}</h3>
                 <p>{selectedProject.description}</p>
               </div>
             )}
             {/* Display the selected Component */}
             {selectedComponent && selectedComponent.id !== -1 && (
               <div>
                 <h3 className="font-semibold">{selectedComponent.name}</h3>
                 <p>{selectedComponent.description}</p>
               </div>
             )}
           </fieldset>
         </div>
       </div>
     </div>
   );
};

export default ConstructPage;

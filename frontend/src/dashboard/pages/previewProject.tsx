// previewProject.tsx
import React from "react";
import { Project, Component, Tool } from "../interfaces";

interface PreviewPageProps {
  project: Project | null;
  components: Component[];
  tools: Tool[];
}

const PreviewPage: React.FC<PreviewPageProps> = ({
  project,
  components,
  tools,
}) => {
  return (
    <div>
      {/* Display the preview of the project */}
      <h1>Preview Page</h1>
      {project ? (
        <div>
          <h2>Project: {project.name}</h2>
          <p>Description: {project.description}</p>
        </div>
      ) : (
        <p>No project data available.</p>
      )}

      {/* Display the components */}
      <h2>Components</h2>
      {components.length > 0 ? (
        components.map((component) => (
          <div key={component.id}>
            <h3>Component: {component.name}</h3>
            <p>Description: {component.description}</p>
          </div>
        ))
      ) : (
        <p>No components added.</p>
      )}

      {/* Display the tools */}
      <h2>Tools</h2>
      {tools.length > 0 ? (
        tools.map((tool) => (
          <div key={tool.id}>
            <h3>Tool: {tool.name}</h3>
            <p>Description: {tool.description}</p>
          </div>
        ))
      ) : (
        <p>No tools added.</p>
      )}
    </div>
  );
};

export default PreviewPage;

// app.tsx

import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import MyProducts from "./dashboard/pages/myProducts";
import Categories from "./dashboard/pages/Categories";
import ConstructPage from "./dashboard/pages/construct";
import Layout from "./dashboard/Layout";
import ProjectFormPage from "./dashboard/pages/addProjects";
import ComponentFormPage from "./dashboard/pages/addComponent";
import ToolFormPage from "./dashboard/pages/addTools";
import PreviewPage from "./dashboard/pages/previewProject";
import { Project, Component, Tool } from "./dashboard/interfaces";

const App: React.FC = () => {
  const [project, /*setProject}*/] = useState<Project | null>(null);
  const [components,/* setComponents*/] = useState<Component[]>([]);
  const [tools, /*setTools*/] = useState<Tool[]>([]);

  return (
    <div className="h-full">
      <Router>
        <Routes>
          {/* Add the route for the ConstructPage */}
          <Route path="/construct" element={<ConstructPage />} />

          {/* Wrap other pages with the Layout */}
          <Route
            path="/myproducts/*"
            element={
              <Layout>
                <MyProducts />
              </Layout>
            }
          />
          <Route
            path="/categories/*"
            element={
              <Layout>
                <Categories />
              </Layout>
            }
          />
          <Route
            path="/project/*"
            element={
              <Layout>
                <ProjectFormPage />
              </Layout>
            }
          />
          <Route
            path="/component-form"
            element={
              <Layout>
                <ComponentFormPage />
              </Layout>
            }
          />
          <Route
            path="/tool-form"
            element={
              <Layout>
                <ToolFormPage />
              </Layout>
            }
          />
          <Route
            path="/preview"
            element={
              <Layout>
                <PreviewPage
                  project={project}
                  components={components}
                  tools={tools}
                />
              </Layout>
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

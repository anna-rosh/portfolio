import React, { useState } from "react";
import projectsData from "./projects-data";
import Project from "./Project";
import Opening from "./Opening";
import ProjectsTitle from "./ProjectsTitle";
import Footer from "./Footer";

export default function App() {
    const [projects] = useState(projectsData);

    return (
        <>
            <div className="fixed-bg"></div>
            <Opening />
            <ProjectsTitle />
            {projects.map((project) => (
                <Project key={project.id} project={project} />
            ))}
            <Footer />
        </>
    );
}

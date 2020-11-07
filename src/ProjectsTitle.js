import React from "react";
import { ChevronDown } from "react-feather";

export default function ProjectsTitle() {
    return (
        <div className="project-title-container">
            <h1>projects</h1>
            <ChevronDown className="chevron-down" />
        </div>
    );
}
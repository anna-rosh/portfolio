import React from "react";
import { X } from "react-feather";

export default function Video({ project, hideVideo }) {
    return (
        <div className="video-comp-container">
            <div className="video-overlay" onClick={hideVideo}></div>
            <div className="video-container">
                <div className="video-bg"></div>
                <X className="close" onClick={hideVideo} />
                <h1>{project.title} | demo</h1>
                <video controls className="video">
                    <source src={process.env.PUBLIC_URL + project.video}></source>
                </video>
            </div>
        </div>
    );
}
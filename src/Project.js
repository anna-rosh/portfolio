import React, { useState } from "react";
import Video from "./Video";
import { GitHub, ExternalLink, Film } from "react-feather";

export default function Project({ project }) {
    const [overlayIsVisible, setOverlayIsVisible] = useState(false);
    const [videoIsVisible, setVideoIsVisible] = useState(false);

    const showOverlay = () => {
        setOverlayIsVisible(true);
    };

    const hideOverlay = () => {
        setOverlayIsVisible(false);
    };

    const showVideo = () => {
        setVideoIsVisible(true);
    };

    const hideVideo = () => {
        setVideoIsVisible(false);
    };

    return (
        <div className="project-container">
            <div
                className="img-container"
                onMouseOver={showOverlay}
                onMouseLeave={hideOverlay}
            >
                {overlayIsVisible && (
                    <div className="overlay" onClick={showVideo}>
                        <Film className="film-icon" />
                        <h3>watch a demo</h3>
                    </div>
                )}
                <img
                    className="project-img"
                    alt={project.title}
                    src={process.env.PUBLIC_URL + project.img}
                />
            </div>
            <div className="project-text-container">
                <h2>{project.title}</h2>
                <p className="project-info">{project.description}</p>
                <br />
                <p className="project-info">{project.stack}</p>
            </div>
            <div className="project-links">
                <a
                    className="contact-link"
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <GitHub className="project-link-icon" />
                </a>
                {project.url && (
                    <a
                        className="contact-link"
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <ExternalLink className="project-link-icon" />
                    </a>
                )}
                <Film className="project-link-icon" onClick={showVideo} />
            </div>
            {videoIsVisible && (
                <Video project={project} hideVideo={hideVideo} />
            )}
        </div>
    );
}
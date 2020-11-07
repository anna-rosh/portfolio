import React from "react";
import { GitHub, Linkedin, Mail, File } from "react-feather";

export default function Contact() {
    return (
        <div className="contact-container">
            <a
                className="contact-link"
                href="https://github.com/anna-rosh"
                target="_blank"
                rel="noopener noreferrer"
            >
                <GitHub className="contact-icon" />
            </a>
            <a
                className="contact-link"
                href="https://www.linkedin.com/in/annaroshchina/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Linkedin className="contact-icon" />
            </a>
            <a
                className="contact-link"
                href="mailto:anna.roshchina.bln@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Mail className="contact-icon" />
            </a>
            <a
                className="contact-link"
                href="./imgs/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
            >
                <File className="contact-icon" />
            </a>
        </div>
    );
}
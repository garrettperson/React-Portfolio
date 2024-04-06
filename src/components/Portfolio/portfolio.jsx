import React from "react";

import { getImage } from "../../utils/utils";

const Portfolio = () => {
    return (
        <section id="portfolio">
        <div className="container">
            <div className="item-1">
                <img src={getImage("JATEscreenshot.png")} alt="just-another-text-editor-image"/>
                <h3>
                    <p> 
                        <a href="https://pwa-text-editor-3-y650.onrender.com/" style={{ color: 'white' }}>Progressive Web Application Text Editor</a>
                    </p>
                </h3>
                <h3 className="description">
                    <p> 
                        <a href="https://github.com/garrettperson/PWA-Text-Editor?tab=readme-ov-file" style={{ color: 'white' }}>GitHub</a>
                    </p>
                </h3>
            </div>
            <div className="item-1">
                <img src={getImage("Code-quiz.png")} alt="code-quiz-image" />
                <h3 className="description">
                    <p> 
                        <a href="https://garrettperson.github.io/code-quiz/" style={{ color: 'white' }}>Web API Code Quiz</a>
                    </p>
                </h3>
                <h3 className="description">
                    <p> 
                        <a href="https://github.com/garrettperson/code-quiz?tab=readme-ov-file" style={{ color: 'white' }}>GitHub</a>
                    </p>
                </h3>
            </div>
            <div className="item-1">
                <img src={getImage("note-taker.png")} alt="note-taker-image" />
                <h3 className="description">
                    <p> 
                        <a href="https://notetaker42-9699568da27f.herokuapp.com/" style={{ color: 'white' }}>Note-Taker</a>
                    </p>
                </h3>
                <h3 className="description">
                    <p> 
                        <a href="https://github.com/garrettperson/NoteTaker" style={{ color: 'white' }}>GitHub</a>
                    </p>
                </h3>
            </div>
            <div className="item-2">
                <img src={getImage("work-day-scheduler.png")} alt="work-day-scheduler-image" />
                <h3 className="description">
                    <p> 
                        <a href="https://garrettperson.github.io/work-day-scheduler/" style={{ color: 'white' }}>Work Day Scheduler</a>
                    </p>
                </h3>
                <h3 className="description">
                    <p> 
                        <a href="https://github.com/garrettperson/work-day-scheduler" style={{ color: 'white' }}>GitHub</a>
                    </p>
                </h3>
            </div>
            <div className="item-2">
                <img src={getImage("star-finder.png")} alt="star-finder-image" />
                <h3 className="description">
                    <p> 
                        <a href="https://leesam95.github.io/Star-Finder/" style={{ color: 'white' }}>Star Finder</a>
                    </p>
                </h3>
                <h3 className="description">
                    <p> 
                        <a href="https://github.com/LeesaM95/Star-Finder" style={{ color: 'white' }}>GitHub</a>
                    </p>
                </h3>
            </div>
            <div className="item-2">
                <img src={getImage("password-generator.png")} alt="password-generator-image" />
                <h3 className="description">
                    <p> 
                        <a href="https://garrettperson.github.io/password-generator/" style={{ color: 'white' }}>Password Generator</a>
                    </p>
                </h3>
                <h3 className="description">
                    <p> 
                        <a href="https://github.com/garrettperson/password-generator" style={{ color: 'white' }}>GitHub</a>
                    </p>
                </h3>
            </div>
        </div>
        </section>
    );
};

export default Portfolio;
    
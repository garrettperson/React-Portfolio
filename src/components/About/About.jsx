import React from "react";

import styles from "./about.module.css"
import { getImage } from "../../utils/utils";

const About = () => {
    return (
    <section className={styles.container} id="about">
        <img src={getImage("unnamed.jpg")} alt="profile-picture2" className={styles.profileAboutImg}/>
        <h2 className={styles.title}>About Me</h2>
        <div className={styles.content} class="float-child">
            <p>
                I have experience developing web applications using HTML, CSS, Javascript, MERN, and other technologies. I have a unique background as I've worked as a production assistant on film sets, as a videographer and video editor, as a resume writer, as an emergency medical technician, and in other roles! I'm passionate about lifelong learning and I've been excited throughout my journey into web development! 
            </p>
        </div>
        <div className={styles.htmlImage} class="float-child">
            <img src={getImage("htmlcssjs.png")} alt="html-css-tags" className={styles.aboutImg}/>
            <img src={getImage("mongodb.png")} alt="mongodb-icon" className={styles.aboutImg2}/>
            <img src={getImage("node-express.png")} alt="node-express-icon" className={styles.aboutImg3}/>
            <img src={getImage("react-icon.png")} alt="react-icon" className={styles.aboutImg4}/>
        </div>
    </section>
    );
};

export default About;
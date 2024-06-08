import React from "react";
import styles from "./home.module.css";
import { getImage } from "../../utils/utils";

const Home = () => {
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hello, I'm Garrett!</h1>
            <p className={styles.description}>I have about 8 months of coding experience so far, and I'm learning more all the time!</p>
        </div>
        <img src={getImage("prof-pic.jpg")} alt="profile-picture" className={styles.homeImg}/>
        <div className={styles.blurAbove} />
        <div className={styles.blurBelow} />
    </section>;
};

export default Home;

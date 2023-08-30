import { Link } from "react-router-dom";
import styles from "./GetToKnow.module.css";
import { Icon } from "@iconify/react";

import sectionImage from "../../assets/images/knowmore-placeholder-image.jpg";

export const GetToKnow = () => {
    return (
        <section className={styles.GetToKnow}>
            <div className={styles.section_header}>
                <h3 className={styles.section_header_text}>
                    The incredible dreams you create we can make them come true with ease
                </h3>
                <Link className={styles.section_header_button} to="/">
                    Get to know us <Icon icon="eva:diagonal-arrow-right-up-fill" />
                </Link>
            </div>
            <div className={styles.know_more_box}>
                <div className={styles.know_more_content}>
                    <div className={styles.header_text_list}>
                        <h1>Place to stay.</h1>
                        <h1>Comfy place.</h1>
                        <h1>Easy to go.</h1>
                        <h1>Nice view.</h1>
                    </div>
                    <p className={styles.know_more_subtitle}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt eum mollitia distinctio, ea ipsam
                        dicta blanditiis doloribus labore quasi, reprehenderit ut dignissimos aliquid dolores eveniet
                        sequi voluptates deserunt voluptas magni!
                    </p>
                </div>
                <div className={styles.know_more_image}>
                    <img src={sectionImage} alt="Info House" />
                </div>
            </div>
        </section>
    );
};

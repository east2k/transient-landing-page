import { Link } from "react-router-dom";
import styles from "./SeeAll.module.css";
import { Icon } from "@iconify/react";

import sectionImage from "../../assets/images/knowmore-placeholder-image.jpg";

export const SeeAll = () => {
    return (
        <section className={styles.SeeAll}>
            <div className={styles.section_header}>
                <h1 className={styles.section_header_text}>Check our rooms, featuring multiple rooms</h1>
                <Link className={styles.section_header_button} to="/">
                    See all <Icon icon="eva:diagonal-arrow-right-up-fill" />
                </Link>
            </div>
            <div className={styles.section_content}>
                <div className={styles.carosel}>
                    <div className={styles.carosel_item}>
                        <h1 className={styles.carosel_item_name}>1. Modern</h1>
                        <div className={styles.carosel_item_subtitle}>
                            <p>
                                Minimalist house with futuristic decoration and finishing suitable for your small family
                            </p>
                            <Link className={styles.section_header_button} to="/">
                                See all <Icon icon="eva:diagonal-arrow-right-up-fill" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

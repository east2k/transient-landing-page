import { Link } from "react-router-dom";
import styles from "./Banner.module.css";

import houseImage from "../../assets/images/house-placeholder-image.jpg";

export const Banner = () => {
    return (
        <div className={styles.Banner}>
            <h1 className={styles.banner_header_text}>Check our residence, here at baguio</h1>
            <div className={styles.banner_image_container}>
                <img src={houseImage} alt="Banner House" />
            </div>
            <h2 className={styles.banner_regular_text}>Logo lets you dream and cream at the same time</h2>
        </div>
    );
};

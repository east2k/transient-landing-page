import { Banner } from "../../components/Banner/Banner";
import { FrequentQuestions } from "../../components/FrequentQuestions/FrequentQuestions";
import { GetToKnow } from "../../components/GetToKnow/GetToKnow";
import { SeeAll } from "../../components/SeeAll/SeeAll";
import styles from "./Home.module.css";

import houseImage from "../../assets/images/house-placeholder-image.jpg";

export const Home = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.banner}>
                <h1 className={styles.banner_header_text}>Check our residence, here at baguio</h1>
                <div className={styles.banner_image_container}>
                    <img src={houseImage} alt="Banner House" />
                </div>
                <h2 className={styles.banner_regular_text}>Logo lets you dream and cream at the same time</h2>
            </div>
            <GetToKnow />
            <SeeAll />
            <FrequentQuestions />
        </div>
    );
};

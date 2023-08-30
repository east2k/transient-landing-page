import { Banner } from "../../components/Banner/Banner";
import { GetToKnow } from "../../components/GetToKnow/GetToKnow";
import { SeeAll } from "../../components/SeeAll/SeeAll";
import styles from "./Home.module.css";

export const Home = () => {
    return (
        <div className={styles.Home}>
            <Banner />
            <GetToKnow />
            <SeeAll />
        </div>
    );
};

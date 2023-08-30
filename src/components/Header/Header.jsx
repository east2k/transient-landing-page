import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export const Header = () => {
    return (
        <div className={styles.Header}>
            <h1 className={styles.header_logo}>Logo</h1>
            <ul className={styles.navbar}>
                <li className={styles.navbar_link + " " + styles.active}>
                    <Link to="/">Home</Link>
                </li>
                <li className={styles.navbar_link}>
                    <Link to="/about-us">About Us</Link>
                </li>
                <li className={styles.navbar_link}>
                    <Link to="/project">Project</Link>
                </li>
                <li className={styles.navbar_link}>
                    <Link to="/type">Type</Link>
                </li>
                <li className={styles.navbar_link}>
                    <Link to="/contact-us">Contact Us</Link>
                </li>
            </ul>
        </div>
    );
};

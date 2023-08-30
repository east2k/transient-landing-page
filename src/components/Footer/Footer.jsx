import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

import styles from "./Footer.module.css";

export const Footer = () => {
    return (
        <footer className={styles.Footer}>
            <div className={styles.footer_content}>
                <h1 className={styles.footer_logo}>LOGO</h1>
                <ul className={styles.navbar}>
                    <li className={styles.navbar_link}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={styles.navbar_link}>
                        <Link to="/about-us">About Us</Link>
                    </li>
                    <li className={styles.navbar_link}>
                        <Link to="/project">Project</Link>
                    </li>
                </ul>
                <ul className={styles.navbar}>
                    <li className={styles.navbar_link}>
                        <Link to="/type">Type</Link>
                    </li>
                    <li className={styles.navbar_link}>
                        <Link to="/contact-us">Contact Us</Link>
                    </li>
                </ul>
                <div className={styles.social_links_list}>
                    <a className={styles.social_link} href="#">
                        <Icon icon="ant-design:facebook-filled" />
                    </a>
                    <a className={styles.social_link} href="#">
                        <Icon icon="ri:instagram-fill" />
                    </a>
                    <a className={styles.social_link} href="#">
                        <Icon icon="mdi:twitter" />
                    </a>
                </div>
            </div>
            <p className={styles.copyright_text}>&copy; Christian Estoque</p>
        </footer>
    );
};

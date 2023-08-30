import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

export const Header = () => {
    const linkList = [
        {
            linkPath: "/",
            linkName: "Home",
        },
        {
            linkPath: "/about-us",
            linkName: "About Us",
        },
        {
            linkPath: "/rooms",
            linkName: "Rooms",
        },
        {
            linkPath: "/type",
            linkName: "Questions",
        },
        {
            linkPath: "/contact-us",
            linkName: "Contact Us",
        },
    ];

    const newLinkList = linkList.map((item, index) => {
        return (
            <li key={index} className={styles.navbar_link}>
                <NavLink
                    className={({ isActive }) => (isActive ? styles.active : "")}
                    to={item.linkPath}
                >
                    {item.linkName}
                </NavLink>
            </li>
        );
    });

    return (
        <header className={styles.Header}>
            <h1 className={styles.header_logo}>Logo</h1>
            <ul className={styles.navbar}>{newLinkList}</ul>
        </header>
    );
};

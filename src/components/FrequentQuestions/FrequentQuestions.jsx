import { Link } from "react-router-dom";
import styles from "./FrequentQuestions.module.css";
import { Icon } from "@iconify/react";
import { useState } from "react";

import googleImage from "../../assets/images/home/google-map.png";

export const FrequentQuestions = () => {
    const [activeQuestion, setActiveQuestion] = useState("");

    const handleExpandQuestion = (name) => {
        setActiveQuestion((prevName) => {
            if (name === prevName) return "";
            else return name;
        });
    };

    console.log(activeQuestion);

    const questionList = [
        {
            questionName: "Where Placeholder Question?",
            questionAnswer:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet mollitia ducimus repudiandaein, est ipsa perspiciatis dicta optio dignissimos unde consectetur dolorum! Cupiditatequaerat ipsa repudiandae porro! Inventore, architecto aspernatur.",
        },
        {
            questionName: "What Placeholder Question?",
            questionAnswer:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet mollitia ducimus repudiandaein, est ipsa perspiciatis dicta optio dignissimos unde consectetur dolorum! Cupiditatequaerat ipsa repudiandae porro! Inventore, architecto aspernatur.",
        },
        {
            questionName: "When Placeholder Question?",
            questionAnswer:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet mollitia ducimus repudiandaein, est ipsa perspiciatis dicta optio dignissimos unde consectetur dolorum! Cupiditatequaerat ipsa repudiandae porro! Inventore, architecto aspernatur.",
        },
        {
            questionName: "How Placeholder Question?",
            questionAnswer:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet mollitia ducimus repudiandaein, est ipsa perspiciatis dicta optio dignissimos unde consectetur dolorum! Cupiditatequaerat ipsa repudiandae porro! Inventore, architecto aspernatur.",
        },
    ];

    const newQuestionList = questionList.map((item, index) => {
        return (
            <div
                key={index}
                onClick={() => handleExpandQuestion(item.questionName)}
                className={`${styles.question_item} ${
                    activeQuestion === item.questionName ? styles.active_question : ""
                }`}
            >
                <h2 className={styles.question_name}>{item.questionName}</h2>
                <p className={styles.question_answer}>{item.questionAnswer}</p>
            </div>
        );
    });

    return (
        <section className={styles.FrequentQuestions}>
            <div className={styles.section_content}>
                <div className={styles.section_label}>
                    <h1 className={styles.label_header}>Frequently Asked Questions</h1>
                    <div className={styles.more_info}>
                        <p>If you have more questions</p>
                        <Link className={styles.more_info_button} to="/">
                            Click Me <Icon icon="eva:diagonal-arrow-right-up-fill" />
                        </Link>
                    </div>
                </div>
                <div className={styles.questions_container}>{newQuestionList}</div>
            </div>
            <div className={styles.contact_info}>
                <div className={styles.contact_list_container}>
                    <h1 className={styles.contact_header_label}>Our contact information</h1>
                    <div className={styles.contact_item}>
                        <h2 className={styles.contact_item_name}>Contact Info 1</h2>
                        <p>+ 0918 020 0202</p>
                    </div>
                    <div className={styles.contact_item}>
                        <h2 className={styles.contact_item_name}>Contact Info 2</h2>
                        <p>placeholder@gmail.com</p>
                    </div>
                    <div className={styles.contact_item}>
                        <h2 className={styles.contact_item_name}>Contact Info 3</h2>
                        <p>Baguio City Benguet</p>
                    </div>
                    <div className={styles.contact_item}>
                        <h2 className={styles.contact_item_name}>Contact Info 4</h2>
                        <p>Placeho L. Derman</p>
                    </div>
                    <div className={styles.more_info + " " + styles.contact}>
                        <Link className={styles.more_info_button + " " + styles.contact} to="/">
                            More Info <Icon icon="eva:diagonal-arrow-right-up-fill" />
                        </Link>
                    </div>
                </div>
                <div className={styles.location_image_container}>
                    <img src={googleImage} alt="Google Location" />
                </div>
            </div>
        </section>
    );
};

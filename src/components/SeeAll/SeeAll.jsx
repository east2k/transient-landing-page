import { Link } from "react-router-dom";
import styles from "./SeeAll.module.css";
import { Icon } from "@iconify/react";

import room_image from "../../assets/images//home/room-1.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export const SeeAll = () => {
    const caroselItem = [
        {
            itemName: "Hanging Bed",
            itemDescription: "Minimalist house with futuristic decoration and finishing suitable for your small family",
            itemLink: "/",
            itemImage: room_image,
        },
        {
            itemName: "King Size Bed",
            itemDescription: "Minimalist house with futuristic decoration and finishing suitable for your small family",
            itemLink: "/",
            itemImage: room_image,
        },
        {
            itemName: "Three Bedroom",
            itemDescription: "Minimalist house with futuristic decoration and finishing suitable for your small family",
            itemLink: "/",
            itemImage: room_image,
        },
    ];

    const caroselItemElement = caroselItem.map((item, index) => {
        return (
            <SwiperSlide key={index}>
                <div className={styles.carosel_item}>
                    <h1 className={styles.carosel_item_name}>
                        {index + 1}. {item.itemName}
                    </h1>
                    <div className={styles.carosel_item_subtitle}>
                        <p className={styles.carosel_description}>{item.itemDescription}</p>
                        <Link className={styles.carosel_button} to={item.itemLink}>
                            See Details <Icon icon="eva:diagonal-arrow-right-up-fill" />
                        </Link>
                    </div>
                    <div className={styles.carosel_image_container}>
                        <img src={item.itemImage} alt="Room" />
                    </div>
                </div>
            </SwiperSlide>
        );
    });

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
                    <Swiper
                        centeredSlides={false}
                        slidesPerView={2}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        navigation={true}
                        modules={[Autoplay, Navigation]}
                    >
                        {caroselItemElement}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

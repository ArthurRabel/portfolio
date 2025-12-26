import { motion as Motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { FeedbackCard } from "./FeedbackCard/FeedbackCard";
import { textBlur } from "../../utils/animationsMotion/blurTextAnimation";

import "./Feedback.css";

export const Feedback = () => {
    const { t } = useTranslation();

    return (
        <section id="feedback" className="feedback">
            <div className="feedback__wrapper">
                <Motion.h2
                    className="feedback__title shiny-title"
                    variants={textBlur(0.2)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                >
                    {t("feedback.title")}
                </Motion.h2>
                <Motion.p
                    className="feedback__subtitle"
                    variants={textBlur(0.2)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                >
                    {t("feedback.subtitle")}
                </Motion.p>

                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={15}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: true,
                        pauseOnMouseEnter: true
                    }}
                    breakpoints={{
                        1210: {
                            slidesPerView: 2,
                        }
                    }}
                >
                    {t("feedback.items", { returnObjects: true }).map((item, index) => (
                        <SwiperSlide key={index}>
                            <FeedbackCard
                                name={item.name}
                                role={item.role}
                                feedback={item.feedback}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}
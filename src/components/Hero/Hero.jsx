import { motion as Motion } from "motion/react";
import { useTranslation } from "react-i18next";

import { textBlur } from "../../utils/animationsMotion/blurTextAnimation";

import "./Hero.css";

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="hero">
      <div className="hero__container">
        <Motion.h1
          className="hero__text hero__text--name shiny-title"
          variants={textBlur(0.3)}
          initial="hidden"
          animate="visible"
        >
          {t("hero.name")}
        </Motion.h1>
        <Motion.h2
          className="hero__text"
          variants={textBlur(0.6)}
          initial="hidden"
          animate="visible"
        >
          {t("hero.role")}
        </Motion.h2>
        <Motion.a
          className="hero__button"
          variants={textBlur(0.9)}
          initial="hidden"
          animate="visible"
          href="/Curriculo-arthur.pdf"
          download="Curriculo-arthur.pdf"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-down-to-line-icon lucide-arrow-down-to-line">
            <path d="M12 17V3" /><path d="m6 11 6 6 6-6" /><path d="M19 21H5" />
          </svg>
          {t("hero.curriculum")}
        </Motion.a>
      </div>
    </div>
  )
}
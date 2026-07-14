import { motion as Motion } from "motion/react";
import { useTranslation } from "react-i18next";

import { textBlur } from "../../utils/animationsMotion/blurTextAnimation";

import "./Hero.css";

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="hero">
      <div className="hero__container">
        <Motion.p
          className="hero__eyebrow"
          variants={textBlur(0.1)}
          initial="hidden"
          animate="visible"
        >
          {t("hero.eyebrow")}
        </Motion.p>
        <Motion.h1
          className="hero__name shiny-title"
          variants={textBlur(0.3)}
          initial="hidden"
          animate="visible"
        >
          {t("hero.name")}
        </Motion.h1>
        <Motion.p
          className="hero__description"
          variants={textBlur(0.6)}
          initial="hidden"
          animate="visible"
        >
          {t("hero.role")}
        </Motion.p>
        <Motion.a
          className="hero__button"
          variants={textBlur(0.9)}
          initial="hidden"
          animate="visible"
          href="/Curriculo-arthur.pdf"
          download="Curriculo-arthur.pdf"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-down-to-line-icon lucide-arrow-down-to-line">
            <path d="M12 17V3" /><path d="m6 11 6 6 6-6" /><path d="M19 21H5" />
          </svg>
          {t("hero.curriculum")}
        </Motion.a>
        <Motion.div
          className="hero__footer"
          variants={textBlur(1.1)}
          initial="hidden"
          animate="visible"
        >
          <div className="hero__divider"></div>
          <div className="hero__footer-row">
            <span className="hero__location">{t("hero.location")}</span>
            <span className="hero__updated">
              {t("hero.updatedLabel")} — {t("hero.updatedDate")}
            </span>
          </div>
        </Motion.div>
      </div>
    </div>
  )
}

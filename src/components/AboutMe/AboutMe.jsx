import { motion as Motion } from "motion/react";
import { useTranslation } from "react-i18next";

import { TechCard } from "./TechCard/TechCard";
import { textBlur } from "../../utils/animationsMotion/blurTextAnimation";
import { divTransition } from "../../utils/animationsMotion/divTransition";

import "./AboutMe.css";

export const AboutMe = () => {
  const { t } = useTranslation();

  const frontEndTech = ["Nextjs", "React", "Tailwind", "JavaScript", "CSS", "HTML", "TypeScript"];
  const backEndTech = ["Nestjs", "Prisma", "Node.js", "Fastapi", "Alembic", "Python", "SQL"];
  const infraTech = ["Podman", "Docker", "AWS", "Kubernetes", "Linux", "Nginx"];

  return (
    <div
      id="about-me"
      className="about-me"
    >
      <Motion.div
        variants={divTransition(0.2)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="about-me__container"
      >
        <div className="about-me__texts">
          <Motion.p
            className="about-me__section-title"
            variants={textBlur(0.4)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            {t("aboutMe.title")}
          </Motion.p>
          <Motion.h3
            className="about-me__heading"
            variants={textBlur(0.4)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            {t("aboutMe.subtitle")}
          </Motion.h3>
          <Motion.p
            className="about-me__paragraph"
            variants={textBlur(0.6)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            {t("aboutMe.description1")}
          </Motion.p>
          <Motion.p
            className="about-me__paragraph"
            variants={textBlur(0.8)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            {t("aboutMe.description2")}
          </Motion.p>
        </div>

        <div className="about-me__tech">
          <TechCard
            title={t("aboutMe.tech.frontend")}
            techList={frontEndTech}
            delay={0.8}
          />
          <TechCard
            title={t("aboutMe.tech.backend")}
            techList={backEndTech}
            delay={1}
          />
          <TechCard
            title={t("aboutMe.tech.devops")}
            techList={infraTech}
            delay={1.2}
          />
        </div>
      </Motion.div>
    </div>
  );
};
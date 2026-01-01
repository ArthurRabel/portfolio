import { motion as Motion } from "motion/react";
import { useTranslation } from "react-i18next";

import { ExperienceCard } from "./ExperienceCard/ExperienceCard";
import { textBlur } from "../../utils/animationsMotion/blurTextAnimation";

import "./Experiences.css";

export const Experiences = () => {
  const { t } = useTranslation();

  const translatedExperienceItems = t("experiences.items", { returnObjects: true });
  const experienceItems = Array.isArray(translatedExperienceItems) ? translatedExperienceItems : [];

  return (
    <section id="experiences" className="experiences">
      <div className="experiences__wrapper">
        <div>
          <Motion.h3
            className="experiences__title shiny-title"
            variants={textBlur(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            {t("experiences.title")}
          </Motion.h3>

          <Motion.p
            className="experiences__subtitle"
            variants={textBlur(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            {t("experiences.subtitle")}
          </Motion.p>
        </div>

        <div className="experiences__list">
          {experienceItems.map((experienceItem, experienceIndex) => (
            <ExperienceCard
              key={experienceIndex}
              title={experienceItem.title}
              company={experienceItem.company}
              date={experienceItem.date}
              description={experienceItem.description}
              icon={experienceItem.icon}
              tasks={experienceItem.tasks}
              tech={experienceItem.tech}
              accessUrl={experienceItem.accessUrl}
              isLast={experienceIndex === experienceItems.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
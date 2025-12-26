import { motion as Motion } from "motion/react";
import { useTranslation } from "react-i18next";

import { divTransition } from "../../../utils/animationsMotion/divTransition";

import "./Experiencecard.css";

export const ExperienceCard = ({
  title,
  company,
  date,
  description,
  backgroundImage,
  tasks,
  accessUrl = null,
}) => {
  const { t } = useTranslation();
  const cardStyle = backgroundImage
    ? { backgroundImage: `url(${backgroundImage})` }
    : undefined;
  return (
    <div
      className="experience-card"
    >
      <div className="experience-card__timeline">
        <span className="experience-card__timeline-date">{date}</span>
        <div className="experience-card__timeline-line"></div>
      </div>

      <Motion.div
        variants={divTransition(0.4)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="experience-card__body">
        <div className="experience-card__content">
          <p className="experience-card__title">{title}</p>
          <p className="experience-card__company-date">
            {company}&nbsp;
            <span className="experience-card__date mobile-only">{date}</span>
          </p>
          <p className="experience-card__description">{description}</p>
          {Array.isArray(tasks) && tasks.length > 0 && (
            <ul className="experience-card__tasks">
              {tasks.map((task, index) => (
                <li key={`${task}-${index}`}>{task}</li>
              ))}
            </ul>
          )}
        </div>
        <div
          className="experience-card__media"
          style={cardStyle}
        >
          {accessUrl &&
            <a
              href={accessUrl}
              className="experience-card__link"
              target="_blank"
              rel="noreferrer"
            >
              {t("experienceCard.viewMore")}
            </a>
          }
        </div>
      </Motion.div>
    </div >
  );
};
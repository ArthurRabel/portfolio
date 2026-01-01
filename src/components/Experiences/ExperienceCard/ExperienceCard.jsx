import { motion as Motion } from "motion/react";

import { divTransition } from "../../../utils/animationsMotion/divTransition";

import "./ExperienceCard.css";

export const ExperienceCard = ({
  title,
  company,
  date,
  description,
  icon,
  tasks,
  tech,
  isLast = false
}) => {
  return (
    <div
      className="experience-card"
    >
      <div className="experience-card__timeline">
        <span className="experience-card__timeline-date">{date}</span>
        <div className="experience-card__timeline-visual">
          <div className="experience-card__timeline-dot"></div>
          <div className={`experience-card__timeline-line ${isLast ? "experience-card__timeline-line--last" : ""}`}></div>
        </div>
      </div>

      <Motion.div
        variants={divTransition(0.4)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="experience-card__body">
        <div className="experience-card__content">
          <div className="experience-card__header">
            {icon && (
              <img
                src={icon}
                alt={company}
                className="experience-card__logo"
              />
            )}
            <div>
              <p className="experience-card__company-date">
                {company}&nbsp;
                <span className="experience-card__date mobile-only">{date}</span>
              </p>
              <p className="experience-card__title">{title}</p>
            </div>
          </div>
          <p className="experience-card__description">{description}</p>
          {Array.isArray(tech) && tech.length > 0 && (
            <ul className="experience-card__tech-list">
              {tech.map((item, index) => (
                <li key={`${item}-${index}`} className="experience-card__tech-item">{item}</li>
              ))}
            </ul>
          )}
          {Array.isArray(tasks) && tasks.length > 0 && (
            <ul className="experience-card__tasks">
              {tasks.map((task, index) => (
                <li key={`${task}-${index}`}>{task}</li>
              ))}
            </ul>
          )}
        </div>
      </Motion.div>
    </div >
  );
};
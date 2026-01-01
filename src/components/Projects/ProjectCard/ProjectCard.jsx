import { motion as Motion } from "motion/react";
import { divTransition } from "../../../utils/animationsMotion/divTransition";
import "./ProjectCard.css";

export const ProjectCard = ({
  title,
  company,
  date,
  description,
  icon,
  tech,
  tasks,
  accessUrl,
  accessGithubLabel,
  image
}) => {
  return (
    <div className="project-card">
      <Motion.div
        variants={divTransition(0.4)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="project-card__body"
      >
        <img
          src={image}
          alt={`${title} preview`}
          className="project-card__image"
        />
        <div className="project-card__content">
          <div className="project-card__header">
            {icon && (
              <img
                src={icon}
                alt={company}
                className="project-card__logo"
              />
            )}
            <div>
              <p className="project-card__title">{title}</p>
              <p className="project-card__company-date">
                {company}&nbsp;
                <span className="project-card__date">{date}</span>
              </p>
            </div>
          </div>
          <p className="project-card__description">{description}</p>

          {Array.isArray(tech) && tech.length > 0 && (
            <ul className="project-card__tech-list">
              {tech.map((item, index) => (
                <li key={`${item}-${index}`} className="project-card__tech-item">{item}</li>
              ))}
            </ul>
          )}

          {Array.isArray(tasks) && tasks.length > 0 && (
            <ul className="project-card__tasks">
              {tasks.map((task, index) => (
                <li key={`${task}-${index}`}>{task}</li>
              ))}
            </ul>
          )}

          {accessUrl && (
            <a href={accessUrl} target="_blank" rel="noopener noreferrer" className="project-card__link">
              {accessGithubLabel}
            </a>
          )}
        </div>
      </Motion.div>
    </div>
  );
};

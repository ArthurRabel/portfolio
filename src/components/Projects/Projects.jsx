import { useTranslation } from "react-i18next";
import { motion as Motion } from "motion/react";
import { textBlur } from "../../utils/animationsMotion/blurTextAnimation";
import { ProjectCard } from "./ProjectCard/ProjectCard";
import "./Projects.css";

export const Projects = () => {
  const { t } = useTranslation();
  const projectsData = t("projects", { returnObjects: true });
  const projectsList = Array.isArray(projectsData?.items) ? projectsData.items : [];

  return (
    <section id="projects" className="projects">
      <div className="projects__wrapper">
        <Motion.h2
          variants={textBlur}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="projects__title shiny-title"
        >
          {projectsData.title}
        </Motion.h2>
        <Motion.p
          variants={textBlur}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="projects__subtitle"
        >
          {projectsData.subtitle}
        </Motion.p>

        <div className="projects__list">
          {projectsList.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
              accessGithubLabel={projectsData.accessGithub}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

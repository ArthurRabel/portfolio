import { motion as Motion } from "motion/react";

import "./TechCard.css";

export const TechCard = ({ title, techList, delay }) => {
  const variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay
      }
    }
  }

  return (
    <Motion.div
      className="about-me__tech-card"
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <h4><span className="shiny-title">{title}</span></h4>
      <ul>
        {techList.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
    </Motion.div>
  );
}
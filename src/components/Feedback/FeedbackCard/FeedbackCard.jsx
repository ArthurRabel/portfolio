import { motion as Motion } from "motion/react";

import { divTransition } from "../../../utils/animationsMotion/divTransition";

import "./FeedbackCard.css"

export const FeedbackCard = ({ name, role, feedback }) => {
  return (
    <Motion.div
      variants={divTransition(0.4)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      className="feedback-card"
    >
      <div className="feedback-card__info">
        <h4 className="feedback-card__name">{name}</h4>
        <p className="feedback-card__role">{role}</p>
      </div>
      <p className="feedback-card__feedback">{feedback}</p>
    </Motion.div>
  );
}
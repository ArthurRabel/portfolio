import { motion as Motion } from "motion/react";
import { useTranslation } from "react-i18next";

import { Controls } from "../Controls/Controls";
import { SocialIcons } from "../SocialIcons/SocialIcons";
import { textBlur } from "../../utils/animationsMotion/blurTextAnimation";

import "./Header.css";

export const Header = () => {
  const { t } = useTranslation();

  return (
    <div className="header">
      <div className="header__wrapper">
        <SocialIcons />
        <Motion.nav
          className="header__nav"
          variants={textBlur(0.6)}
          initial="hidden"
          animate="visible"
        >
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <a href="#about-me" className="header__nav-link">
                {t("navigation.sections.about")}
              </a>
            </li>
            <li className="header__nav-item">
              <a href="#experiences" className="header__nav-link">
                {t("navigation.sections.experiences")}
              </a>
            </li>
            <li className="header__nav-item">
              <a href="#feedback" className="header__nav-link">
                {t("navigation.sections.feedback")}
              </a>
            </li>
          </ul>
        </Motion.nav>
        <Controls />
      </div>
    </div>
  );
};

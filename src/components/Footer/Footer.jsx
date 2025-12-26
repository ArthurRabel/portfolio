import { useTranslation } from "react-i18next"
import { SocialIcons } from "../SocialIcons/SocialIcons"

import './Footer.css'

export const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__helpers">
          <div className="footer__nav">
            <ul className="footer__nav-list">
              <li className="footer__nav-item">
                <a href="#about-me" className="footer__nav-link">
                  {t("navigation.sections.about")}
                </a>
              </li>
              <li className="footer__nav-item">
                <a href="#experiences" className="footer__nav-link">
                  {t("navigation.sections.experiences")}
                </a>
              </li>
              <li className="footer__nav-item">
                <a href="#feedback" className="footer__nav-link">
                  {t("navigation.sections.feedback")}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <SocialIcons />
            <p>{t("footer.rights", { year: new Date().getFullYear() })}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
import { useTranslation } from 'react-i18next';

import { useTheme } from '../../contexts/ThemeContext';
import { ToggleSwitch } from '../ToggleSwitch/ToggleSwitch';

import './Control.css';

const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4"/>
    <path d="M12 2v2"/>
    <path d="M12 20v2"/>
    <path d="m4.93 4.93 1.41 1.41"/>
    <path d="m17.66 17.66 1.41 1.41"/>
    <path d="M2 12h2"/>
    <path d="M20 12h2"/>
    <path d="m6.34 17.66-1.41 1.41"/>
    <path d="m19.07 4.93-1.41 1.41"/>
  </svg>
);

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/>
  </svg>
);

export const Controls = () => {
  const { i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const toggleLanguage = () => {
    const newLang = i18n.language === 'pt' ? 'en' : 'pt';
    i18n.changeLanguage(newLang);
  };

  return (
    <div className='Controls'>
      <ToggleSwitch
        leftLabel="PT"
        rightLabel="EN"
        checked={i18n.language === 'en'}
        onChange={toggleLanguage}
        ariaLabel="Alternar idioma"
      />
      <ToggleSwitch
        leftLabel={<SunIcon />}
        rightLabel={<MoonIcon />}
        checked={theme === 'dark'}
        onChange={toggleTheme}
        ariaLabel="Alternar tema"
      />
    </div>
  );
};

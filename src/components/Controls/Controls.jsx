import { useTranslation } from 'react-i18next';

import { useTheme } from '../../contexts/ThemeContext';
import { ToggleSwitch } from '../ToggleSwitch/ToggleSwitch';

import './Control.css';

export const Controls = () => {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const toggleLanguage = () => {
    const newLang = i18n.language === 'pt' ? 'en' : 'pt';
    i18n.changeLanguage(newLang);
  };

  return (
    <div className='Controls'>
      <ToggleSwitch
        leftLabel="Português"
        rightLabel="English"
        checked={i18n.language === 'en'}
        onChange={toggleLanguage}
        ariaLabel="Alternar idioma"
      />
      <ToggleSwitch
        leftLabel={t('header.controls.light')}
        rightLabel={t('header.controls.dark')}
        checked={theme === 'dark'}
        onChange={toggleTheme}
        ariaLabel="Alternar tema"
      />
    </div>
  );
};

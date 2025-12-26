import "./ToggleSwitch.css";

export const ToggleSwitch = ({ leftLabel, rightLabel, checked, onChange, ariaLabel }) => {
  return (
    <div className="toggle-switch">
      <span className="toggle-switch__label">{leftLabel}</span>
      <label className="toggle-switch__wrapper">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          aria-label={ariaLabel}
          className="toggle-switch__input"
        />
        <span className="toggle-switch__slider"></span>
      </label>
      <span className="toggle-switch__label">{rightLabel}</span>
    </div>
  );
};

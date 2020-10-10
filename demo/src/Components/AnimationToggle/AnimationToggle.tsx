import React from 'react';
import './AnimationToggle.scss';

type OptionProps = {
  isEnabled: boolean;
  setEnabled: (boolean) => {};
  type: string;
};

const AnimationToggle = ({ isEnabled, setEnabled, type }: OptionProps) => {
  const handleAnimationChange = () => {
    setEnabled(!isEnabled);
  };

  const clickedButton = { color: 'beige', backgroundColor: '#ad9d9d' };

  return (
    <button
      className="toggle-button"
      onClick={handleAnimationChange}
      style={isEnabled ? clickedButton : undefined}
      id={type}
    >
      {isEnabled ? 'ON' : 'OFF'}
    </button>
  );
};

export default AnimationToggle;

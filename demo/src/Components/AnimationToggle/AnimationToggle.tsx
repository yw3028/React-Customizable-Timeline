import React, { useState } from 'react';
import './AnimationToggle.scss';

type OptionProps = {
  isAnimated: boolean;
};

const AnimationToggle: React.FC<OptionProps> = ({ isAnimated }) => {
  const [animation, setAnimation] = useState(isAnimated);
  const handleAnimationChange = () => {
    setAnimation(!isAnimated);
  };

  const clickedButton = { color: 'beige', backgroundColor: '#ad9d9d' };

  return (
    <button
      className="toggle-button"
      onClick={handleAnimationChange}
      style={animation ? undefined : clickedButton}
    >
      {animation ? 'ON' : 'OFF'}
    </button>
  );
};

export default AnimationToggle;

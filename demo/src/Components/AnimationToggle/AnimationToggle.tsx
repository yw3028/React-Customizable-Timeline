import React, { useState } from 'react';
import './AnimationToggle.scss';

type OptionProps = {
  isAnimated: boolean;
};

const AnimationToggle = ({ isAnimated }) => {
  console.log(isAnimated);
  const [animation, setAnimation] = useState(isAnimated);

  const handleAnimationChange = () => {
    setAnimation(!animation);
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

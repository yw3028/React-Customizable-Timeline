import React from 'react';
import './AnimationToggle.scss';

type OptionProps = {
    animation: boolean;
    setAnimation: any;
};

const AnimationToggle: React.FC<OptionProps> = ({ animation, setAnimation }) => {
    const handleAnimationChange = () => {
        setAnimation(!animation);
    };

    const clickedButton = { color: 'beige', backgroundColor: '#ad9d9d' };

    return (
        <button className="toggle-button" onClick={handleAnimationChange} style={animation ? undefined : clickedButton}>
            {animation ? 'ON' : 'OFF'}
        </button>
    );
};

export default AnimationToggle;

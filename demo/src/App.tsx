import React, { useState } from 'react';
import OptionForm from './Components/OptionForm/OptionForm';
import Timeline from 'react-customizable-timeline';
import data from './data';

import './App.scss';

const defaultColors = {
  primaryColor: '#625261',
  secondaryColor: '#F5F5DC',
  backgroundColor: '#FFFFFF',
};

const defaultShapes = {
  titleShape: 'diamond',
  dotShape: 'circle',
  lineShape: 'dotted',
};

const App = () => {
  const [colors, setColors] = useState(defaultColors);
  const [shapes, setShapes] = useState(defaultShapes);
  const [font, setFont] = useState('Chivo');
  const [animation, setAnimation] = useState(true);
  const [position, setPosition] = useState(true);

  return (
    <div className="demo">
      <div className="timeline" style={{ backgroundColor: colors.backgroundColor }}>
        <Timeline
          data={data}
          primaryDarkColor={colors.primaryColor}
          primaryLightColor={colors.secondaryColor}
          titleShape={shapes.titleShape}
          dotShape={shapes.dotShape}
          lineStyle={shapes.lineShape}
          primaryFont={font}
          animation={animation}
          position={position}
        />
      </div>
      <div className="customization">
        <OptionForm
          colors={colors}
          setColors={setColors}
          shapes={shapes}
          setShapes={setShapes}
          font={font}
          setFont={setFont}
          animation={animation}
          setAnimation={setAnimation}
          position={position}
          setPosition={setPosition}
        />
      </div>
    </div>
  );
};

export default App;

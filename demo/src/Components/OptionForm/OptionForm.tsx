import React from 'react';
import './OptionForm.scss';

import ColorPicker from '../ColorPicker/ColorPicker';
import ShapeButton from '../ShapeButton/ShapeButton';
import FontSelector from '../FontSelector/FontSelector';
import CodeSnippet from '../CodeSnippet/CodeSnippet';
import AnimationToggle from '../AnimationToggle/AnimationToggle';

type OptionProps = {
  colors: Colors;
  setColors: any;
  shapes: Shapes;
  setShapes: any;
  font: string;
  setFont: any;
  animation: boolean;
  setAnimation: any;
  position: boolean;
  setPosition: any;
};

type Colors = {
  primaryColor: string;
  secondaryColor: string;
};

type Shapes = {
  titleShape: string;
  dotShape: string;
  lineShape: string;
};

const OptionForm: React.FC<OptionProps> = ({
  colors,
  setColors,
  shapes,
  setShapes,
  font,
  setFont,
  animation,
  setAnimation,
  position,
  setPosition,
}) => {
  return (
    <div className="options">
      <h1>Customization</h1>
      <p>Basic customization through the component's props and CSS custom-properties.</p>
      <section>
        <div className="animation">
          <h2>Animation</h2>
          <AnimationToggle isEnabled={animation} setEnabled={setAnimation} type="animation" />
        </div>
        <div className="position">
          <h2>Title Sticky</h2>
          <AnimationToggle isEnabled={position} setEnabled={setPosition} type="position" />
        </div>
      </section>
      <div className="color">
        <h2>Colors</h2>
        <ColorPicker colors={colors} setColors={setColors} />
      </div>
      <div className="font">
        <h2>Font</h2>
        <FontSelector setFont={setFont} />
      </div>
      <div className="shapes">
        <h2>Shapes</h2>
        <ShapeButton shapes={shapes} setShapes={setShapes} />
      </div>
      <div className="code">
        <h2>Grab Your Component</h2>
        <CodeSnippet
          colors={colors}
          font={font}
          shapes={shapes}
          animation={animation}
          position={position}
        />
      </div>
    </div>
  );
};

export default OptionForm;

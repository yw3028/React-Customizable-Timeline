import React, { useEffect } from 'react';
import Prism from 'prismjs';
import './prism.css';

type OptionProps = {
  colors: Colors;
  font: string;
  shapes: Shapes;
  animation: boolean;
  position: boolean;
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

const CodeSnippet: React.FC<OptionProps> = ({ colors, font, shapes, animation, position }) => {
  useEffect(() => {
    Prism.highlightAll();
  });

  return (
    <pre>
      <code className="language-javascript">
        {`<Timeline
  data={data}
  primaryDarkColor='${colors.primaryColor}' 
  primaryLightColor='${colors.secondaryColor}' 
  titleShape='${shapes.titleShape}' 
  dotShape='${shapes.dotShape}' 
  lineStyle='${shapes.lineShape}' 
  primaryFont='${font}' 
  animation={${animation}}
  position=${position ? `'sticky'` : `'relative'`}
/>`}
      </code>
    </pre>
  );
};

export default CodeSnippet;

import React, { MouseEvent } from 'react';
import './ShapeButton.scss';

type OptionProps = {
  shapes: Shapes;
  setShapes: any;
};

type Shapes = {
  [key: string]: string;
};

const shapeButtons: ShapeButtons = {
  titleShape: ['circle', 'square', 'rectangular', 'diamond'],
  dotShape: ['circle', 'square', 'line', 'diamond'],
  lineShape: ['solid', 'dotted', 'dashed', 'hidden'],
};

type ShapeButtons = {
  [key: string]: string[];
};

<<<<<<< HEAD
const ShapeButton = ({ shapes, setShapes }: OptionProps) => {
=======
const ShapeButton: React.FC<OptionProps> = ({ shapes, setShapes }) => {
>>>>>>> 2236a41f07ef9750cb2a69e1012cea9feed61977
  const handleShapeChange = (event: MouseEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    setShapes((shapes: any) => ({ ...shapes, [name]: value }));
  };

  return (
    <>
      {Object.keys(shapes).map(shape => (
        <div key={shape}>
          <h4> {shape[0].toUpperCase() + shape.slice(1).replace('Shape', ' Shape')} </h4>
          <div className="shapes_selection">
            {shapeButtons[shape]?.map(button => (
              <div key={shape + button}>
                <input
                  type="radio"
                  id={shape + button}
                  value={button}
                  onClick={handleShapeChange}
                  name={shape}
<<<<<<< HEAD
=======
                  checked={shapes[shape] === button}
>>>>>>> 2236a41f07ef9750cb2a69e1012cea9feed61977
                />
                <label htmlFor={shape + button}>{button.toUpperCase()}</label>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default ShapeButton;

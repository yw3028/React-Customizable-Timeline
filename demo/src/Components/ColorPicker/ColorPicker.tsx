import React, { ChangeEvent, MouseEvent } from 'react';
import './ColorPicker.scss';

type OptionProps = {
    colors: Colors;
    setColors: any;
};

type Colors = {
    [key: string]: string;
};

const ColorPicker: React.FC<OptionProps> = ({ colors, setColors }) => {
    const handleColorChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setColors((colors: Colors) => ({ ...colors, [name]: value }));
    };

    const setTransparency = (event: MouseEvent<HTMLButtonElement>) => {
        const { name } = event.currentTarget;
        setColors((colors: Colors) => ({ ...colors, [name]: 'transparent' }));
    };

    return (
        <div className="color_section">
            {Object.keys(colors).map((color) => (
                <div key={color} className="color_section_colors">
                    <h4> {color[0].toUpperCase() + color.slice(1).replace('Color', '')} </h4>
                    <div style={{ display: 'flex' }}>
                        <input onChange={handleColorChange} type="color" value={colors[color]} name={color} />
                        <button className="button-transparent" name={color} onClick={setTransparency} />
                    </div>
                    <input
                        className="hex-code"
                        onChange={handleColorChange}
                        type="text"
                        value={colors[color]}
                        placeholder={colors[color]}
                        name={color}
                    />
                </div>
            ))}
        </div>
    );
};

export default ColorPicker;

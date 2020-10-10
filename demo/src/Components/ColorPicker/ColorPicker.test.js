import { cleanup, render, screen } from '@testing-library/react';
import React from 'react';

import ColorPicker from './ColorPicker';

const renderComponent = (colors, setColors) =>
  render(<ColorPicker colors={colors} setColors={setColors} />);

afterEach(() => {
  cleanup();
});

describe('ColorPicker component', () => {
  it('renders correctly', () => {
    const component = renderComponent(defaultColors);
    expect(component.baseElement).toMatchSnapshot();
  });
});

const defaultColors = {
  primaryColor: '#625261',
  secondaryColor: '#F5F5DC',
  backgroundColor: '#FFFFFF',
};

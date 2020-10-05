import { cleanup, render, screen } from '@testing-library/react';
import React from 'react';

import CodeSnippet from './CodeSnippet';

const renderComponent = (colors, font, shapes, animation) =>
  render(<CodeSnippet colors={colors} font={font} shapes={shapes} animation={animation} />);

describe('AnimationToggle component', () => {
  afterEach(() => {
    cleanup();
  });

  test('render correctly', () => {
    const component = renderComponent(defaultColors, 'chivo', defaultShapes, true);
    expect(component.baseElement).toMatchSnapshot();
  });

  it("Doesn't render children elements", () => {
    render(
      <CodeSnippet colors={defaultColors} font={'chivo'} shapes={defaultShapes} animation={false}>
        <p>LisaPisa</p>
      </CodeSnippet>,
    );

    expect(screen.queryByText(/LisaPisa/i)).toBeFalsy();
  });
});

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

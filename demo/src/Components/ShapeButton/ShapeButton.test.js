import { cleanup, render, screen } from '@testing-library/react';
import React from 'react';
import ShapeButton from './ShapeButton';

const renderComponent = shapes => render(<ShapeButton shapes={shapes} />);

describe('ShapeButton Component', () => {
  afterEach(() => {
    cleanup();
  });

  test('renders correctly', async () => {
    const component = renderComponent(true);
    expect(component.baseElement).toMatchSnapshot();
  });

  it('changes the state', () => {});
});

import { cleanup, render, screen } from '@testing-library/react';
import React from 'react';

import AnimationToggle from './AnimationToggle';

const renderComponent = animation => render(<AnimationToggle animation={animation} />);

describe('AnimationToggle component', () => {
  afterEach(() => {
    cleanup();
  });

  test('render correctly', async () => {
    const component = renderComponent(true);
    expect(component.baseElement).toMatchSnapshot();
  });

  it('Renders the state', async () => {
    renderComponent(true);
    expect(screen.queryByText('ON')).toBeTruthy();
    expect(screen.queryByText('OFF')).toBeFalsy();
    cleanup();
    renderComponent(false);
    expect(screen.queryByText('ON')).toBeFalsy();
    expect(screen.queryByText('OFF')).toBeTruthy();
  });
});

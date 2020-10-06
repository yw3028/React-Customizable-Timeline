import { cleanup, render, screen } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import AnimationToggle from './AnimationToggle';

const renderComponent = animation => render(<AnimationToggle isAnimated={animation} />);

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

  it("Doesn't render children elements", async () => {
    render(
      <AnimationToggle isAnimated={false}>
        <p>LisaPisa</p>
      </AnimationToggle>,
    );

    await expect(screen.queryByText(/LisaPisa/i)).toBeFalsy();
  });

  it('Changes the state', () => {
    renderComponent(true);
    userEvent.click(screen.getByText('ON'));
    expect(screen.getByText('OFF')).toBeTruthy();
  });
});

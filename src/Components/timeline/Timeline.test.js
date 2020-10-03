import { cleanup, render, screen } from '@testing-library/react';
import React from 'react';
import Timeline from './Timeline';
import data from '../mocks/index';
import IntersectionObserver from '../helper/testHelper';

global.IntersectionObserver = IntersectionObserver;

const renderComponent = data => render(<Timeline data={data} />);

afterEach(() => {
  cleanup();
});

test('render correctly', async () => {
  const component = renderComponent(data);
  await expect(component.baseElement).toMatchSnapshot();
});

it('Renders the title', async () => {
  renderComponent(data);
  await expect(screen.getByText('Avengers')).toBeTruthy();
});

// eslint-disable-next-line quotes
it("Doesn't render children elements", async () => {
  render(
    <Timeline data={data}>
      <p>LisaPisa</p>
    </Timeline>,
  );

  await expect(screen.queryByText(/LisaPisa/i)).toBeFalsy();
});

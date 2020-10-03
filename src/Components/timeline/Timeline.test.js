import { cleanup, render, waitFor, screen } from '@testing-library/react';
import React from 'react';
import Timeline from './Timeline';

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

global.IntersectionObserver = class IntersectionObserver {
  constructor() {}

  disconnect() {
    return null;
  }

  observe() {
    return null;
  }

  takeRecords() {
    return null;
  }

  unobserve() {
    return null;
  }
};

const data = [
  {
    title: 'Avengers',
    events: [
      {
        title: 'Avengers:StartGame',
        subtitle: 'StartGame',
        content: 'content',
        location: 'Knowhere',
        label: '#avengers #marvel',
        img: {
          url:
            'https://images.unsplash.com/photo-1600790078201-5490baf711d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
          alt: 'picture',
        },
      },
    ],
  },
];

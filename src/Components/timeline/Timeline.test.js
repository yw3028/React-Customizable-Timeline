import { cleanup, render, waitFor } from '@testing-library/react';
import React from 'react';
import Timeline from './Timeline';

let container;

const renderComponent = data => render(<Timeline data={data} />);

afterEach(() => {
  cleanup();
});

test('render correctly', async () => {
  const component = renderComponent(data);
  await waitFor(() => {
    expect(component.baseElement).toMatchSnapshot();
  });
});

it('Renders the title', async () => {
  const { getByText } = renderComponent(data);
  await waitFor(() => {
    getByText(/Avengers/i);
  });
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
        title: 'EVENT TITLE',
        subtitle: 'EVENT SUBTITLE',
        content: 'CONTENT',
        location: 'LOCATION',
        label: '#LABLE1 #LABLE2',
        img: {
          url:
            'https://images.unsplash.com/photo-1600790078201-5490baf711d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
          alt: 'pic',
        },
      },
    ],
  },
];

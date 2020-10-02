import { cleanup } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import Timeline from './Timeline';

let container;

beforeEach(() => {
  container = document.createElement('div');
  ReactDOM.render(<Timeline />, container);
});

afterEach(() => {
  cleanup();
});

test('render correctly', () => {
  expect(container).toMatchSnapshot();
});

test('Renders the title', () => {});

const data = [
  {
    title: 'TITLE 1',
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

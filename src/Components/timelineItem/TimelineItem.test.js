import React from 'react';
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import TimelineItem from './TimelineItem';

it('matches snapshot', () => {
  const container = document.createElement('div');
  ReactDOM.render(<TimelineItem />, container);
  expect(container).toMatchSnapshot();
});

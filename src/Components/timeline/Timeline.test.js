import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Timeline from './Timeline';

test('render correctly', () => {
  const container = document.createElement('div');
  ReactDOM.render(<Timeline />, container);
  expect(container).toMatchSnapshot();
});

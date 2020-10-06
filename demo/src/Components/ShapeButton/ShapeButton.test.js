import {
  cleanup,
  fireEvent,
  getAllByLabelText,
  getAllByRole,
  render,
  screen,
} from '@testing-library/react';
import React from 'react';
import ShapeButton from './ShapeButton';
import userEvent from '@testing-library/user-event';

const renderComponent = shapes => render(<ShapeButton shapes={shapes} />);

describe('ShapeButton Component', () => {
  afterEach(() => {
    cleanup();
  });

  test('renders correctly', async () => {
    const component = renderComponent(true);
    expect(component.baseElement).toMatchSnapshot();
  });

  test('check radio buttons change', async () => {
    const component = renderComponent(true);
    const componentContainer = screen.getAllByRole(component, 'radio');

    const checkedDefaultButton = componentContainer.filter(el => el.checked);
    expect(checkedDefaultButton.length).toEqual(1);
  });
});

/* eslint-disable no-undef */
import { cleanup, render, screen } from '@testing-library/react';
import React from 'react';
import TimelineItem from './TimelineItem';
import IntersectionObserver from '../helper/testHelper';
import data from '../mocks/index';

global.IntersectionObserver = IntersectionObserver;

const renderComponent = (title, subtitle, content, img, label, location, animation) =>
  render(
    <TimelineItem
      title={title}
      subtitle={subtitle}
      content={content}
      img={img}
      label={label}
      location={location}
      animation={animation}
    />,
  );

afterEach(() => {
  cleanup();
});

describe('TimelineItem component', () => {
  it('renders correctly', async () => {
    const component = renderComponent(
      data[0].events[0].title,
      data[0].events[0].subtitle,
      data[0].events[0].content,
      data[0].events[0].img,
      data[0].events[0].label,
      data[0].events[0].location,
      data[0].events[0].animation,
    );
    await expect(component.baseElement).toMatchSnapshot();
  });

  it("Doesn't render children elements", async () => {
    render(
      <TimelineItem
        title={data[0].events[0].title}
        subtitle={data[0].events[0].subtitle}
        content={data[0].events[0].content}
        img={data[0].events[0].img}
        label={data[0].events[0].label}
        location={data[0].events[0].location}
        animation={data[0].events[0].animation}
      >
        <p>LisaPisa</p>
      </TimelineItem>,
    );

    await expect(screen.queryByText(/LisaPisa/i)).toBeFalsy();
  });

  it('render data correctly', async () => {
    renderComponent(
      data[0].events[0].title,
      data[0].events[0].subtitle,
      data[0].events[0].content,
      data[0].events[0].img,
      data[0].events[0].label,
      data[0].events[0].location,
      data[0].events[0].animation,
    );
    await expect(screen.getByText('Avengers:StartGame')).toBeTruthy();
    await expect(screen.getByText('Knowhere')).toBeTruthy();
  });
});

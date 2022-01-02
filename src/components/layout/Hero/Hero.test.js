import React from 'react';
import { shallow } from 'enzyme';
import Hero from './Hero';

describe('Component Hero', () => {
  it('TEST 28: should render without crashing', () => {
    const component = shallow(<Hero titleText='Lorem ipsum' imageSrc='image' />);
    expect(component).toBeTruthy();
    console.log(component.debug());
  });

  it('TEST 29: should throw error without required props', () => {
    expect(() => shallow(<Hero />)).toThrow();
  });

  it('TEST 30: should render correct title and image', () => {
    const expectedTitle = 'Lorem ipsum';
    const expectedImage = 'image.jpg';
    const component = shallow(<Hero titleText={expectedTitle} imageSrc={expectedImage} />);

    const renderedTitle = component.find('.title').text();
    expect(renderedTitle).toEqual(expectedTitle);
    expect(component.find('.image').prop('src')).toEqual(expectedImage);
  });

  it('TEST 31: renders correct classNames', () => {
    const mockVariants = 'small dummy';
    const component = shallow(<Hero titleText='Lorem' imageSrc='image.jpg' variant={mockVariants} />);
    expect(component.hasClass('component')).toBe(true);
    expect(component.hasClass('small')).toBe(true);
    expect(component.hasClass('dummy')).toBe(true);
  });

  it('TEST 32: should render HappyHourAd', () => {
    const expectedTitle = 'Lorem ipsum';
    const expectedImage = 'image.jpg';
    const component = shallow(<Hero titleText={expectedTitle} imageSrc={expectedImage} />);
  
    expect(component.find('HappyHourAd').length).toEqual(1);
  });
});
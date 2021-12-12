import React from 'react';
import { shallow } from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should generate without crashing', () => {
    const component = shallow(<TripSummary
      id='abd'
      image='imago.jpg'
      name='bobo'
      cost='$200'
      days={7}
      tags={['baba','bebe','lala']}
    />);
    expect(component).toBeTruthy();
  });
  it('should generate right address', () => {
    const expectedAdress = '/trip/abc';
    const expectedId = 'abc';
    const component = shallow(<TripSummary id={expectedId} tags={[]} />);
    expect(component.find('Link').prop('to')).toEqual(expectedAdress);
  });

  it('should render correct alt and image', () => {
    const expectedAlt = 'bob';
    const expectedImage = 'image.jpg';
    const component = shallow(<TripSummary image={expectedImage} name={expectedAlt} tags={[]} />);

    expect(component.find('img').prop('src')).toEqual(expectedImage);
    expect(component.find('img').prop('alt')).toEqual(expectedAlt);
  });

  it('should render correct props: name, cost, days', () => {
    const expectedPropName = 'rainbow';
    const expectedPropCost = '$999';
    const expectedPropDays = 4;
    const component = shallow(<TripSummary name={expectedPropName} days={expectedPropDays} cost={expectedPropCost} tags={[]} />);

    expect(component.find('.title').text()).toEqual(expectedPropName);
    expect(component.find('.details').childAt(0).text()).toEqual(`${expectedPropDays} days`);
    expect(component.find('.details').childAt(1).text()).toEqual(`from ${expectedPropCost}`);
  });

  it('should render correct array in tags', () => {
    const firstElArray = 'biba';
    const secondElArray = 'bobo';
    const thirdElArray = 'lolo';
    const expectedArray = [firstElArray, secondElArray, thirdElArray];
    const component = shallow(<TripSummary tags={expectedArray} />);

    expect(component.find('.tag').at(0).text()).toEqual(expectedArray[0]);
    expect(component.find('.tag').at(1).text()).toEqual(expectedArray[1]);
    expect(component.find('.tag').at(2).text()).toEqual(expectedArray[2]);
    //console.log(component.debug());
  });

  it('should not render tags if tags is not exist', () => {
    const component = shallow(<TripSummary />);

    expect(component.find('.tag').exists()).toEqual(false);
    console.log(component.debug());

    //const voidArray = [];
    //const component = shallow(<TripSummary tags={voidArray} />);       // wersja druga
    //expect(component.exists('.tags')).toEqual(false);

  });
});

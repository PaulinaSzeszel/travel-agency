import React from 'react';
import { shallow } from 'enzyme';
import Phone from './Phone';
import Icon from '../../common/Icon/Icon';

describe('Component Phone', () => {

  it('TEST 100: should render without crashing', () => {
    const component = shallow(<Phone />);

    expect(component).toBeTruthy();

  });

  it('TEST 101: should contain span and icon', () => {
    const component = shallow(<Phone />);
    expect(component.exists('span')).toEqual(true);
    expect(component.exists(Icon)).toEqual(true);

  });

  const trueDate = Date;
  const mockDate = customDate => class extends Date {
    constructor(...args) {
      if (args.length) {
        super(...args);
      } else {
        super(customDate);
      }
      return this;
    }
    static now() {
      return (new Date(customDate)).getTime();
    }
  };


  it(`TEST 102: should show Amanda phone number beetween 8-12 UTC`, () => {
    global.Date = mockDate(`2019-05-14T10:00:01.135Z`);

    const component = shallow(<Phone />);
    expect(component.find('span').text()).toEqual('Amanda, 678.243.8455');

    global.Date = trueDate;
  });

  it(`TEST 103: should show Tobias phone number beetween 12-16 UTC`, () => {
    global.Date = mockDate(`2019-05-14T14:00:01.135Z`);

    const component = shallow(<Phone />);
    expect(component.find('span').text()).toEqual('Tobias, 278.443.6443');

    global.Date = trueDate;
  });

  it(`TEST 104: should show Tobias phone number beetween 16-22 UTC`, () => {
    global.Date = mockDate(`2019-05-14T18:00:01.135Z`);

    const component = shallow(<Phone />);
    expect(component.find('span').text()).toEqual('Helena, 167.280.3970');

    global.Date = trueDate;
  });

  it(`TEST 105: should show Office is closed message`, () => {
    global.Date = mockDate(`2019-05-14T03:00:01.135Z`);

    const component = shallow(<Phone />);
    expect(component.find('span').text()).toEqual('The office opens at 8:00 UTC');

    global.Date = trueDate;
  });

  

});
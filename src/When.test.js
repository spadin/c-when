import React from 'react';
import When from './When';
import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';
import {shallow} from 'enzyme';

chai.use(chaiEnzyme());

describe('<When/>', () => {
  it('renders content when the predicate is true', () => {
    const child = <span>Hello World!</span>;
    const component = shallow(
      <When predicate={true}>
        {child}
      </When>
    );

    expect(component).to.contain(child);
  });

  it('renders nothing when the predicate is false', () => {
    const child = <span>Hello World!</span>;
    const component = shallow(
      <When predicate={false}>
        {child}
      </When>
    )
    expect(component).to.be.empty;
  });
});

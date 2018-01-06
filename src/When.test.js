import React from 'react';
import When from './When';
import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import {shallow} from 'enzyme';

chai.use(chaiEnzyme());
chai.use(sinonChai);

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

  it('invokes the function passed in as the child', () => {
    const spy = sinon.spy(() => (null));

    shallow(
      <When predicate={true}>
        {spy}
      </When>
    );

    expect(spy).to.have.been.called;
  });

  it('invokes the function passed in as the child', () => {
    const child = <span>Hello World!</span>;
    const spy = sinon.spy(() => (child));
    const component = shallow(
      <When predicate={true}>
        {spy}
      </When>
    );

    expect(component).to.contain(child);
  });

  it('renders return value from render function if passed in', () => {
    const child = <span>Content from a render function</span>;
    const component = shallow(
      <When
        predicate={true}
        render={() => (child)}
      />
    );

    expect(component).to.contain(child);
  });
});

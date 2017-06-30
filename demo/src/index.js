import React from 'react'
import When from '../../src'
import {render} from 'react-dom'


const Demo = () => (
  <div>
    <When predicate={true}>
      <span>This should display</span>
    </When>
    <When predicate={false}>
      <span>This should not display</span>
    </When>
  </div>
);

render(<Demo/>, document.querySelector('#demo'))

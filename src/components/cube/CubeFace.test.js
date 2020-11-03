import React from 'react';
import ReactDOM from 'react-dom';
import CubeFace from './CubeFace';

it('SMOKE TEST: CubeFace component', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CubeFace />, div);
  ReactDOM.unmountComponentAtNode(div);
});

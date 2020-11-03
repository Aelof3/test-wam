import React from 'react';
import ReactDOM from 'react-dom';
import Mole from './Mole';

it('SMOKE TEST: Mole component', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Mole />, div);
  ReactDOM.unmountComponentAtNode(div);
});

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import Cube from './Cube';

it('SMOKE TEST: Cube component', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HashRouter><Cube /></HashRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});

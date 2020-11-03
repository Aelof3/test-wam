import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import HUD from './HUD';

it('SMOKE TEST: HUD component', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HUD />, div);
  ReactDOM.unmountComponentAtNode(div);
});

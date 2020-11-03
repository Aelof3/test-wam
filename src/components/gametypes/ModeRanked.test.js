import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import ModeRanked from './ModeRanked';

it('SMOKE TEST: ModeRanked component', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HashRouter><ModeRanked /></HashRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});

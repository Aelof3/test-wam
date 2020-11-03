import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import MainMenu from './MainMenu';

it('SMOKE TEST: Main Menu component', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HashRouter><MainMenu /></HashRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});

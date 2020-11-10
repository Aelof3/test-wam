import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import MainMenu from './OptionsMenu';

it('SMOKE TEST: Options Menu component', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HashRouter><OptionsMenu /></HashRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});

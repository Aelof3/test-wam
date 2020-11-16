import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './App';

it('SMOKE TEST: App component', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HashRouter hashType="slash"><App /></HashRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});

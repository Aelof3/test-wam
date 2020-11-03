import React from 'react';
import ReactDOM from 'react-dom';
import GUI from './GUI';

it('SMOKE TEST: GUI component', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GUI />, div);
  ReactDOM.unmountComponentAtNode(div);
});

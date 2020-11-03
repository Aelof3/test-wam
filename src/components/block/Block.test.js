import React from 'react';
import ReactDOM from 'react-dom';
import Block from './Block';

it('SMOKE TEST: Block component', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Block />, div);
  ReactDOM.unmountComponentAtNode(div);
});

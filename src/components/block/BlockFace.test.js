import React from 'react';
import ReactDOM from 'react-dom';
import BlockFace from './BlockFace';

it('SMOKE TEST: BlockFace component', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BlockFace />, div);
  ReactDOM.unmountComponentAtNode(div);
});

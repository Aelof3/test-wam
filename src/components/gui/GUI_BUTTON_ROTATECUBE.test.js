import React from 'react';
import ReactDOM from 'react-dom';
import GUI_BUTTON_ROTATECUBE from './GUI_BUTTON_ROTATECUBE';

it('SMOKE TEST: GUI_BUTTON_ROTATECUBE component', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GUI_BUTTON_ROTATECUBE />, div);
  ReactDOM.unmountComponentAtNode(div);
});

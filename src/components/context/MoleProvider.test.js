import React from 'react';
import ReactDOM from 'react-dom';
import MOLEPROVIDER from './MoleProvider';

it('SMOKE TEST: MOLEPROVIDER component', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MOLEPROVIDER />, div);
  ReactDOM.unmountComponentAtNode(div);
});

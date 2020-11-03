import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import Leaderboard from './Leaderboard';

it('SMOKE TEST: Leaderboard component', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HashRouter><Leaderboard /></HashRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});

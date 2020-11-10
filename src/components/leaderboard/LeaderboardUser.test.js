import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import LeaderboardUser from './LeaderboardUser';

it('SMOKE TEST: LeaderboardUser component', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HashRouter><LeaderboardUser /></HashRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});

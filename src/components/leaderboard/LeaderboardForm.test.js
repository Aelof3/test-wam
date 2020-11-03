import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import LeaderboardForm from './LeaderboardForm';

it('SMOKE TEST: LeaderboardForm component', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HashRouter><LeaderboardForm /></HashRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});

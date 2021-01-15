import { h } from 'preact';
import { Router } from 'preact-router';

import StateInput from './StateInput';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Profile from '../routes/profile';

const App = () => (
  <div id='app'>
    <h1>Where's my Vaccine?</h1>
    <input type='text' />
    <StateInput />
    <Router>
      <Home path='/' />
      <Profile path='/profile/' user='me' />
      <Profile path='/profile/:user' />
    </Router>
  </div>
);

export default App;

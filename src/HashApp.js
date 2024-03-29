import { h } from 'preact';
import { Router } from 'preact-router';
import { createHashHistory } from 'history';

// Code-splitting is automated for `routes` directory
import StateInput from '~/components/StateInput';
import AgeInput from '~/components/AgeInput';

const history = createHashHistory();

const App = () => (
  <div id='app'>
    <h1>HashApp</h1>
    <nav>
      <ul>
        <li>
          <a href='/state'>State</a>
        </li>
        <li>
          <a href='/age'>Age</a>
        </li>
      </ul>
    </nav>
    <Router history={history}>
      <StateInput path='/state' />
      <AgeInput path='/age' />
    </Router>
  </div>
);

export default App;

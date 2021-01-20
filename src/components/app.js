import { h } from 'preact';
import Header from './Header';
import StateInput from './StateInput';

const App = () => (
  <div id='app'>
    <Header />
    <div class='container'>
      <StateInput />
    </div>
  </div>
);

export default App;

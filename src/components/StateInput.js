import { stateNames } from '../data';

const StateInput = () => {
  return (
    <div>
      <h1>What is your state?</h1>
      <ul>
        {stateNames.map((name) => {
          <li>{name}</li>;
        })}
      </ul>
    </div>
  );
};

export default StateInput;

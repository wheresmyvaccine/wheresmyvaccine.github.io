import { stateNames } from '../data';

const StateInput = () => {
  return (
    <div>
      <h1>States Length: </h1>
      {stateNames.length}
      <ul>
        {stateNames.map((name) => {
          <li>{name}</li>;
        })}
      </ul>
    </div>
  );
};

export default StateInput;

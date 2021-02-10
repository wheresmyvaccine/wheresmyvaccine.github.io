// fix clearing/typing
// remove 0 automatically / leave blank
// save data in middle
// remove border from start page

import { h } from 'preact';
import ReactSelect from 'react-select';
import { stateNames } from '../data';

const StateInput = ({ stateName, setData }) => {
  const setStateNameWrapper = (value) => setData(value);

  return (
    <div className='StateInput'>
      <h1>What state do you live in?</h1>

      <ReactSelect
        className='StateNameSelect'
        classNamePrefix='select'
        name='stateName'
        options={stateNames}
        value={stateName}
        isClearable={true}
        isSearchable={true}
        onChange={setStateNameWrapper}
      />
    </div>
  );
};

export default StateInput;

import {h, Fragment} from 'preact';
import ReactSelect from 'react-select';
import {stateNames} from '../data';

const StateInput = ({stateName, setData}) => {
  const setStateNameWrapper = (value) => setData(value);

  return (
    <Fragment>
      <h1>What state do you live in?</h1>

      <ReactSelect
        className='StateNameSelect'
        classNamePrefix='select'
        name='stateName'
        menuIsOpen={true}
        options={stateNames}
        value={stateName}
        isClearable={true}
        isSearchable={true}
        onChange={setStateNameWrapper}
      />
    </Fragment>
  );
};

export default StateInput;

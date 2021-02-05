import { h, Fragment } from 'preact';
import ReactSelect from 'react-select';
import { stateNames } from '../data';

const styles = {
  control: (styles) => ({ ...styles, width: 320, border: '4px solid #282525', borderRadius: 7 }),
  option: (styles) => ({ ...styles, color: 'black' }),
  input: (styles) => styles,
  placeholder: (styles) => styles,
  singleValue: (styles) => styles,
};

const StateInput = ({ setData }) => {
  const setStateNameWrapper = ({ value }) => {
    setData(value);
  };

  return (
    <Fragment>
      <h1>What state do you live in?</h1>

      <ReactSelect
        className='StateNameSelect'
        classNamePrefix='select'
        name='stateName'
        options={stateNames}
        isClearable={true}
        isSearchable={true}
        styles={styles}
        onChange={setStateNameWrapper}
      />
    </Fragment>
  );
};

export default StateInput;

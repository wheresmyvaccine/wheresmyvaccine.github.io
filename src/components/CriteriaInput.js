import {h, Fragment} from 'preact';
import ReactSelect from 'react-select';
import {stateData} from '../data';

const styles = {
  control: (styles) => ({...styles, width: 320, border: '4px solid #282525', borderRadius: 7}),
  option: (styles) => ({...styles, color: 'black'}),
  input: (styles) => styles,
  placeholder: (styles) => styles,
  singleValue: (styles) => styles,
};

const CriteriaInput = ({stateName, selectorType, setData}) => {
  const {selectors} = stateData[stateName];
  const selectorData = selectors[selectorType];

  const setDataWrapper = (input) => {
    console.log(input);
    setData();
  };

  return (
    <Fragment>
      <div>
        CriteriaInput {stateName} {selectorType}
      </div>

      <ReactSelect
        className={`${selectorType}Select`}
        classNamePrefix='select'
        name={selectorType}
        options={selectorData}
        isClearable={true}
        isSearchable={true}
        styles={styles}
        onChange={setDataWrapper}
      />
    </Fragment>
  );
};

export default CriteriaInput;

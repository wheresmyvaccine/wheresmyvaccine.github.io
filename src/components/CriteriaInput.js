import {h} from 'preact';
import ReactSelect from 'react-select';
import {stateData} from '../data';

const CriteriaInput = ({stateName, selectorType, data, setData}) => {
  const {selectors, questions, questionDescriptions} = stateData[stateName.value];
  const selectorData = selectors[selectorType];
  const setDataWrapper = (input) => setData(input);

  return (
    <div className='CriteriaInput'>
      <h6>
        CriteriaInput {stateName.value} {selectorType}
      </h6>
      <h1>{questions[selectorType]}</h1>
      <p>{questionDescriptions[selectorType]}</p>

      <ReactSelect
        className={`${selectorType}Select ReactSelect`}
        classNamePrefix='select'
        name={selectorType}
        options={selectorData}
        value={data}
        isClearable={true}
        isSearchable={true}
        onChange={setDataWrapper}
      />
    </div>
  );
};

export default CriteriaInput;

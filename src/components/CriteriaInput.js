import { h } from 'preact';
import ReactSelect from 'react-select';
import { stateData } from '../data';
import AnswerRow from './AnswerRow';

const CriteriaInput = ({ stateName, selectorType, singleSelect, data, setData }) => {
  console.log({ CIdata: data });
  const { selectors, questions, questionDescriptions } = stateData[stateName.value];
  const selectorData = selectors[selectorType];
  const setDataWrapper = (input) => setData(input);

  return (
    <div className='CriteriaInput'>
      <h6>
        CriteriaInput {stateName.value} {selectorType}
      </h6>
      <h1>{questions[selectorType]}</h1>
      <p>{questionDescriptions[selectorType]}</p>

      {selectorData.map((answer) => (
        <AnswerRow key={answer.value} answer={answer} singleSelect={singleSelect} data={data} setData={setData} />
      ))}
      {false && (
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
      )}
    </div>
  );
};

export default CriteriaInput;

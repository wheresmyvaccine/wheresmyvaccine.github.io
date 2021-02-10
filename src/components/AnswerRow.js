import { h } from 'preact';
import { Row, Column } from './atoms';

const AnswerRow = ({ answer, singleSelect, data, setData }) => {
  const answerIndex = data.findIndex((d) => answer.value === d.value);
  const answerIsInData = answerIndex !== -1;

  const onClick = () => {
    if (singleSelect) {
      return setData([ answer ]);
    }

    if (answerIsInData) {
      const newData = [ ...data.slice(0, answerIndex), ...data.slice(answerIndex + 1) ];
      setData(newData);
    }
    else {
      const newData = data.concat(answer);
      setData(newData);
    }
  };

  const className = `AnswerRow ${answerIsInData ? 'checked' : ''}`;

  return (
    <Row className={className} onClick={onClick}>
      <Column size={10}>
        <input type={singleSelect ? 'radio' : 'checkbox'} checked={answerIsInData} />
      </Column>
      <Column>{answer.value}</Column>
    </Row>
  );
};

export default AnswerRow;

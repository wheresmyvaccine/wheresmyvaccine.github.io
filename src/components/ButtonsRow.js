import { h } from 'preact';
import { Arrow, Row } from './atoms';

const ButtonsRow = ({ inputIndex, inputsMap, setInputIndex, setInputDirection }) => {
  const nextIndex = () => {
    if (inputIndex < inputsMap.length - 1) {
      setInputIndex(inputIndex + 1);
      setInputDirection('next-exit-left-enter-right');
    }
  };

  const previousIndex = () => {
    if (inputIndex > 0) {
      setInputIndex(inputIndex - 1);
      setInputDirection('previous-exit-right-enter-left');
    }
  };

  const onLastPage = inputIndex === inputsMap.length - 1;

  return (
    <Row className='ButtonsRow'>
      {inputIndex > 0 && (
        <button className='Previous' onClick={previousIndex}>
          <Arrow color='dark' direction='left' /> Back
        </button>
      )}
      {inputIndex <= inputsMap.length - 1 && (
        <button className={`Next ${onLastPage ? 'Finish' : ''}`} onClick={nextIndex}>
          {onLastPage ? 'Finish' : 'Next'} <Arrow />
        </button>
      )}
    </Row>
  );
};

export default ButtonsRow;

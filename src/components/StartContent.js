import { h } from 'preact';
import { Row, Column } from './atoms';

const StartContent = ({ setInputIndex, setInputDirection }) => {
  const nextIndex = () => {
    setInputIndex(1);
    setInputDirection('next-exit-left-enter-right');
  };

  return (
    <div className='StartContent'>
      <h1>Can I get the COVID-19 vaccine now?</h1>
      <h2>We’re here to help you find out.</h2>
      <p className='instructions'>Answer a few questions about yourself and we’ll let you know.</p>
      <Row center>
        <Column offset={10} size={80}>
          <button onClick={nextIndex}>Start</button>
        </Column>
      </Row>
      <p className='anonymous'>
        It’s completely anonymous and we don’t save any of your information. If you’re still not sure, feel free to
        learn more about us before using this site.
      </p>
    </div>
  );
};

export default StartContent;

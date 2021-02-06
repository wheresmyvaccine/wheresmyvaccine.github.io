import {h} from 'preact';

const AgeInput = ({age, setData}) => {
  const setDataWrapper = ({target: input}) => setData(input.value);

  return (
    <div className='AgeInput'>
      <h1>How old are you?</h1>
      <p>
        You probably know this one. :-) But if you’re filling it out for someone else and aren’t
        sure, just put your best guess.
      </p>

      <input type='number' value={age} onChange={setDataWrapper} />
    </div>
  );
};

export default AgeInput;

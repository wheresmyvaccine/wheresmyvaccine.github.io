import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import { Column, Row } from './atoms';
import Header from './Header';
import StateInput from './StateInput';
import AgeInput from './AgeInput';
import {
  GenericLivingSettingsInput,
  GenericWorkSettingsInput,
  GenericHealthConditionsInput,
  SpecificLivingSettingsInput,
  SpecificWorkSettingsInput,
  SpecificHealthConditionsInput,
} from './Inputs';

const inputsMap = [
  'state',
  'age',
  'genericLivingSettings',
  'genericWorkSettings',
  'genericHealthConditions',
  'specificLivingSettings',
  'specificWorkSettings',
  'specificHealthConditions',
];

const App = () => {
  const [ darkMode, setDarkMode ] = useState(false);
  const [ inputDirection, setInputDirection ] = useState('next-exit-left-enter-right');
  const [ inputIndex, setInputIndex ] = useState(1);

  const [ stateName, setStateName ] = useState({});
  const [ age, setAge ] = useState(0);
  const [ genericLivingSettings, setGenericLivingSettings ] = useState({});
  const [ genericWorkSettings, setGenericWorkSettings ] = useState({});
  const [ genericHealthConditions, setGenericHealthConditions ] = useState({});
  const [ specificLivingSettings, setSpecificLivingSettings ] = useState({});
  const [ specificWorkSettings, setSpecificWorkSettings ] = useState({});
  const [ specificHealthConditions, setSpecificHealthConditions ] = useState({});

  useEffect(
    () => {
      if (darkMode) document.body.classList.add('dark');
      else document.body.classList.remove('dark');
    },
    [ darkMode ],
  );

  const data = {
    stateName,
    age,
    genericLivingSettings,
    genericWorkSettings,
    genericHealthConditions,
    // specificLivingSettings,
    // specificWorkSettings,
    // specificHealthConditions,
  };

  console.log(data);

  const toggleDarkMode = () => setDarkMode(!darkMode);

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

  return (
    <div id='app'>
      <Header />
      <button onClick={toggleDarkMode}>Turn {darkMode ? 'Off' : 'On'} Dark Mode</button>
      <div className={`container ${inputDirection}`}>
        <SwitchTransition mode='out-in'>
          <CSSTransition key={inputIndex} classNames='page' timeout={300}>
            <div class='page-outer'>
              <div class='page-inner'>
                {inputsMap[inputIndex] === 'state' && <StateInput stateName={stateName} setData={setStateName} />}
                {inputsMap[inputIndex] === 'age' && <AgeInput age={age} setData={setAge} />}
                {inputsMap[inputIndex] === 'genericLivingSettings' && (
                  <GenericLivingSettingsInput
                    stateName={stateName}
                    data={genericLivingSettings}
                    setData={setGenericLivingSettings}
                  />
                )}
                {inputsMap[inputIndex] === 'genericWorkSettings' && (
                  <GenericWorkSettingsInput
                    stateName={stateName}
                    data={genericWorkSettings}
                    setData={setGenericWorkSettings}
                  />
                )}
                {inputsMap[inputIndex] === 'genericHealthConditions' && (
                  <GenericHealthConditionsInput
                    stateName={stateName}
                    data={genericHealthConditions}
                    setData={setGenericHealthConditions}
                  />
                )}
                {inputsMap[inputIndex] === 'specificLivingSettings' && (
                  <SpecificLivingSettingsInput
                    stateName={stateName}
                    data={specificLivingSettings}
                    setData={setSpecificLivingSettings}
                  />
                )}
                {inputsMap[inputIndex] === 'specificWorkSettings' && (
                  <SpecificWorkSettingsInput
                    stateName={stateName}
                    data={specificWorkSettings}
                    setData={setSpecificWorkSettings}
                  />
                )}
                {inputsMap[inputIndex] === 'specificHealthConditions' && (
                  <SpecificHealthConditionsInput
                    stateName={stateName}
                    data={specificHealthConditions}
                    setData={setSpecificHealthConditions}
                  />
                )}
              </div>
            </div>
          </CSSTransition>
        </SwitchTransition>
        <Row className='DirectionButtons'>
          <Column>{inputIndex > 0 && <button onClick={previousIndex}>Previous</button>}</Column>
          <Column>{inputIndex < inputsMap.length - 1 && <button onClick={nextIndex}>Next</button>}</Column>
        </Row>
      </div>
    </div>
  );
};

export default App;

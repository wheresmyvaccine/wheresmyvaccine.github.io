import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import Header from './Header';
import StartContent from './StartContent';
import EndContent from './EndContent';
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
import ButtonsRow from './ButtonsRow';
import getEligibility from '~/utils/getEligibility';

const inputsMap = [
  'start',
  'stateName',
  'age',
  'genericLivingSettings',
  'genericWorkSettings',
  'genericHealthConditions',
  // 'specificLivingSettings',
  // 'specificWorkSettings',
  // 'specificHealthConditions',
  'end',
];

// Multi Select

const App = () => {
  const [ darkMode, setDarkMode ] = useState(false);
  const [ inputDirection, setInputDirection ] = useState('next-exit-left-enter-right');
  const [ inputIndex, setInputIndex ] = useState(0);

  const [ stateName, setStateName ] = useState({ label: 'Texas (TX)', value: 'texas' });
  // const [ stateName, setStateName ] = useState({});
  const [ age, setAge ] = useState('');
  const [ genericLivingSettings, setGenericLivingSettings ] = useState([]);
  const [ genericWorkSettings, setGenericWorkSettings ] = useState([]);
  const [ genericHealthConditions, setGenericHealthConditions ] = useState([]);
  const [ specificLivingSettings, setSpecificLivingSettings ] = useState([]);
  const [ specificWorkSettings, setSpecificWorkSettings ] = useState([]);
  const [ specificHealthConditions, setSpecificHealthConditions ] = useState([]);

  const inProgress = inputsMap[inputIndex] !== 'start';

  useEffect(
    () => {
      if (darkMode) document.body.classList.add('dark');
      else document.body.classList.remove('dark');
    },
    [ darkMode ],
  );

  useEffect(
    () => {
      if (inProgress) document.body.classList.add('inProgress');
      else document.body.classList.remove('inProgress');
    },
    [ inProgress ],
  );

  // update this to be livingSettings.generic model
  // rename to userData
  const data = {
    currentInput: inputsMap[inputIndex],
    stateName: {
      answered: !!stateName.value,
      value: stateName,
    },
    age: {
      answered: !!age,
      value: isNaN(Number(age)) ? 0 : Number(age),
    },
    genericLivingSettings: {
      answered: !!genericLivingSettings.length,
      values: genericLivingSettings,
    },
    genericWorkSettings: {
      answered: !!genericWorkSettings.length,
      values: genericWorkSettings,
    },
    genericHealthConditions: {
      answered: !!genericHealthConditions.length,
      values: genericHealthConditions,
    },
    // specificLivingSettings,
    // specificWorkSettings,
    // specificHealthConditions,
  };

  const currentQuestionAnswered = data[inputsMap[inputIndex]] && data[inputsMap[inputIndex]].answered;

  const isEligible = getEligibility({ stateName, userData: data });

  console.log(data);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div id='app'>
      <Header />
      {false && <button onClick={toggleDarkMode}>Turn {darkMode ? 'Off' : 'On'} Dark Mode</button>}
      <div className={`container ${inputDirection}`}>
        <SwitchTransition mode='out-in'>
          <CSSTransition key={inputIndex} classNames='page' timeout={300}>
            <div class='page-outer'>
              <main class='page-inner'>
                {inputsMap[inputIndex] === 'start' && (
                  <StartContent setInputIndex={setInputIndex} setInputDirection={setInputDirection} />
                )}
                {inputsMap[inputIndex] === 'stateName' && <StateInput stateName={stateName} setData={setStateName} />}
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
                {inputsMap[inputIndex] === 'end' && <EndContent stateName={stateName} isEligible={isEligible} />}
              </main>
            </div>
          </CSSTransition>
        </SwitchTransition>
        {inputsMap[inputIndex] !== 'start' && (
          <ButtonsRow
            currentQuestionAnswered={currentQuestionAnswered}
            inputIndex={inputIndex}
            inputsMap={inputsMap}
            setInputIndex={setInputIndex}
            setInputDirection={setInputDirection}
          />
        )}
      </div>
    </div>
  );
};

export default App;

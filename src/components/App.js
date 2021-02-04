import {h} from 'preact';
import {useState} from 'preact/hooks';
import {SwitchTransition, CSSTransition} from 'react-transition-group';
import Header from './Header';
import StateInput from './StateInput';
import AgeInput from './AgeInput';
import {
  GenericLivingSettingsInput,
  GenericWorkSettingsInput,
  GenericHealthConditionsInput,
  LivingSettingsInput,
  WorkSettingsInput,
  HealthConditionsInput,
} from './Inputs';

const inputsMap = [
  'state',
  'age',
  'genericLivingSettings',
  'genericWorkSettings',
  'genericHealthConditions',
  'livingSettings',
  'workSettings',
  'healthConditions',
];

const App = () => {
  const [inputDirection, setInputDirection] = useState('next-exit-left-enter-right');
  const [inputIndex, setInputIndex] = useState(0);
  const [stateName, setStateName] = useState('');
  const [age, setAge] = useState(0);
  const [genericLivingSettings, setGenericLivingSettings] = useState('');
  const [genericWorkSettings, setGenericWorkSettings] = useState('');
  const [genericHealthConditions, setGenericHealthConditions] = useState('');
  const [livingSettings, setLivingSettings] = useState('');
  const [workSettings, setWorkSettings] = useState('');
  const [healthConditions, setHealthConditions] = useState('');

  const data = {
    genericLivingSettings,
    genericWorkSettings,
    genericHealthConditions,
    livingSettings,
    workSettings,
    healthConditions,
  };

  console.log(data);

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
      <h3>{inputIndex}</h3>
      <div class={`container ${inputDirection}`}>
        <SwitchTransition mode='out-in'>
          <CSSTransition key={inputIndex} classNames='page' timeout={300}>
            <div class='page-outer'>
              <div class='page-inner'>
                {inputsMap[inputIndex] === 'state' && (
                  <StateInput stateName={stateName} setStateName={setStateName} />
                )}
                {inputsMap[inputIndex] === 'age' && <AgeInput age={age} setAge={setAge} />}
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
                {inputsMap[inputIndex] === 'livingSettings' && (
                  <LivingSettingsInput
                    stateName={stateName}
                    data={livingSettings}
                    setData={setLivingSettings}
                  />
                )}
                {inputsMap[inputIndex] === 'workSettings' && (
                  <WorkSettingsInput
                    stateName={stateName}
                    data={workSettings}
                    setData={setWorkSettings}
                  />
                )}
                {inputsMap[inputIndex] === 'healthConditions' && (
                  <HealthConditionsInput
                    stateName={stateName}
                    data={healthConditions}
                    setData={setHealthConditions}
                  />
                )}
              </div>
            </div>
          </CSSTransition>
        </SwitchTransition>
        {inputIndex > 0 && <button onClick={previousIndex}>Previous</button>}
        {inputIndex < inputsMap.length - 1 && <button onClick={nextIndex}>Next</button>}
      </div>
    </div>
  );
};

export default App;

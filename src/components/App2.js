import { h } from 'preact';
import { useState } from 'preact/hooks';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
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
  const [ inputDirection, setInputDirection ] = useState('next-exit-left-enter-right');
  const [ inputIndex, setInputIndex ] = useState(0);
  const [ stateName, setStateName ] = useState('');
  const [ age, setAge ] = useState(0);
  const [ genericLivingSettings, setGenericLivingSettings ] = useState('');
  const [ genericWorkSettings, setGenericWorkSettings ] = useState('');
  const [ genericHealthConditions, setGenericHealthConditions ] = useState('');
  const [ livingSettings, setLivingSettings ] = useState('');
  const [ workSettings, setWorkSettings ] = useState('');
  const [ healthConditions, setHealthConditions ] = useState('');

  const dataMap = {
    genericLivingSettings,
    genericWorkSettings,
    genericHealthConditions,
    livingSettings,
    workSettings,
    healthConditions,
  };

  const pagesMap = {
    state: {
      PageComponent: StateInput,
      data: stateName,
      setData: setStateName,
    },
    age: {
      PageComponent: AgeInput,
      data: age,
      setData: setAge,
    },
    genericLivingSettings: {
      PageComponent: GenericLivingSettingsInput,
      data: genericLivingSettings,
      setData: setGenericLivingSettings,
    },
    genericWorkSettings: {
      PageComponent: GenericWorkSettingsInput,
      data: genericWorkSettings,
      setData: setGenericWorkSettings,
    },
    genericHealthConditions: {
      PageComponent: GenericHealthConditionsInput,
      data: genericHealthConditions,
      setData: setGenericHealthConditions,
    },
    livingSettings: {
      PageComponent: LivingSettingsInput,
      data: livingSettings,
      setData: setLivingSettings,
    },
    workSettings: {
      PageComponent: WorkSettingsInput,
      data: workSettings,
      setData: setWorkSettings,
    },
    healthConditions: {
      PageComponent: HealthConditionsInput,
      data: healthConditions,
      setData: setHealthConditions,
    },
  };

  const { PageComponent, data, setData } = pagesMap[inputsMap[inputIndex]];
  // const PagePageComponent = selectedPage.PageComponent;

  console.log(dataMap);

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
                <PageComponent stateName={stateName} data={data} setData={setData} />
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

import CriteriaInput from './CriteriaInput';

export const GenericLivingSettingsInput = ({stateName, setData}) => (
  <CriteriaInput stateName={stateName} selectorType='genericLivingSettings' setData={setData} />
);

export const GenericWorkSettingsInput = ({stateName, setData}) => (
  <CriteriaInput stateName={stateName} selectorType='genericWorkSettings' setData={setData} />
);

export const GenericHealthConditionsInput = ({stateName, setData}) => (
  <CriteriaInput stateName={stateName} selectorType='genericHealthConditions' setData={setData} />
);

export const LivingSettingsInput = ({stateName, setData}) => (
  <CriteriaInput stateName={stateName} selectorType='livingSettings' setData={setData} />
);

export const WorkSettingsInput = ({stateName, setData}) => (
  <CriteriaInput stateName={stateName} selectorType='workSettings' setData={setData} />
);

export const HealthConditionsInput = ({stateName, setData}) => (
  <CriteriaInput stateName={stateName} selectorType='healthConditions' setData={setData} />
);

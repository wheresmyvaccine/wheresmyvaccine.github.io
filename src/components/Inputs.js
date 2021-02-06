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

export const SpecificLivingSettingsInput = ({stateName, setData}) => (
  <CriteriaInput stateName={stateName} selectorType='specificLivingSettings' setData={setData} />
);

export const SpecificWorkSettingsInput = ({stateName, setData}) => (
  <CriteriaInput stateName={stateName} selectorType='specificWorkSettings' setData={setData} />
);

export const SpecificHealthConditionsInput = ({stateName, setData}) => (
  <CriteriaInput stateName={stateName} selectorType='specificHealthConditions' setData={setData} />
);

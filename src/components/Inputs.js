import CriteriaInput from './CriteriaInput';

export const GenericLivingSettingsInput = ({ stateName, data, setData }) => (
  <CriteriaInput stateName={stateName} selectorType='genericLivingSettings' data={data} setData={setData} />
);

export const GenericWorkSettingsInput = ({ stateName, data, setData }) => (
  <CriteriaInput stateName={stateName} selectorType='genericWorkSettings' data={data} setData={setData} />
);

export const GenericHealthConditionsInput = ({ stateName, data, setData }) => (
  <CriteriaInput
    stateName={stateName}
    selectorType='genericHealthConditions'
    singleSelect={true}
    data={data}
    setData={setData}
  />
);

export const SpecificLivingSettingsInput = ({ stateName, data, setData }) => (
  <CriteriaInput stateName={stateName} selectorType='specificLivingSettings' data={data} setData={setData} />
);

export const SpecificWorkSettingsInput = ({ stateName, data, setData }) => (
  <CriteriaInput stateName={stateName} selectorType='specificWorkSettings' data={data} setData={setData} />
);

export const SpecificHealthConditionsInput = ({ stateName, data, setData }) => (
  <CriteriaInput stateName={stateName} selectorType='specificHealthConditions' data={data} setData={setData} />
);

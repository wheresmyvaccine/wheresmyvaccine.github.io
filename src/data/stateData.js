import * as stateData from './states';
import defaults from './states/_defaults';

const normalizedStateData = {};

const getSelectorsFromList = (array) => array.map((key) => ({label: key, value: key}));

const getSelectorsFromPhaseMap = (phaseMap) => getSelectorsFromList(Object.keys(phaseMap || {}));

const overrideGenericsIfSet = (stateData, name) =>
  stateData[name].genericOptions.length > 0
    ? stateData[name].genericOptions
    : defaults[name].genericOptions;

Object.entries(stateData).forEach(([state, data]) => {
  normalizedStateData[state] = {
    ...defaults,
    ...data,
    selectors: {
      genericWorkSettings: getSelectorsFromList(overrideGenericsIfSet(data, 'workSettings')),
      specificWorkSettings: getSelectorsFromPhaseMap(data.workSettings.specificOptionsPhaseMap),

      genericLivingSettings: getSelectorsFromList(overrideGenericsIfSet(data, 'livingSettings')),
      specificLivingSettings: getSelectorsFromPhaseMap(data.livingSettings.specificOptionsPhaseMap),

      genericHealthConditions: getSelectorsFromList(
        overrideGenericsIfSet(data, 'healthConditions'),
      ),
      specificHealthConditions: getSelectorsFromPhaseMap(
        data.healthConditions.specificOptionsPhaseMap,
      ),
    },
  };
});

export default normalizedStateData;

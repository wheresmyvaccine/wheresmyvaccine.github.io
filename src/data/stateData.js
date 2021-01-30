import * as stateData from './states';
import defaults from './states/_defaults';

const normalizedStateData = {};

const getSelectorsFromList = (array) => array.map((key) => ({label: key, value: key}));

const getSelectorsFromPhaseMap = (phaseMap) => getSelectorsFromList(Object.keys(phaseMap || {}));

const overrideGenericsIfSet = (data, name) =>
  data[name].length > 0 ? data[name].length : defaults[name];

Object.entries(stateData).forEach(([state, data]) => {
  normalizedStateData[state] = {
    ...defaults,
    ...data,
    selectors: {
      genericLivingSettings: getSelectorsFromList(
        overrideGenericsIfSet(data, 'genericLivingSettings'),
      ),
      genericWorkSettings: getSelectorsFromList(overrideGenericsIfSet(data, 'genericWorkSettings')),
      genericHealthConditions: getSelectorsFromList(
        overrideGenericsIfSet(data, 'genericHealthConditions'),
      ),
      livingSettings: getSelectorsFromPhaseMap(data.livingSettings),
      workSettings: getSelectorsFromPhaseMap(data.workSettings),
      healthConditions: getSelectorsFromPhaseMap(data.healthConditions),
    },
  };
});

export default normalizedStateData;

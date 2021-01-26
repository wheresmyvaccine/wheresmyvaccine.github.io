import * as stateData from './states';

const normalizedStateData = {};

Object.entries(stateData).forEach(([ state, data ]) => {
  normalizedStateData[state] = {
    ...data,
    selectors: {
      workSettings: Object.keys(data.workSettings || []).map((ws) => ({ label: ws, value: ws })),
      healthConditions: Object.keys(data.healthConditions || []).map((ws) => ({ label: ws, value: ws })),
    },
  };
});

export default normalizedStateData;

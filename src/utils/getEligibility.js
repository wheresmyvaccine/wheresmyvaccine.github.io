import { stateData } from '../data';

const isInAgeRange = ({ age, ageRangeString }) => {
  const regex = /([0-9]{1,2})([-+])([0-9]{1,2})?/;
  const [ , minString, symbol, maxString ] = [ ...ageRangeString.match(regex) ];
  const [ min, max ] = [ Number(minString), Number(maxString) ];
  const atOrAboveMinimum = symbol === '+' && age >= min;
  const inclusiveBetween = symbol === '-' && (min <= age && age <= max);
  console.log({ age, ageRangeString });
  return atOrAboveMinimum || inclusiveBetween;
};

const getAgePhases = ({ age, agePhaseMap }) =>
  Object.entries(agePhaseMap).map(([ ageRangeString, phase ]) => isInAgeRange({ age, ageRangeString }) && phase);

const getComboPhases = ({ combinations, userData }) => {
  const comboPhases = combinations.map((c) => {
    // if combo does not have the key, it should be true
    const matchesAge = c.age ? isInAgeRange({ age: userData.age.value, ageRangeString: c.age }) : true;
    const matchesLiving = c.livingSetting
      ? userData.genericLivingSettings.values.map(({ value }) => value).includes(c.livingSetting)
      : true;
    const matchesWork = c.workSetting
      ? userData.genericWorkSettings.values.map(({ value }) => value).includes(c.workSetting)
      : true;
    const matchesHealth = c.healthConditions
      ? userData.genericHealthConditions.values.map(({ value }) => value).includes(c.healthConditions)
      : true;

    console.log({ matchesAge, matchesLiving, matchesWork, matchesHealth });
    if (matchesAge && matchesLiving && matchesWork && matchesHealth) {
      return c.phase;
    }
  });
  return comboPhases;
};

// const getChoicePhases = ({name, selectedStateData, userData, }) => userData[name].values.map(
//   ({ value }) => selectedStateData[name].genericPhaseMap[value],
// );

const getEligibility = ({ stateName, userData }) => {
  const selectedStateData = stateData[stateName.value];
  const statePhases = selectedStateData.phases;

  const workPhases = userData.genericWorkSettings.values.map(
    ({ value }) => selectedStateData.workSettings.genericPhaseMap[value],
  );
  const livingPhases = userData.genericLivingSettings.values.map(
    ({ value }) => selectedStateData.livingSettings.genericPhaseMap[value],
  );
  const healthPhases = userData.genericHealthConditions.values.map(
    ({ value }) => selectedStateData.healthConditions.genericPhaseMap[value],
  );
  const agePhases = getAgePhases({ age: userData.age.value, agePhaseMap: selectedStateData.agePhaseMap });
  const comboPhases = getComboPhases({ combinations: selectedStateData.combinations, userData });

  console.log({ workPhases, livingPhases, healthPhases, agePhases, comboPhases });

  const possiblePhases = Array.from(
    new Set([ ...workPhases, ...livingPhases, ...healthPhases, ...agePhases, ...comboPhases ]),
  ).filter((p) => !!p);

  const earliestEligibleDate = possiblePhases
    .map((p) => statePhases[p].startDate && new Date(statePhases[p].startDate))
    .filter((date) => !!date)
    .sort((a, b) => a - b)[0];

  return !!(earliestEligibleDate && new Date() > earliestEligibleDate);
};

export default getEligibility;

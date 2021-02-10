// For an example and instructions on editing, go to the below URL
// https://github.com/wheresmyvaccine/wheresmyvaccine.github.io/blob/main/src/data/states/README.md

export default {
  'livingSettings': {
    'genericOptions': [

    ],
    'genericPhaseMap': {

    },
    'genericSpecificMap': {

    },
    'specificOptionsPhaseMap': {
      'long term care facility': '1a',
    },
  },

  'workSettings': {
    'genericOptions': [

    ],
    'genericPhaseMap': {

    },
    'genericSpecificMap': {

    },
    'specificOptionsPhaseMap': {
      'Healthcare': '1a',
      'long term care facility': '1a',
      'emergency medical services': '1a',
      'home health': '1a',
      'school nurse': '1a',
    },
  },

  'healthConditions': {
    'genericOptions': [

    ],
    'genericPhaseMap': {

    },
    'genericSpecificMap': {

    },
    'specificOptionsPhaseMap': {
      '1+ chronic illness': '',
      'none': '',
    },
  },

  'agePhaseMap': {
    '65+': '1b',
  },

  'combinations': [
    { 'age': '16+', 'healthConditions': 'Yes', 'phase': '1b' },
  ],

  'phases': {
    '1a': {
      'startDate': '2021-01-15',
    },
    '1b': {
      'startDate': '2021-01-15',
    },
  },

  'resources': {
    'COVID-19 Vaccine Information':
      'https://www.dshs.state.tx.us/coronavirus/immunize/vaccine.aspx',
  },
};

// Texas	1A		Healthcare, long term care facility, emergency medical services, home health, school nurse
// Texas	1A						Long term care facility
// Texas	1B			65	999
// Texas	1B			16	999	1+ chronic illness
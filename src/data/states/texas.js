export default {
  'genericLivingSettings': [

  ],
  'specificLivingSettings': {

  },
  'livingSettings': {
    'long term care facility': '1a',
  },

  'genericWorkSettings': [

  ],
  'specificWorkSettings': {

  },
  'workSettings': {
    'Healthcare': '1a',
    'long term care facility': '1a',
    'emergency medical services': '1a',
    'home health': '1a',
    'school nurse': '1a',
  },

  'age': {
    '65+': '1b',
  },

  'genericHealthConditions': [
    
  ],
  'specificHealthConditions': {

  },
  'healthConditions': {
    '1+ chronic illness': '',
    'none': '',
  },

  'combinations': [
    { 'age': '16+', 'healthConditions': '1+ chronic illness', 'phase': '1b' },
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

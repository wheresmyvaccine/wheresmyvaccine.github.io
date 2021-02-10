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
      'First Responders': '1a',
      'Long Term Care': '1a',
  
      'Corrections': '1b.3',
      'Group Homes': '1b.3',
      'Treatment Centers': '1b.3',
      'Homeless Shelters': '1b.3',
      'Other Congregate Settings': '1b.3',
      'Child care workers': '1b.7',
      'Workers at Preschool through 12th grade': '1b.8',
  
      'National Guard': '1c.1',
      'Food access workers (excluding restaurant workers)': '1c.2',
      'Public safety answering points (e.g. 911)': '1c.3',
      'COVID Vaccine Dev/Supply Manufacturing': '1c.4',
      'Non-1A healthcare/public health workers': '1c.5',
      'Free standing clinical laundries': '1c.6',
      'Public transit (bus, taxi, ride-share, etc)': '1c.7',
      'Blood bank workers not previously vaccinated': '1c.9',
      'Information Technology': '1c.10',
      'All other essential workers per Cybersecurity and Infrastructure Security Agency (CISA)': '1c.11',
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
      '2+ high risk medical conditions': '1b.6',
      '1+ high risk medical conditions': '',
      'none': '',
    },
  },

  'agePhaseMap': {
    '75+': '1b.1',
    '65+': '1b.5',
  },

  'combinations': [
    {
      'age': '65-74',
      'healthConditions': '2+ high risk medical conditions',
      'phase': '1b.2',
    },
    {
      'age': '65+',
      'healthConditions': '1+ high risk medical conditions',
      'phase': '1b.2',
    },
    {
      'age': '16-64',
      'healthConditions': '1+ high risk medical conditions',
      'phase': '1c.8',
    },
  ],

  'phases': {
    '1a': {
      'startDate': '2021-01-15',
    },
    '1b': {
      'startDate': '2021-01-15',
    },
    '1c': {
      'startDate': '',
    },
  },

  'resources': {
    'COVID-19 Vaccine Priority Groups':
      'https://www.health.nd.gov/covid-19-vaccine-priority-groups',
    'Phase 1B Started':
      'https://www.newscenter1.tv/north-dakota-entering-2nd-phase-of-vaccine-priority-groups/',
  },
};

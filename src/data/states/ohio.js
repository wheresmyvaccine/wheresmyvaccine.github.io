// For an example and instructions on editing, go to the below URL
// https://github.com/wheresmyvaccine/wheresmyvaccine.github.io/blob/main/src/data/states/README.md

export default {
  'livingSettings': {
    'genericOptions': [

    ],
    'genericPhaseMap': {
      'Long term care facility': '1a',
      'Other congregate care facility (i.e. treatment centers, psychiatric hospitals)': '1a',
      'Group living facility (i.e. homeless shelter, migrant camp)': '1a',
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
      'Healthcare': '1a',
      'Education or child care': '1b',
    },
    'genericSpecificMap': {

    },
    'specificOptionsPhaseMap': {

    },
  },

  'healthConditions': {
    'genericOptions': [

    ],
    'genericPhaseMap': {
      'Yes': '1a',

    },
    'genericSpecificMap': {

    },
    'specificOptionsPhaseMap': {

    },
  },

  'agePhaseMap': {
    '65+': '1a',
  },

  'combinations': [

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
    'COVID-19 Vaccination Program': 'https://coronavirus.ohio.gov/wps/portal/gov/covid-19/covid-19-vaccination-program',
  },
};

// 1A		Frontline healthcare workers, nursing homes, assisted living facilities, psychiatric hospitals, Ohio veterans homes, EMS responders, group homes or residential facilites			
//      people with developmental disabilities and/or mental heaIth disorders who live in group homes or residential facilites
//      nursing homes, assisted living facilities, psychiatric hospitals, Ohio veterans homes
// 1B		adults who work in schools	65		
//      people with congenital, developmental, or early-onset medical disorders	

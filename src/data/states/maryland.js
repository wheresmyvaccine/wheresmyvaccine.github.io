export default {
  'workSettings': {
    'Frontline Healthcare': '1a',
    'Nursing Home Residents and Staff': '1a',
    'Law Enforcement': '1a',
    'Firefighters': '1a',
    'Emergency Medical': '1a',
    'Health Care Providers': '1a',
    'Corrections': '1a',
    'Frontline Judiciary': '1a',

    'Assisted Living': '1b',
    'Other Congregate Settings': '1b',

    'Lab Services': '1c',
    'Agriculture': '1c',
    'Manufacturing': '1c',
    'Postal': '1c',

    'Critical Utilities': '2',
    'Transportation': '2',
    'Food Services': '2',
  },
  'age': {
    '75+': '1b',

    '65-74': '1c',

    '16-64': '2',
  },
  'healthConditions': {},
  'combinations': {},
  'phases': {
    '1a': { 'startDate': '' },
    '1b': { 'startDate': '' },
    '1c': { 'startDate': '' },
    '2': { 'startDate': '' },
    '3': { 'startDate': '' },
  },
};

// Phase 1A
// Maryland	1A		Frontline Healthcare, Nursing Home Residents and Staff, Law Enforcement, Firefighters, Emergency Medical, Health Care Providers, Corrections, Frontline Judiciary

// Phase 1B
// Maryland	1B			75	999
// Maryland	1B		Assisted Living, Other Congregate Settings

// Phase 1C
// Maryland	1C			65	74
// Maryland	1C		Essential Workers in Lab Services, Agriculture, Manufacturing, Postal, etc

// Phase 2
// Maryland	2			16	64	Increased risk of severe COVID-19 illness
// Maryland	2		Essential Workers in Critical Utilities, Transportation, Food Service, etc

// Phase 3
// Maryland	3		Everyone Else

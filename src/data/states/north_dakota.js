export default {
  'workSettings': {
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
  'age': {
    '75+': '1b.1',
    '65+': '1b.5',
  },
  'healthConditions': {
    '2+ high risk medical conditions': '1b.6',
    '1+ high risk medical conditions': '',
    'none': '',
  },
  'combinations': [
    { 'workSetting': '', 'age': '65-74', 'healthConditions': '2+ high risk medical conditions', 'phase': '1b.2' },
    { 'workSetting': '', 'age': '65+', 'healthConditions': '1+ high risk medical conditions', 'phase': '1b.2' },
    { 'workSetting': '', 'age': '16-64', 'healthConditions': '1+ high risk medical conditions', 'phase': '1c.8' },
  ],
  'phases': {
    '1a': { 'startDate': '' },
    '1b': { 'startDate': '' },
    '1c': { 'startDate': '' },
  },
};

// Phase 1A
// North Dakota	1A	Healthcare, First Responders, Long Term Care

// Phase 1B
// North Dakota	1B	1		75	999
// North Dakota	1B	2		65	74	2+ high risk medical conditions
// North Dakota	1B	3	Corrections, Group Homes, Treatment Centers, Homeless Shelters, Other Congregate Settings
// North Dakota	1B	4		65	999	1+ high risk medical conditions
// North Dakota	1B	5		65	999
// North Dakota	1B	6				2+ high risk medical conditions
// North Dakota	1B	7	Child care workers
// North Dakota	1B	8	Workers at Preschool through 12th grade

// Phase 1C
// North Dakota	1C	1	National Guard
// North Dakota	1C	2	Food access workers (excluding restaurant workers)
// North Dakota	1C	3	Public safety answering points (911)
// North Dakota	1C	4	COVID Vaccine Dev/Supply Manufacturing
// North Dakota	1C	5	Non-1A healthcare/public health workers
// North Dakota	1C	6	Free standing clinical laundries
// North Dakota	1C	7	Public transit (bus, taxi, ride-share, etc)
// North Dakota	1C	8		16	64	1+ high risk medical conditions
// North Dakota	1C	9	Blood bank workers not previously vaccinated
// North Dakota	1C	10	Information Technology
// North Dakota	1C	11	All other essential workers per Cybersecurity and Infrastructure Security Agency (CISA)

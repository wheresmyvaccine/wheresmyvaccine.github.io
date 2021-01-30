# State Data

## Data Example

```
export default {
  'genericLivingSettings': [

  ],
  'specificLivingSettings': {

  },
  'livingSettings': {
    'Long Term Care': '1a',
  },

  'genericWorkSettings': [

  ],
  'specificWorkSettings': {

  },
  'workSettings': {
    'Healthcare': '1a',
  },

  'age': {

  },

  'genericHealthConditions': [

  ],
  'specificHealthConditions': {

  },
  'healthConditions': {
    '2+ high risk medical conditions': '1b.6',
    '1+ high risk medical conditions': '',
    'none': '',
  },

  'combinations': [
    {
      'age': 'number range',
      'healthConditions': 'a health condition',
      'livingSettings': 'a living setting',
      'workSettings': 'a work setting',
      'phase': 'phase.inPhasePriority',
    },

    // this combination is for someone who is 65 or older AND has at least 1 high risk medical condition AND lives in a group home AND works in a school.
    // this combination would mean someone is in phase 1b, with an in phase priority of 2
    {
      'age': '65+',
      'healthConditions': '1+ high risk medical conditions',
      'livingSettings': 'group home',
      'workSettings': 'school',
      'phase': '1b.2',
    },

    // this combination is for someone 16 to 64 AND has at least 1 high risk medical condition.
    // this combination would mean someone is in phase 1c, with no in phase priority
    {
      'age': '16-64',
      'healthConditions': '1+ high risk medical conditions',
      'phase': '1c',
    },
  ],

  'phases': {
    '1a': {
      'startDate': '',
    },
    '1b': {
      'startDate': '',
    },
  },

  'resources': {
    'Name of Resource': 'URL of Resource',

    'CDC COVID-19 ACIP Vaccine Recommendations': 'https://www.cdc.gov/vaccines/hcp/acip-recs/vacc-specific/covid-19.html',
  },
};
```

## Choose a State's Data to Edit

- [Edit Alabama](/wheresmyvaccine/wheresmyvaccine.github.io/edit/main/src/data/states/alabama.js)
- [Edit Alaska](/wheresmyvaccine/wheresmyvaccine.github.io/edit/main/src/data/states/alaska.js)
- [Edit Arizona](/wheresmyvaccine/wheresmyvaccine.github.io/edit/main/src/data/states/arizona.js)
- [Edit Arkansas](/wheresmyvaccine/wheresmyvaccine.github.io/edit/main/src/data/states/arkansas.js)
- [Edit California](/wheresmyvaccine/wheresmyvaccine.github.io/edit/main/src/data/states/california.js)
- [Edit Colorado](/wheresmyvaccine/wheresmyvaccine.github.io/edit/main/src/data/states/colorado.js)
- [Edit Connecticut](/wheresmyvaccine/wheresmyvaccine.github.io/edit/main/src/data/states/connecticut.js)
- [Edit Delaware](/wheresmyvaccine/wheresmyvaccine.github.io/edit/main/src/data/states/delaware.js)
- [Edit District Of Columbia](/wheresmyvaccine/wheresmyvaccine.github.io/edit/main/src/data/states/district_of_columbia.js)
- [Edit Florida](/wheresmyvaccine/wheresmyvaccine.github.io/edit/main/src/data/states/florida.js)
- [Edit Georgia](/wheresmyvaccine/wheresmyvaccine.github.io/edit/main/src/data/states/georgia.js)
- [Edit Hawaii](/wheresmyvaccine/wheresmyvaccine.github.io/edit/main/src/data/states/hawaii.js)
- [Edit Idaho](/wheresmyvaccine/wheresmyvaccine.github.io/edit/main/src/data/states/idaho.js)
- [Edit Illinois](/wheresmyvaccine/wheresmyvaccine.github.io/edit/main/src/data/states/illinois.js)
- [Edit Index](/wheresmyvaccine/wheresmyvaccine.github.io/edit/main/src/data/states/index.js)
- [Edit Indiana](/wheresmyvaccine/wheresmyvaccine.github.io/edit/main/src/data/states/indiana.js)
- [Edit Iowa](/wheresmyvaccine/wheresmyvaccine.github.io/edit/main/src/data/states/iowa.js)
- [Edit Kansas](/wheresmyvaccine/wheresmyvaccine.github.io/edit/main/src/data/states/kansas.js)
- [Edit Kentucky](/wheresmyvaccine/wheresmyvaccine.github.io/edit/main/src/data/states/kentucky.js)
- [Edit Louisiana](/wheresmyvaccine/wheresmyvaccine.github.io/edit/main/src/data/states/louisiana.js)
- [Edit Maine](/wheresmyvaccine/wheresmyvaccine.github.io/edit/main/src/data/states/maine.js)
- [Edit Maryland](/wheresmyvaccine/wheresmyvaccine.github.io/edit/main/src/data/states/maryland.js)
- [Edit Massachusetts](/wheresmyvaccine/wheresmyvaccine.github.io/edit/main/src/data/states/massachusetts.js)
- [Edit Michigan](/wheresmyvaccine/wheresmyvaccine.github.io/edit/main/src/data/states/michigan.js)
- [Edit Minnesota](/wheresmyvaccine/wheresmyvaccine.github.io/edit/main/src/data/states/minnesota.js)
- [Edit Mississippi](/wheresmyvaccine/wheresmyvaccine.github.io/edit/main/src/data/states/mississippi.js)
- [Edit Missouri](/wheresmyvaccine/wheresmyvaccine.github.io/edit/main/src/data/states/missouri.js)
- [Edit Montana](/wheresmyvaccine/wheresmyvaccine.github.io/edit/main/src/data/states/montana.js)
- [Edit Nebraska](/wheresmyvaccine/wheresmyvaccine.github.io/edit/main/src/data/states/nebraska.js)
- [Edit Nevada](/wheresmyvaccine/wheresmyvaccine.github.io/edit/main/src/data/states/nevada.js)
- [Edit New Hampshire](/wheresmyvaccine/wheresmyvaccine.github.io/edit/main/src/data/states/new_hampshire.js)
- [Edit New Jersey](/wheresmyvaccine/wheresmyvaccine.github.io/edit/main/src/data/states/new_jersey.js)
- [Edit New Mexico](/wheresmyvaccine/wheresmyvaccine.github.io/edit/main/src/data/states/new_mexico.js)
- [Edit New York](/wheresmyvaccine/wheresmyvaccine.github.io/edit/main/src/data/states/new_york.js)
- [Edit North Carolina](/wheresmyvaccine/wheresmyvaccine.github.io/edit/main/src/data/states/north_carolina.js)
- [Edit North Dakota](/wheresmyvaccine/wheresmyvaccine.github.io/edit/main/src/data/states/north_dakota.js)
- [Edit Ohio](/wheresmyvaccine/wheresmyvaccine.github.io/edit/main/src/data/states/ohio.js)
- [Edit Oklahoma](/wheresmyvaccine/wheresmyvaccine.github.io/edit/main/src/data/states/oklahoma.js)
- [Edit Oregon](/wheresmyvaccine/wheresmyvaccine.github.io/edit/main/src/data/states/oregon.js)
- [Edit Pennsylvania](/wheresmyvaccine/wheresmyvaccine.github.io/edit/main/src/data/states/pennsylvania.js)
- [Edit Rhode Island](/wheresmyvaccine/wheresmyvaccine.github.io/edit/main/src/data/states/rhode_island.js)
- [Edit South Carolina](/wheresmyvaccine/wheresmyvaccine.github.io/edit/main/src/data/states/south_carolina.js)
- [Edit South Dakota](/wheresmyvaccine/wheresmyvaccine.github.io/edit/main/src/data/states/south_dakota.js)
- [Edit Tennessee](/wheresmyvaccine/wheresmyvaccine.github.io/edit/main/src/data/states/tennessee.js)
- [Edit Texas](/wheresmyvaccine/wheresmyvaccine.github.io/edit/main/src/data/states/texas.js)
- [Edit Utah](/wheresmyvaccine/wheresmyvaccine.github.io/edit/main/src/data/states/utah.js)
- [Edit Vermont](/wheresmyvaccine/wheresmyvaccine.github.io/edit/main/src/data/states/vermont.js)
- [Edit Virginia](/wheresmyvaccine/wheresmyvaccine.github.io/edit/main/src/data/states/virginia.js)
- [Edit Washington](/wheresmyvaccine/wheresmyvaccine.github.io/edit/main/src/data/states/washington.js)
- [Edit West Virginia](/wheresmyvaccine/wheresmyvaccine.github.io/edit/main/src/data/states/west_virginia.js)
- [Edit Wisconsin](/wheresmyvaccine/wheresmyvaccine.github.io/edit/main/src/data/states/wisconsin.js)
- [Edit Wyoming](/wheresmyvaccine/wheresmyvaccine.github.io/edit/main/src/data/states/wyoming.js)

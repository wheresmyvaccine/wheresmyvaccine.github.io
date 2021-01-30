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

- [Edit Alabama](https://github.com/wheresmyvaccine/wheresmyvaccine.github.io/edit/main/src/data/states/alabama.js)
- [Edit Alaska](https://github.com/wheresmyvaccine/wheresmyvaccine.github.io/edit/main/src/data/states/alaska.js)
- [Edit Arizona](https://github.com/wheresmyvaccine/wheresmyvaccine.github.io/edit/main/src/data/states/arizona.js)
- [Edit Arkansas](https://github.com/wheresmyvaccine/wheresmyvaccine.github.io/edit/main/src/data/states/arkansas.js)
- [Edit California](https://github.com/wheresmyvaccine/wheresmyvaccine.github.io/edit/main/src/data/states/california.js)
- [Edit Colorado](https://github.com/wheresmyvaccine/wheresmyvaccine.github.io/edit/main/src/data/states/colorado.js)
- [Edit Connecticut](https://github.com/wheresmyvaccine/wheresmyvaccine.github.io/edit/main/src/data/states/connecticut.js)
- [Edit Delaware](https://github.com/wheresmyvaccine/wheresmyvaccine.github.io/edit/main/src/data/states/delaware.js)
- [Edit District Of Columbia](https://github.com/wheresmyvaccine/wheresmyvaccine.github.io/edit/main/src/data/states/district_of_columbia.js)
- [Edit Florida](https://github.com/wheresmyvaccine/wheresmyvaccine.github.io/edit/main/src/data/states/florida.js)
- [Edit Georgia](https://github.com/wheresmyvaccine/wheresmyvaccine.github.io/edit/main/src/data/states/georgia.js)
- [Edit Hawaii](https://github.com/wheresmyvaccine/wheresmyvaccine.github.io/edit/main/src/data/states/hawaii.js)
- [Edit Idaho](https://github.com/wheresmyvaccine/wheresmyvaccine.github.io/edit/main/src/data/states/idaho.js)
- [Edit Illinois](https://github.com/wheresmyvaccine/wheresmyvaccine.github.io/edit/main/src/data/states/illinois.js)
- [Edit Indiana](https://github.com/wheresmyvaccine/wheresmyvaccine.github.io/edit/main/src/data/states/indiana.js)
- [Edit Iowa](https://github.com/wheresmyvaccine/wheresmyvaccine.github.io/edit/main/src/data/states/iowa.js)
- [Edit Kansas](https://github.com/wheresmyvaccine/wheresmyvaccine.github.io/edit/main/src/data/states/kansas.js)
- [Edit Kentucky](https://github.com/wheresmyvaccine/wheresmyvaccine.github.io/edit/main/src/data/states/kentucky.js)
- [Edit Louisiana](https://github.com/wheresmyvaccine/wheresmyvaccine.github.io/edit/main/src/data/states/louisiana.js)
- [Edit Maine](https://github.com/wheresmyvaccine/wheresmyvaccine.github.io/edit/main/src/data/states/maine.js)
- [Edit Maryland](https://github.com/wheresmyvaccine/wheresmyvaccine.github.io/edit/main/src/data/states/maryland.js)
- [Edit Massachusetts](https://github.com/wheresmyvaccine/wheresmyvaccine.github.io/edit/main/src/data/states/massachusetts.js)
- [Edit Michigan](https://github.com/wheresmyvaccine/wheresmyvaccine.github.io/edit/main/src/data/states/michigan.js)
- [Edit Minnesota](https://github.com/wheresmyvaccine/wheresmyvaccine.github.io/edit/main/src/data/states/minnesota.js)
- [Edit Mississippi](https://github.com/wheresmyvaccine/wheresmyvaccine.github.io/edit/main/src/data/states/mississippi.js)
- [Edit Missouri](https://github.com/wheresmyvaccine/wheresmyvaccine.github.io/edit/main/src/data/states/missouri.js)
- [Edit Montana](https://github.com/wheresmyvaccine/wheresmyvaccine.github.io/edit/main/src/data/states/montana.js)
- [Edit Nebraska](https://github.com/wheresmyvaccine/wheresmyvaccine.github.io/edit/main/src/data/states/nebraska.js)
- [Edit Nevada](https://github.com/wheresmyvaccine/wheresmyvaccine.github.io/edit/main/src/data/states/nevada.js)
- [Edit New Hampshire](https://github.com/wheresmyvaccine/wheresmyvaccine.github.io/edit/main/src/data/states/new_hampshire.js)
- [Edit New Jersey](https://github.com/wheresmyvaccine/wheresmyvaccine.github.io/edit/main/src/data/states/new_jersey.js)
- [Edit New Mexico](https://github.com/wheresmyvaccine/wheresmyvaccine.github.io/edit/main/src/data/states/new_mexico.js)
- [Edit New York](https://github.com/wheresmyvaccine/wheresmyvaccine.github.io/edit/main/src/data/states/new_york.js)
- [Edit North Carolina](https://github.com/wheresmyvaccine/wheresmyvaccine.github.io/edit/main/src/data/states/north_carolina.js)
- [Edit North Dakota](https://github.com/wheresmyvaccine/wheresmyvaccine.github.io/edit/main/src/data/states/north_dakota.js)
- [Edit Ohio](https://github.com/wheresmyvaccine/wheresmyvaccine.github.io/edit/main/src/data/states/ohio.js)
- [Edit Oklahoma](https://github.com/wheresmyvaccine/wheresmyvaccine.github.io/edit/main/src/data/states/oklahoma.js)
- [Edit Oregon](https://github.com/wheresmyvaccine/wheresmyvaccine.github.io/edit/main/src/data/states/oregon.js)
- [Edit Pennsylvania](https://github.com/wheresmyvaccine/wheresmyvaccine.github.io/edit/main/src/data/states/pennsylvania.js)
- [Edit Rhode Island](https://github.com/wheresmyvaccine/wheresmyvaccine.github.io/edit/main/src/data/states/rhode_island.js)
- [Edit South Carolina](https://github.com/wheresmyvaccine/wheresmyvaccine.github.io/edit/main/src/data/states/south_carolina.js)
- [Edit South Dakota](https://github.com/wheresmyvaccine/wheresmyvaccine.github.io/edit/main/src/data/states/south_dakota.js)
- [Edit Tennessee](https://github.com/wheresmyvaccine/wheresmyvaccine.github.io/edit/main/src/data/states/tennessee.js)
- [Edit Texas](https://github.com/wheresmyvaccine/wheresmyvaccine.github.io/edit/main/src/data/states/texas.js)
- [Edit Utah](https://github.com/wheresmyvaccine/wheresmyvaccine.github.io/edit/main/src/data/states/utah.js)
- [Edit Vermont](https://github.com/wheresmyvaccine/wheresmyvaccine.github.io/edit/main/src/data/states/vermont.js)
- [Edit Virginia](https://github.com/wheresmyvaccine/wheresmyvaccine.github.io/edit/main/src/data/states/virginia.js)
- [Edit Washington](https://github.com/wheresmyvaccine/wheresmyvaccine.github.io/edit/main/src/data/states/washington.js)
- [Edit West Virginia](https://github.com/wheresmyvaccine/wheresmyvaccine.github.io/edit/main/src/data/states/west_virginia.js)
- [Edit Wisconsin](https://github.com/wheresmyvaccine/wheresmyvaccine.github.io/edit/main/src/data/states/wisconsin.js)
- [Edit Wyoming](https://github.com/wheresmyvaccine/wheresmyvaccine.github.io/edit/main/src/data/states/wyoming.js)

const ghPages = require('gh-pages');

ghPages.publish(
  'build',
  {
    add: true,
    async beforeAdd(git) {
      return git.add('./CNAME');
    },
  },
  (error) => {
    console.error(error);
  },
);

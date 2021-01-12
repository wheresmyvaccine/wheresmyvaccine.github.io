const ghPages = require('gh-pages');

ghPages.publish('build', {}, (error) => {
  if (error) {
    console.error(error);
  }
});

const ghPages = require('gh-pages');

ghPages.publish(
  'build',
  {
    repo: `https://${process.env.GITHUB_TOKEN}@github.com/wheresmyvaccine/wheresmyvaccine.github.io.git`,
    // silent: true,
  },
  (error) => {
    if (error) {
      console.error(error);
      throw new Error(error);
    }
  },
);

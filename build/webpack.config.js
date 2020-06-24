const common = require('./webpackCommonProps');
const globEntries = require('webpack-glob-entries');

module.exports = [
  {
    ...common,
    entry: globEntries(`${__dirname}/../lib/client/entries/*`),
    externals: {
      "react": "React",
      "react-dom": "ReactDOM"
    }
  },
  {
    ...common,
    entry: {
      server: `${__dirname}/../lib/server/index.ts`
    },
    target: 'node'
  }
];

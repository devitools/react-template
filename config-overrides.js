const Path = require('path');

module.exports = function override(config, env) {
  config.resolve.alias = {
    '@devitools': Path.resolve(__dirname, './@devitools'),
    routes: Path.resolve(__dirname, './routes'),
    source: Path.resolve(__dirname, './source'),
    resources: Path.resolve(__dirname, './resources'),
    ...config.resolve.alias
  };
  // do stuff with the webpack config...
  if (env === 'development') {
    console.log('~> config', config);
  }
  return config;
};

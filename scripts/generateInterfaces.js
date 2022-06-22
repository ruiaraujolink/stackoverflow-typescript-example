const logger = require('./scriptLogger');
const OpenAPI = require('openapi-express-codegen');

(() => {
  logger.success('🚀 Starting generating interfaces...');

  OpenAPI.generate({
    input: './docs/rest-api.yaml',
    output: './src/generated',
  });

  logger.success('🎉 Interfaces generated!');
})();

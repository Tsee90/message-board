const dotenv = require('dotenv');

function init() {
  const args = process.argv.slice(2);
  const envArg = args.find((arg) => arg.startsWith('--env='));
  const environment = envArg ? envArg.split('=')[1] : 'development';

  dotenv.config({ path: `.env.${environment}` });
}

module.exports = { init };

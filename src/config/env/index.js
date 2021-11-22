const development = require('./development');
const production = require('./production');

let environment = development;
if (process.env.NODE_EMV === 'production') {
    environment = production;
}

module.exports = environment;
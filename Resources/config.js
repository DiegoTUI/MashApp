// config file

// use local server
module.exports.useLocalResponse = false;
module.exports.useFakeServer = true;
// urls
module.exports.mashoopUrl = module.exports.useFakeServer ? 'http://localhost:1234/api/' : 'http://54.246.80.107/api/';
// api key
module.exports.apiKey = 'testapikey';
// titles
module.exports.masterTitle = 'Venues';
module.exports.detailsTitle = 'Venue Details';

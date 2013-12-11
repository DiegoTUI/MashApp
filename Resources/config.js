// config file

// use local server
module.exports.useLocalResponse = false;
module.exports.useLocalServer = false;
// urls
module.exports.mashoopUrl = module.exports.useLocalServer ? 'http://localhost:8080/api/' : 'http://54.246.80.107/api/';
module.exports.mapquestGeocodingUrl = 'http://www.mapquestapi.com/geocoding/v1/address?key=Fmjtd|luubn161nu%2Crg%3Do5-90awqz&location=';
// api key
module.exports.apiKey = 'testapikey';
// titles
module.exports.masterTitle = 'Hotels';
module.exports.detailsTitle = 'Venues near your hotel';
module.exports.venueTitle = 'Venue details';

// Required libraries
require('dotenv').config(); // Load environment variables from .env file
var axios = require('axios'); // HTTP client for making requests
var fs = require('fs'); // File system module for reading files
var jsforce = require('jsforce'); // Salesforce integration library
var jwt = require('jsonwebtoken'); // JSON Web Token generation and parsing
var moment = require('moment'); // Date and time manipulation library
var querystring = require('querystring'); // Querystring manipulation
var url = require('url'); // URL manipulation

// Load private key from PEM file
var privatekey = fs.readFileSync(process.env.PEM_FILE_LOCATION);

// Function to stream using JWT authentication
function jwtStreamer() {
    console.log("[+] Logging in With " + process.env.USERNAME);

    // JWT payload parameters
    var jwtparams = {
        iss: process.env.CONSUMER_KEY,
        prn: process.env.USERNAME,
        aud: process.env.TEST_URL,
        exp: parseInt(moment().add(2, 'minutes').format('X')) // JWT expiration time
    };

    // Generate JWT token using private key
    var token = jwt.sign(jwtparams, privatekey, { algorithm: 'RS256' });

    // OAuth token request parameters
    var params = {
        grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
        assertion: token
    };

    // Construct OAuth token URL
    var token_url = new url.URL('/services/oauth2/token', process.env.TEST_URL).toString();

    // Request OAuth token using JWT assertion
    axios.post(token_url, querystring.stringify(params))
        .then(function (res) {
            // Create Salesforce connection using obtained OAuth token
            var conn = new jsforce.Connection({
                instanceUrl: res.data.instance_url,
                accessToken: res.data.access_token
            });

            // Create a replay extension for streaming
            let replayExt = new jsforce.StreamingExtension.Replay(process.env.CHANNEL_URL, "-1");

            // Create Faye client for streaming
            let fayeClient = conn.streaming.createClient([replayExt]);
            console.log(`[+] Listening to ${process.env.CHANNEL_URL} :-`);

            // Subscribe to a channel and log incoming data
            fayeClient.subscribe(process.env.CHANNEL_URL, data => {
                console.log(data);
            });
        });
}

// Call the streaming function
jwtStreamer();

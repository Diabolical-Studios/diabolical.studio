const axios = require('axios');
const process = require('process');

exports.handler = async (event) => {
    if (event.httpMethod !== 'GET') {
        return {
            statusCode: 405,
            body: JSON.stringify({ message: "Method Not Allowed" })
        };
    }

    // Retrieve player_name from query string parameters
    const playerName = event.queryStringParameters.player_name;
    // Retrieve API key from the headers
    const apiKey = event.headers['x-api-key'];

    // Validate the API key
    if (apiKey !== process.env.API_KEY) {
        return {
            statusCode: 401,
            body: JSON.stringify({ message: "Unauthorized" })
        };
    }

    // Placeholder URL, update this with your actual endpoint that checks for the existence of a username
    const queryUrl = `https://g437e9ea50f2c14-leaderboard.adb.eu-frankfurt-1.oraclecloudapps.com/ords/admin/leaderboard/check_username?player_name=${encodeURIComponent(playerName)}`;

    try {
        const response = await axios.get(queryUrl);
        // Assume the Oracle endpoint returns JSON with an 'exists' field
        const exists = response.data.exists; // Make sure your Oracle backend is set up to return this field

        return {
            statusCode: 200,
            headers: { 'Content-Type': 'text/plain' },
            body: exists.toString()
        };
    } catch (error) {
        console.error('Error checking player name:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: "Internal Server Error" })
        };
    }
};

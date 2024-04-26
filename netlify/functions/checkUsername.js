const axios = require('axios');
const process = require('process');

exports.handler = async (event) => {
    if (event.httpMethod !== 'GET') {
        return {
            statusCode: 405,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: "Method Not Allowed" })
        };
    }

    // Retrieve player_name from path parameters if you are using API Gateway's proxy integration
    const playerName = event.pathParameters.player_name; // Make sure the API Gateway is set up to parse pathParameters

    // Retrieve API key from the headers
    const apiKey = event.headers['x-api-key'];

    // Validate the API key
    if (apiKey !== process.env.API_KEY) {
        return {
            statusCode: 401,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: "Unauthorized" })
        };
    }

    // Update this URL to include the player_name in the path
    const queryUrl = `https://g437e9ea50f2c14-leaderboard.adb.eu-frankfurt-1.oraclecloudapps.com/ords/admin/leaderboard/checkUsername/${encodeURIComponent(playerName)}`;

    try {
        const response = await axios.get(queryUrl, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        // Assume the Oracle endpoint returns JSON with an 'exists' field
        const exists = response.data.exists; // Ensure your Oracle backend is set up to return this field

        return {
            statusCode: 200,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ exists: exists })
        };

    } catch (error) {
        console.error('Error checking player name:', error.message);
        return {
            statusCode: 500,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: "Internal Server Error", error: error.message })
        };
    }
};

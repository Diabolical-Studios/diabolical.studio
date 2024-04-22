const axios = require('axios');

exports.handler = async (event) => {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: JSON.stringify({ message: 'Method Not Allowed' }) };
    }

    // Parse the body to get the form data
    const params = JSON.parse(event.body);
    const { api_key, score, username } = params;

    // Environment variables for API key and game ID
    const expectedApiKey = process.env.API_KEY;

    // Validate API Key and Game ID
    if (api_key !== expectedApiKey) {
        return { statusCode: 401, body: JSON.stringify({ message: 'Unauthorized - Invalid API Key' }) };
    }

    const data = {
        player_name: username,
        score: score
    };

    try {
        const response = await axios.post('https://g437e9ea50f2c14-leaderboard.adb.eu-frankfurt-1.oraclecloudapps.com/ords/admin/leaderboard/scores/', data, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return {
            statusCode: 201,
            body: JSON.stringify({ message: "Score successfully added", data: response.data })
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: "Failed to post score", error: error.message })
        };
    }
};

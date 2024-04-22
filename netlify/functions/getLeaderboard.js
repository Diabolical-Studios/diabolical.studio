const axios = require('axios');

exports.handler = async (event) => {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: JSON.stringify({ message: 'Method Not Allowed' }) };
    }

    // Parse the body to get the form data
    const params = JSON.parse(event.body);
    const { api_key, board_id } = params;

    // Environment variables for API key and game ID
    const expectedApiKey = process.env.API_KEY;
    const expectedGameId = process.env.GAME_ID;

    if (api_key !== expectedApiKey || board_id !== expectedGameId) {
        return { statusCode: 401, body: JSON.stringify({ message: 'Unauthorized - Invalid API Key or Board ID' }) };
    }

    try {
        const response = await axios.get('https://g437e9ea50f2c14-leaderboard.adb.eu-frankfurt-1.oraclecloudapps.com/ords/admin/leaderboard/scores/', {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return {
            statusCode: 200,
            body: JSON.stringify({ data: response.data })
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: "Failed to fetch leaderboard", error: error.message })
        };
    }
};

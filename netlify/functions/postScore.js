const axios = require('axios');

exports.handler = async (event) => {
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: JSON.stringify({ message: "Method Not Allowed" })
        };
    }

    const { player_name, score, game_id } = JSON.parse(event.body);
    const apiKey = event.headers['x-api-key']; // Extract API key from headers

    // Check if the correct API Key was provided
    if (apiKey !== process.env.API_KEY) {
        return {
            statusCode: 401,
            body: JSON.stringify({ message: "Unauthorized" })
        };
    }

    const data = {
        player_name: player_name,
        score: score,
        game_id: game_id
    };

    try {
        const response = await axios.post('https://g437e9ea50f2c14-diabolicalleaderboards.adb.eu-frankfurt-1.oraclecloudapps.com/ords/admin/leaderboard/scores/', data, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return {
            statusCode: 201,
            body: JSON.stringify({ message: "Score successfully added", data: response.data })
        };
    } catch (error) {
        console.error('Error posting score:', error);
        return {
            statusCode: error.response.status || 500,
            body: JSON.stringify({ message: "Failed to post score" })
        };
    }
};

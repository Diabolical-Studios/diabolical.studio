// netlify/functions/updateScore.js
const axios = require('axios');
const process = require('process');

exports.handler = async (event) => {
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: JSON.stringify({ message: "Method Not Allowed" })
        };
    }

    const { player_name, score, game_id, apiKey } = JSON.parse(event.body);

    if (apiKey !== process.env.API_KEY) {
        return {
            statusCode: 401,
            body: JSON.stringify({ message: "Unauthorized" })
        };
    }

    const updateUrl = `https://g437e9ea50f2c14-leaderboard.adb.eu-frankfurt-1.oraclecloudapps.com/ords/admin/leaderboard/update_score`;

    const data = {
        player_name,
        score,
        game_id
    };

    try {
        const response = await axios.post(updateUrl, data, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return {
            statusCode: 201,
            body: JSON.stringify({ message: "Score updated successfully", data: response.data })
        };
    } catch (error) {
        console.error('Error updating score:', error);
        return {
            statusCode: error.response.status || 500,
            body: JSON.stringify({ message: "Failed to update score" })
        };
    }
};

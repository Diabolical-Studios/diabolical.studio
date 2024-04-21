// netlify/functions/postScore.js
const axios = require('axios');

exports.handler = async (event) => {
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: JSON.stringify({ message: "Method Not Allowed" })
        };
    }

    const { player_name, score } = JSON.parse(event.body);
    const data = {
        player_name: player_name,
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
        console.error('Error posting score:', error);
        return {
            statusCode: error.response.status || 500,
            body: JSON.stringify({ message: "Failed to post score" })
        };
    }
};

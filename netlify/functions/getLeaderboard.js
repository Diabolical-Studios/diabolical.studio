const axios = require('axios');

exports.handler = async (event) => {
    // Check if the correct API Key was provided
    if (event.headers['x-api-key'] !== process.env.API_KEY) {
        return {
            statusCode: 401,
            body: JSON.stringify({ message: "Unauthorized" })
        };
    }

    // Extract game_id from the query parameters
    const game_id = event.queryStringParameters.game_id;

    if (!game_id) {
        return {
            statusCode: 400,
            body: JSON.stringify({ message: "game_id not provided" })
        };
    }

    try {
        // Modify the URL to pass the game_id as a query parameter to the Oracle endpoint
        const response = await axios.get(`https://g437e9ea50f2c14-diabolicalleaderboards.adb.eu-frankfurt-1.oraclecloudapps.com/ords/admin/leaderboard/scores/${encodeURIComponent(game_id)}`);

        return {
            statusCode: 200,
            body: JSON.stringify(response.data.items) // Assuming the response contains a "items" field with the leaderboard data
        };
    } catch (error) {
        console.error('Error fetching leaderboard:', error);
        return {
            statusCode: error.response.status || 500,
            body: JSON.stringify({ message: "Failed to fetch leaderboard" })
        };
    }
};

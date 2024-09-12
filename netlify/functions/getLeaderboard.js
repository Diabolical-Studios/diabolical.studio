const axios = require('axios');

exports.handler = async (event) => {
    // Check if the correct API Key was provided
    if (event.headers['x-api-key'] !== process.env.API_KEY) {
        return {
            statusCode: 401,
            body: JSON.stringify({ message: "Unauthorized" })
        };
    }

    try {
        const response = await axios.get('https://g437e9ea50f2c14-diabolicalleaderboards.adb.eu-frankfurt-1.oraclecloudapps.com/ords/admin/leaderboard/scores/');
        return {
            statusCode: 200,
            body: JSON.stringify(response.data.items)
        };
    } catch (error) {
        console.error('Error fetching leaderboard:', error);
        return {
            statusCode: error.response.status || 500,
            body: JSON.stringify({ message: "Failed to fetch leaderboard" })
        };
    }
};

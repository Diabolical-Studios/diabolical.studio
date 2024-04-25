// netlify/functions/checkUsername.js
const axios = require('axios');
const process = require('process');

exports.handler = async (event) => {
    if (event.httpMethod !== 'GET') {
        return {
            statusCode: 405,
            body: JSON.stringify({ message: "Method Not Allowed" })
        };
    }

    const username = event.queryStringParameters.username;
    const apiKey = event.headers['x-api-key'];

    if (apiKey !== process.env.API_KEY) {
        return {
            statusCode: 401,
            body: JSON.stringify({ message: "Unauthorized" })
        };
    }

    const queryUrl = `https://g437e9ea50f2c14-leaderboard.adb.eu-frankfurt-1.oraclecloudapps.com/ords/admin/leaderboard/check_username?username=${encodeURIComponent(username)}`;

    try {
        const response = await axios.get(queryUrl);
        const exists = response.data.count > 0;  // Assuming the query returns a count of records that match the username
        return {
            statusCode: 200,
            body: JSON.stringify({ exists })
        };
    } catch (error) {
        console.error('Error checking username:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: "Internal Server Error" })
        };
    }
};

exports.handler = async (event) => {
    if (event.httpMethod !== 'GET') { // Ensure it's a GET request
        return {
            statusCode: 405,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: "Method Not Allowed" })
        };
    }

    const playerName = event.pathParameters.player_name; // Retrieve player_name from path parameters

    const apiKey = event.headers['x-api-key'];
    if (apiKey !== process.env.API_KEY) { // Validate the API key
        return {
            statusCode: 401,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: "Unauthorized" })
        };
    }

    const queryUrl = `https://g437e9ea50f2c14-leaderboard.adb.eu-frankfurt-1.oraclecloudapps.com/ords/admin/leaderboard/checkUsername/${encodeURIComponent(playerName)}`;

    try {
        const response = await axios.get(queryUrl, {
            headers: { 'Content-Type': 'application/json' }
        });

        const exists = response.data.exists; // Assume the Oracle endpoint returns JSON with an 'exists' field

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

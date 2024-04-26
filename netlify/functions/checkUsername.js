exports.handler = async (event) => {
    try {
        if (event.httpMethod !== 'GET') {
            return {
                statusCode: 405,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: "Method Not Allowed" })
            };
        }

        const pathSegments = event.path.split('/');
        const playerName = pathSegments[pathSegments.length - 1]; // Get the last segment of the path

        if (!playerName) {
            return {
                statusCode: 400,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: "Player name not provided" })
            };
        }

        const apiKey = event.headers['x-api-key'];
        if (apiKey !== process.env.API_KEY) {
            return {
                statusCode: 401,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: "Unauthorized" })
            };
        }

        const queryUrl = `https://g437e9ea50f2c14-leaderboard.adb.eu-frankfurt-1.oraclecloudapps.com/ords/admin/leaderboard/checkUsername/${encodeURIComponent(playerName)}`;

        const response = await axios.get(queryUrl, {
            headers: { 'Content-Type': 'application/json' }
        });

        const exists = response.data.exists;

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

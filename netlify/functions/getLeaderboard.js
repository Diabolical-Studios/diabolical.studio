// netlify/functions/getLeaderboard.js
const fetch = require('node-fetch');

const handler = async (event, context) => {
    try {
        const response = await fetch(process.env.ORACLE_REST_ENDPOINT + '/leaderboard', {
            headers: { 'Authorization': `Bearer ${process.env.ORACLE_AUTH_TOKEN}` }
        });
        const data = await response.json();
        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data.items)
        };
    } catch (err) {
        console.error(err);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: "Failed to fetch leaderboard" })
        };
    }
};

exports.handler = handler;

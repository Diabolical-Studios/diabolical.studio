// netlify/functions/postScore.js
const oracledb = require('oracledb');
const dbConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    connectString: process.env.DB_CONNECT_STRING
};

exports.handler = async (event) => {
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: JSON.stringify({ message: "Method Not Allowed" })
        };
    }

    try {
        const data = JSON.parse(event.body); // Ensure this doesn't throw 'Unexpected token' error
        const { player_name, score } = data;

        let connection = await oracledb.getConnection(dbConfig);
        const sql = `INSERT INTO leaderboard (player_name, score) VALUES (:player_name, :score)`;
        await connection.execute(sql, { player_name, score }, { autoCommit: true });

        await connection.close();

        return {
            statusCode: 201,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: "Score successfully added" })
        };
    } catch (err) {
        console.error('Error inserting score', err);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: "Failed to submit score", error: err.message })
        };
    }
};

// netlify/functions/postScore.js
const oracledb = require('oracledb');
const dbConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    connectString: process.env.DB_CONNECT_STRING
};

const handler = async (event) => {
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: JSON.stringify({ message: "Method Not Allowed" })
        };
    }

    const data = JSON.parse(event.body);
    const { player_name, score } = data;

    let connection;
    try {
        connection = await oracledb.getConnection(dbConfig);
        const sql = `INSERT INTO leaderboard (player_name, score) VALUES (:player_name, :score)`;
        const binds = { player_name: player_name, score: score };
        const options = { autoCommit: true };
        await connection.execute(sql, binds, options);

        return {
            statusCode: 201,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: "Score successfully added" })
        };
    } catch (err) {
        console.error(err);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: "Failed to submit score" })
        };
    } finally {
        if (connection) {
            try {
                await connection.close();
            } catch (err) {
                console.error(err);
            }
        }
    }
};

exports.handler = handler;

const oracledb = require('oracledb');
require('dotenv').config();

exports.handler = async (event) => {
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: "Method Not Allowed" })
        };
    }

    let connection;
    try {
        const body = JSON.parse(event.body);
        const { player_name, score } = body;

        oracledb.initOracleClient({ libDir: process.env.ORACLE_CLIENT_LIB_DIR });  // Ensure the Oracle client libraries are set up if necessary
        connection = await oracledb.getConnection({
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            connectionString: process.env.DB_CONNECTION_STRING
        });

        const result = await connection.execute(
            `INSERT INTO leaderboard (player_name, score) VALUES (:player_name, :score)`,
            { player_name, score },
            { autoCommit: true }
        );

        return {
            statusCode: 201,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: "Score successfully added" })
        };
    } catch (err) {
        console.error('Error while inserting score:', err);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: "Failed to submit score", error: err.message })
        };
    } finally {
        if (connection) {
            try {
                await connection.close();
            } catch (err) {
                console.error('Error closing connection:', err);
            }
        }
    }
};

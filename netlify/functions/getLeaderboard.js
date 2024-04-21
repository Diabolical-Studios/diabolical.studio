const oracledb = require('oracledb');
require('dotenv').config();

const handler = async (event) => {
    let connection;
    try {
        oracledb.initOracleClient({ libDir: process.env.ORACLE_CLIENT_LIB_DIR });
        connection = await oracledb.getConnection({
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            connectionString: process.env.DB_CONNECTION_STRING
        });
        const result = await connection.execute(`SELECT * FROM leaderboard ORDER BY score DESC`);
        return {
            statusCode: 200,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(result.rows)
        };
    } catch (err) {
        console.error('Database connection error:', err);
        return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
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

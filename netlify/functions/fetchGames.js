const oracledb = require('oracledb');

exports.handler = async function (event, context) {
    //oracledb.initOracleClient({ libDir: process.env.ORACLE_CLIENT_LIB_DIR });
    let connection;

    try {
        connection = await oracledb.getConnection({
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            connectionString: process.env.DB_CONNECTION_STRING
        });

        const result = await connection.execute(`SELECT * FROM games`);
        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(result.rows)
        };
    } catch (err) {
        console.error('Error fetching games:', err);
        return {
            statusCode: 500,
            body: 'Failed to fetch games'
        };
    } finally {
        if (connection) {
            await connection.close();
        }
    }
};

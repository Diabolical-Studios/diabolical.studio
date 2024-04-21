require('dotenv').config();

const express = require('express');
const oracledb = require('oracledb');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Oracle DB configuration
const dbConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    connectString: process.env.DB_CONNECT_STRING
};

// Routes
app.get('/leaderboard', async (req, res) => {
    let connection;
    try {
        connection = await oracledb.getConnection(dbConfig);
        const result = await connection.execute(`SELECT * FROM leaderboard ORDER BY score DESC FETCH FIRST 10 ROWS ONLY`);
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error fetching leaderboard');
    } finally {
        if (connection) {
            try {
                await connection.close();
            } catch (err) {
                console.error(err);
            }
        }
    }
});

app.post('/leaderboard', async (req, res) => {
    const { player_name, score } = req.body;
    let connection;
    try {
        connection = await oracledb.getConnection(dbConfig);
        const result = await connection.execute(
            `INSERT INTO leaderboard (player_name, score) VALUES (:player_name, :score)`,
            [player_name, score],
            { autoCommit: true }
        );
        res.status(201).send('Score submitted');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error submitting score');
    } finally {
        if (connection) {
            try {
                await connection.close();
            } catch (err) {
                console.error(err);
            }
        }
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

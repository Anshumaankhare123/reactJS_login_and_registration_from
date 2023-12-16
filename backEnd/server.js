// backend code for singin and singon

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql2 = require('mysql2');
const bcrypt = require('bcryptjs');


const app = express();
const port = process.env.PORT || 5000;

//Middleware 
app.use(cors());
app.use(bodyParser.json());

// Mysql Connection

const connection = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: '2424',
    database: 'your_database'
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

//registration point to registra the users
app.post('/register', async (req, res) => {
    const { username, password } = req.body;

    // hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    //store user data into database
    const insertQurey = 'INSERT INTO users (username, password) VALUES (?, ?)';
    connection.query(insertQurey, [username, hashedPassword], (err, results) => {
        if (err) {
            console.error('Error Registration User: ', err);
            res.status(500).json({ error: 'Error Registration User' });
            return;
        }
        console.log('User Registration successfully');
        res.status(200).json({ message: 'User Registration Successfully' });

    });
});

//Login point to login the users
app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    // Retrieve user from the database
    const selectQuery = 'SELECT * FROM users WHERE username = ?';
    connection.query(selectQuery, [username], async (err, results) => {
        if (err) {
            console.error('Error Retreving user : ', err);
            res.status(500).json({ error: 'Error retrieving usser' });
            console.log('error11');
            return;
        }

        if (results.length === 0) {
            res.status(401).json({ error: 'Invalid Credentials' });
            console.log('error1');
            return;
        }

        const user = results[0];
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            res.status(401).json({ error: 'Invalid credentials' });
            console.log('error2');
            return;
        }

        res.status(200).json({ message: 'Login successful' });
    });

});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
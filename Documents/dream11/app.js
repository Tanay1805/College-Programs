// Import the required libraries
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const readline = require('readline');

// Create an instance of the Express application
const app = express();
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.set('strictQuery', false);
mongoose.connect('mongodb://localhost:27017/Dream11', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

// Define a Mongoose schema and model for the `playerScore` collection
const playerScoreSchema = new mongoose.Schema({
    name: { type: String, required: true },
    intake: { type: Number, required: true },
    point: { type: Number, required: true },
    position: { type: Number, required: true },
    timestamp: { type: Date, default: Date.now },
});

const PlayerScore = mongoose.model('PlayerScore', playerScoreSchema);

// Function to calculate points
const calculatePoints = (intake, position) => {
    let point = 0;
    if (intake === 4) point = 2;
    else if (intake === 6) point = 3;
    else if (intake === 1) point = 0.5;
    else if (intake === 2) point = 1;

    if (position === 1) point *= 2; // Captain bonus
    else if (position === 2) point *= 1.5; // Vice-captain bonus

    return point;
};

// Function to calculate points and save using CLI
const calculateAndSavePlayerData = async () => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    rl.question('Enter player name: ', (name) => {
        rl.question('What did he hit (1, 2, 4, or 6)? ', (intake) => {
            intake = parseInt(intake);
            if (isNaN(intake) || ![1, 2, 4, 6].includes(intake)) {
                console.log('Invalid input for intake.');
                rl.close();
                return;
            }

            rl.question(
                'Enter the position of the player (1 for Captain, 2 for Vice-Captain, other for regular player): ',
                async (position) => {
                    position = parseInt(position);
                    if (isNaN(position)) {
                        console.log('Invalid input for position.');
                        rl.close();
                        return;
                    }

                    const point = calculatePoints(intake, position);
                    console.log('The total number of points for the player is:', point);

                    try {
                        const newPlayer = new PlayerScore({ name, intake, point, position });
                        await newPlayer.save();
                        console.log('Player data saved to database:', newPlayer);
                    } catch (err) {
                        console.error('Error saving player data to database:', err);
                    }
                    rl.close();
                }
            );
        });
    });
};

// POST endpoint for saving player data via API
app.post('/players', async (req, res) => {
    const { name, intake, position } = req.body;

    if (!name || !intake || !position) {
        return res.status(400).json({ message: 'All fields are required: name, intake, position' });
    }

    try {
        const point = calculatePoints(intake, position);
        const newPlayer = new PlayerScore({ name, intake, point, position });
        await newPlayer.save();

        res.status(201).json({
            message: 'Player data saved successfully!',
            newPlayer,
        });
    } catch (error) {
        console.error('Error saving player data:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Run the CLI or server as needed
const MODE = process.env.MODE || 'CLI';
if (MODE === 'CLI') {
    calculateAndSavePlayerData();
} else {
    const PORT = 3000;
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}

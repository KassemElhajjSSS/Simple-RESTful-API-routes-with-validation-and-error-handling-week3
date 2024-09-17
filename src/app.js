const express = require('express')
const cors = require("cors")
require('dotenv').config();

const app = express()

const corsOptions = {
    origin: 'frontend server',
    optionsSuccessStatus: 200
};

app.use(express.json());
app.use(cors(corsOptions))

//Routes (make sure that routes is under everything above)
const userRoutes = require('./routes/userRoutes')
app.use('/users', userRoutes)

module.exports = app
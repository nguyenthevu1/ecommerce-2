require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/user');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
    .connect(process.env.MONGO_URL, {})
    .then(() => {
        console.log('Connect successfully!');
    })
    .catch((error) => {
        console.log('Connect failure!');
    });

app.use('/api/auth', authRoute);
app.use('/api/user', userRoute);

app.listen(process.env.PORT || 5000, () => {
    console.log('Backend server is running!');
});

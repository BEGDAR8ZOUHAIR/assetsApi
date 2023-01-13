// const path = require('path');
const express = require("express"); // import express
const dotenv = require("dotenv").config(); // import dotenv
const colors = require("colors"); // import colors
const { errorHandler } = require("./middleware/errorMiddleware"); // custom error handler
const port = process.env.PORT || 6000; // set our port
const app = express();
const connectDB = require("./config/db"); // import db connection
const cors = require("cors"); // import cors

connectDB(); // connect to db
app.use(cors()); // enable cors
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/goals', require('./routes/goalRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

// Serve frontend 
// if (process.env.NODE_ENV === 'production')
// {
//     app.use(express.static(path.join(__dirname, '../frontend/build')));
//     app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '../' ,'frontend', 'build', 'index.html')));

// } else
// {
//     app.get('/', (req, res) =>
//     {
//         res.send('API is running...');
//     });
// }


app.use(errorHandler)
app.listen(port, () => console.log(`Server started on port ${port}`));

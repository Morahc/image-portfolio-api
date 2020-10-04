const express = require('express')
const connectDB = require('./config/db')
const dotenv = require('dotenv')
const cors = require('cors')
const fileUpload = require('express-fileupload')

const app = express()

// Config
dotenv.config({ path: "./config/config.env" });

// DB connection
connectDB().then(res => app.listen(process.env.PORT, console.log("server running")));


// Middlewares
app.use(express.static("public"));
app.use(cors())
app.use(fileUpload())

// Routes
const route = require('./routes/api/index')

app.use(route)

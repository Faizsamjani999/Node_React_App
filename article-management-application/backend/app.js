require("dotenv").config();
const express = require("express");
const port = process.env.port || 9999;
const path = require('path');
const app = express();
const connection = require("./config/db");
const multer = require("multer");
const cors = require("cors")
const articleRoutes = require('./routes/articleRoutes');

const upload = multer({ dest: './uploads/' });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: 'http://localhost:3000', // Allow requests from this origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow these HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'] // Allow these headers
}));

app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); // Serve static files
app.use('/api', articleRoutes);

app.listen(port,()=>{
    console.log("Server Started At -",port);
    connection();
})
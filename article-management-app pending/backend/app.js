require("dotenv").config();
const express = require("express");
const connection = require("./config/db");
const articleRoutes = require("./routes/articleRoutes");
const port = process.env.PORT || 9999;
const cors = require("cors");
const path = require("path");
const fs = require("fs");

const app = express();

app.use(cors());
app.use(express.json());

// Ensure uploads directory exists
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir);
}

// Serve static files from the 'uploads' folder
app.use('/uploads', express.static(uploadsDir));

// Use the article routes
app.use("/api", articleRoutes);

// Start server
app.listen(port, () => {
    console.log(`Server Started At - ${port}`);
    connection();
});

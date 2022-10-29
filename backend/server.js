const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
require("dotenv").config();
const cors = require("cors");

// DB
const connection = require("./database/db");

// Database connection
connection();

app.use(cors());

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

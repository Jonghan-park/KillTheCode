const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
require("dotenv").config();
const cors = require("cors");

//Import Routes
const projectRoute = require("./routes/project");
const meetingRoute = require("./routes/meetingRoutes");
const userRoute = require("./routes/userRoutes");

//DB
const connection = require("./database/db");

//Database connection
connection();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

//Routes
app.use("/projects", projectRoute);
app.use("/api/users", userRoute);
app.use("/meeting", meetingRoute);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



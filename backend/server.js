const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
require("dotenv").config();
const cors = require("cors");

//Import Routes
const projectRoute = require("./routes/project");
const meetingRoute = require("./routes/meetingRoutes");
const userRoute = require("./routes/userRoutes");
const chattingRoute = require("./routes/chattingRoutes");

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
app.use("/chatting", chattingRoute);

const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

//Socket server
const socket = require("socket.io");
const io = socket(server, {
  cors: {
    origin: "http://localhost:3000",
    credentials: true,
  },
});

io.on("connection", (socket) => {
  socket.on("sendMessage", data => {
    io.emit("getMessage", data);
  });
});

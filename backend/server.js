const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
require("dotenv").config();
const cors = require("cors");

//Import Routes
const projectRoute = require("./routes/projectRoutes");
const meetingRoute = require("./routes/meetingRoutes");
const userRoute = require("./routes/userRoutes");
const chattingRoute = require("./routes/chattingRoutes");
const scheduleRoute = require("./routes/scheduleRoutes");

const myAccountRoute = require("./routes/myaccountRoutes");
const noticeRoute = require("./routes/noticeRoutes");
const forgotPWRoute = require("./routes/forgotPWRoutes");

//DB
const connection = require("./database/db");

//Database connection
connection();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
/** send email engine for that need to npm install ejs */
app.set("view engine", "ejs");
//Routes
app.use("/projects", projectRoute);
app.use("/api/users", userRoute);
app.use("/meeting", meetingRoute);
app.use("/chatting", chattingRoute);
app.use("/schedule", scheduleRoute);
app.use("/notice", noticeRoute);
app.use("/myaccount", myAccountRoute);
app.use("/forgotPassword", forgotPWRoute);

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
  socket.on("sendMessage", (data) => {
    io.emit("getMessage", data);
  });
});

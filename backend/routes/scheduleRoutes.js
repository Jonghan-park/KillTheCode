const express = require("express");
const scheduleRouter = express.Router();

const{
    getAllSchedules,
    addSchedule,
    updateSchedule,


} = require("../controller/scheduleController");

scheduleRouter.get("/", getAllSchedules);
scheduleRouter.post("/add", addSchedule);
scheduleRouter.put("/update/:id", updateSchedule);

module.exports = scheduleRouter;
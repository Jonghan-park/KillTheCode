const express = require("express");
const scheduleRouter = express.Router();

const{
    getAllSchedules,
    addSchedule,
    updateSchedule,
    getById,
    deleteSchedule


} = require("../controller/scheduleController");

scheduleRouter.get("/", getAllSchedules);
scheduleRouter.post("/add", addSchedule);
scheduleRouter.put("/update/:id", updateSchedule);
scheduleRouter.get("/:id", getById);
scheduleRouter.delete("/:id", deleteSchedule);

module.exports = scheduleRouter;
const { default: mongoose } = require("mongoose");
const Schedule= require("../models/schedule");
const Project = require("../models/project");

// all get schedules
exports.getAllSchedules = async(req, res) => {
    let schedules
    try{
        schedules = await Schedule.find()
}catch(err){
    console.log(err);
}
return res.status(200).json({schedules});
}

// post schedule
exports.addSchedule = async(req, res) => { 
    const {fromYear,fromMonth, fromDate, toYear, toMonth, toDate, issue, color, project} = req.body;

   // find project 
    let existingProject;
    console.log(project)
    try{
        existingProject = await Project.findById(project);
    }catch(err){
    return console.log(err);
    }
    if(!existingProject){
        return res.status(404).json({message:"unable to find project by this ID"})
    }
    const schedule = new Schedule({
        fromYear,
        fromMonth, 
        fromDate, 
        toYear, 
        toMonth, 
        toDate, 
        issue, 
        color, 
        project
    });
    try{
        const scheduleSesstion = await mongoose.startSession();
        scheduleSesstion.startTransaction();
        await schedule.save();
    }catch(err){
        console.log(err);
         return res.status(500).json({message:err})
     }
     return res.status(201).json({schedule})
};

// update schedule
exports.updateSchedule = async(req, res) => {
    const {fromYear, fromMonth, fromDate, toYear, toMonth, toDate, issue, color} =req.body;
    const scheduleId = req.params.id;
    let schedule;
    try{
        schedule = await Schedule.findByIdAndUpdate(scheduleId,{
            fromYear,
            fromMonth, 
            fromDate, 
            toYear, 
            toMonth, 
            toDate, 
            issue, 
            color, 
        })
    }catch(err){
        return console.log(err)
    }
    if(!schedule){
        return res.status(500).json({messaage: "unable to update the meeting"})
    }
    return res.status(200).json({schedule});
}

exports.getById = async(req, res) => {
    const id = req.params.id;
    let schedule;
    try{
        schedule = await Schedule.findById(id);
    }catch(err){
        return console.log(err);
    }
    if(!schedule){
        return res.status(404).json({message: "no schedule found"})
    }
    return res.status(200).json({schedule});
}

exports.deleteSchedule = async(req, res) => {
    const id = req.params.id;

    let schedule;
    try{
        schedule = await Schedule.findByIdAndRemove(id);
    }catch(err){
        console.log(err)
    }
    if(!schedule){
        return res.status(500).json({message: "unable to delete"})
    }
    return res.status(200).json({message: "successfully delete"})
}
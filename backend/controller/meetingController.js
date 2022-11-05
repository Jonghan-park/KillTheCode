const { default: mongoose } = require("mongoose");
const Meeting= require("../models/meeting");
const Project = require("../models/project");


// getMeeting(get)-최근 프로젝트
// addMeeting(update)-최근 프로젝트 

//all get meeting
exports.getAllMeeting = async(req, res)=>{

    let lastProject;
    try{
       lastProject = await Project.find()
       
    }catch(err){
        console.log(err);
    }
    return res.status(200).json({lastProject});
 }

// post meeting
exports.addMeeting = async(req, res) => {
    const {meetingYear, meetingMonth, meetingDate, attendees, project} = req.body;

        // find project 
        let existingProject;
        try{
            existingProject = await Project.findById(project);
        }catch(err){
        return console.log(err);
        }
        if(!existingProject){
            return res.status(404).json({message:"unable to find project by this ID"})
        }
        const meeting = new Meeting({
            meetingYear,
            meetingMonth,
            meetingDate,
            attendees,
            project,
        });
        try {
            const session = await mongoose.startSession();
            session.startTransaction();
            await meeting.save();
        }catch(err){
           console.log(err);
            return res.status(500).json({message:err})
        }
        return res.status(201).json({meeting})
    };

    // update meeting
    exports.updateMeeting = async(req, res) =>{
        const {meetingYear, meetingMonth, meetingDate, attendees} = req.body;
        const meetingId = req.params.id;
        let meeting;
        try {
            meeting = await Meeting.findByIdAndUpdate(meetingId,{
            meetingYear, 
            meetingMonth, 
            meetingDate, 
            attendees
        })
        }catch(err){
            return console.log(err)
        }
        if(!meeting){
            return res.status(500).json({messaage: "unable to update the meeting"})
        }
        return res.status(200).json({meeting});
    }


    // get by ID 
    exports.getById = async(req, res)=>{
        const id = req.params.id;
        let meeting;
        try{
            meeting = await Meeting.findById(id);

        }catch(err){
            return console.log(err);
        }
        if(!meeting){
        return res.status(404).json({messaage: "no meeting found"})
    }
    return res.status(200).json({meeting});
}

// delete
exports.deleteMeeting = async(req, res)=>{
    const id = req.params.id;

    let meeting;
    try{
        meeting = await Meeting.findByIdAndRemove(id);
    }catch(err){
        console.log(err)
    }
    if(!meeting){
        return res.status(500).json({messaage: "unable to delete"})
    }
    return res.status(200).json({message: "successfully delete"});
}
    
    
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
    const {meetingYear, meetingMonth, meetingDate, attendees} = req.body;
    // const {project} = Project.findById(req.params.id);
    // let currentProject;    
    // currentProject = await Project.findById(req.params.id)
    // 최신 프로젝트인거 확인하거나 아니면 최신프로젝트랑 연관시켜야될듯

        const meeting = new Meeting({
            meetingYear,
            meetingMonth,
            meetingDate,
            attendees,
            // project,
        })
        try {
            await meeting.save();
        }catch(err){
            return console.log(err);
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
    
    
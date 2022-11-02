const Meeting= require("../models/meeting")
const Project = require("../models/project");


// getMeeting(get)-최근 프로젝트
// addMeeting(update)-최근 프로젝트 

//all get meeting
exports.getAllMeeting = async(req, res)=>{
    let meeting;
    try{
        meeting = await Meeting.find();
    }catch(err){
        console.log(err);
    }
    if(!meeting){
        return res.status(404).json({message: 'no meeting found'})
    }
    return res.status(200).json({meeting})
}


// post meeting
exports.addMeeting = async(req, res) => {
    const {meetingYear, meetingMonth, meetingDate, attendees} = req.body;
    const {project} = Project.findById(req.params.id);
    
    let currentProject;    
    try{
        currentProject = await Project.findById(req.params.id)
        // 최신 프로젝트인거 확인하거나 아니면 최신프로젝트랑 연관시켜야될듯
    }catch(err){
        return console.log(err)
    }
    if(!currentProject){
        return res.status(400).json({message:"can't find project by title"})
    }
    const meeting = new Meeting({
        meetingYear,
        meetingMonth,
        meetingDate,
        attendees,
        project
    });

    try{
        await meeting.save();
    }catch(err){
      return  console.log(err)
    }
    return res.status(201).json({meeting})

}
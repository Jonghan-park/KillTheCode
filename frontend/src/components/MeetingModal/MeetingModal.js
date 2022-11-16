import { useState } from "react";
import "./MeetingModal.css";
import axios from "axios";


const MeetingModal = ({
  project,
  initMeeting,
  meetingInfo,
  setShowMeetingModal,
  setMeetingInfo,
}) => {
  const [editing, setEditing] =
    useState(meetingInfo.dateInfo === "" ? false : true);

  const closeMeetingModal = () => {
    setShowMeetingModal(false);
    setMeetingInfo(initMeeting);
  };
  const onMeetingChange = (e) => {
    const { name, value } = e.target;
    setMeetingInfo({
      ...meetingInfo,
      [name]: value,
    })
  };
  console.log(meetingInfo)

  const divMeetingDate = meetingInfo.dateInfo;
  const finalMeetingDate = divMeetingDate.split('-');
  // console.log(`meeting date: ${finalMeetingDate[0]}`)
  // console.log(`meeting date: ${finalMeetingDate[1]}`)
  // console.log(`meeting date: ${finalMeetingDate[2]}`)
  console.log(project, typeof project)
  

  // -----
  const sendMeeting = async() =>{
      
    const res = await axios.post("http://localhost:5000/meeting/add", {
        meetingYear: finalMeetingDate[0], 
        meetingMonth: finalMeetingDate[1], 
        meetingDate: finalMeetingDate[2],
        attendees: meetingInfo.attendees,
        project
    }).catch(err => console.log(err));

    const data = await res.data;
    return data;
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(meetingInfo);
    sendMeeting().then(()=>closeMeetingModal())
    .then(data => console.log(data))
  }
  
  return ( 
    <div className="modalBackground" onClick={closeMeetingModal}>
      <div className="meetingModal"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <form onSubmit={handleSubmit}>
          <label htmlFor="dateInfo">Date</label>
          <input
            type="date"
            required
            name="dateInfo"
            id="dateInfo"
            value={meetingInfo.dateInfo}
            onChange={onMeetingChange}
          />
          <label htmlFor="attendees">Attendees</label>
          <input
            type="text"
            required
            name="attendees"
            id="attendees"
            value={meetingInfo.attendees}
            onChange={onMeetingChange}
          />
          <div className="modalBtns">
            {editing &&
              <button className="modalLeftBtn">
                Delete
              </button>            
            }
            <button className="modalRightBtn" onClick={closeMeetingModal}>
              Close
            </button>
            <button type="submit" className="modalRightBtn" onClick={()=>setEditing(!editing)} >
              {editing ? "Update" : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MeetingModal;



import { useState } from "react";
import "./MeetingModal.css";

const MeetingModal = ({
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
  return ( 
    <div className="modalBackground" onClick={closeMeetingModal}>
      <div className="meetingModal"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <form>
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
            <button type="submit" className="modalRightBtn">
              {editing ? "Update" : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MeetingModal;

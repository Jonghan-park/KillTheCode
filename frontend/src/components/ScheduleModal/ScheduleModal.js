import { useState } from "react";
import axios from "axios";
import "./ScheduleModal.css";

const ScheduleModal = ({
  project,
  initSchedule,
  scheduleInfo,
  setShowScheduleModal,
  setScheduleInfo,
}) => {
  const [editing, setEditing] =
    useState(scheduleInfo.fromDateInfo === "" ? false : true);

  const closeScheduleModal = () => {
    setShowScheduleModal(false);
    setScheduleInfo(initSchedule);
  };
  const onScheduleChange = (e) => {
    const { name, value } = e.target;
    setScheduleInfo({
      ...scheduleInfo,
      [name]: value,
    })
  };
// console.log(scheduleInfo.issue)

const fromDate = scheduleInfo.fromDateInfo;
const finalFromDate = fromDate.split('-');
const toDate = scheduleInfo.toDateInfo;
const finalToDate = toDate.split('-');
const issue = scheduleInfo.issue;
const color = scheduleInfo.color;

// console.log(project, typeof project)


const sendSchedule = async() => {
  const res = await axios.post("http://localhost:5000/schedule/add",{
    fromYear:finalFromDate[0],
    fromMonth: finalFromDate[1],
    fromDate:finalFromDate[2],
    toYear: finalToDate[0],
    toMonth:finalToDate[1],
    toDate:finalToDate[2],
    issue,
    color,
    project
  }).catch(err => console.log(err))

  const data = await res.data;
  console.log(data)
  return data;
}

const handleSubmit= (e) => {
  e.preventDefault();
  console.log(scheduleInfo);
  sendSchedule().then(()=>closeScheduleModal)
  .then(data => console.log(data))
}


  return ( 
    <div className="modalBackground" onClick={closeScheduleModal}>
      <div className="scheduleModal"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <form onSubmit = {handleSubmit}>
          <label htmlFor="fromDateInfo">From</label>
          <input
            type="date"
            required
            name="fromDateInfo"
            id="fromDateInfo"
            value={scheduleInfo.fromDateInfo}
            onChange={onScheduleChange}
          />
          <label htmlFor="toDateInfo">To</label>
          <input
            type="date"
            required
            name="toDateInfo"
            id="toDateInfo"
            value={scheduleInfo.toDateInfo}
            onChange={onScheduleChange}
          />
          <label htmlFor="issue">Issue</label>
          <input
            type="text"
            required
            name="issue"
            id="issue"
            value={scheduleInfo.issue}
            onChange={onScheduleChange}
          />
          <label htmlFor="color">Color</label>
          <input
            type="color"
            name="color"
            id="color"
            value={scheduleInfo.color}
            onChange={onScheduleChange}
          />
          <div className="modalBtns">
            {editing &&
              <button className="modalLeftBtn">
                Delete
              </button>            
            }
            <button className="modalRightBtn" onClick={closeScheduleModal}>
              Close
            </button>
            <button type="submit" className="modalRightBtn"onClick={()=>setEditing(!editing)}>
              {editing ? "Update" : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ScheduleModal;

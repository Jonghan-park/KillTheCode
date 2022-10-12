import { useState } from "react";
import "./ScheduleModal.css";

const ScheduleModal = ({
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
  return ( 
    <div className="modalBackground" onClick={closeScheduleModal}>
      <div className="scheduleModal"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <form>
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
            <button type="submit" className="modalRightBtn">
              {editing ? "Update" : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ScheduleModal;

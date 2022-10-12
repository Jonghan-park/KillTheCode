import "./MeetingModal.css";

const MeetingModal = ({
  dateInfo,
  attendees,
  setShowMeetingModal,
}) => {
  const closeMeetingModal = () => {
    setShowMeetingModal(false);
  };
  return ( 
    <div className="modalBackground" onClick={closeMeetingModal}>
      <div className="meetingModal"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        !!MeetingModal!!
        <button onClick={closeMeetingModal}>
          Close
        </button>
      </div>
    </div>
  );
};

export default MeetingModal;

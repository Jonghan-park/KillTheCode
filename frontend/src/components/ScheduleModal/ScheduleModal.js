import "./ScheduleModal.css";

const ScheduleModal = ({
  fromDateInfo,
  toDateInfo,
  issue,
  color,
  setShowScheduleModal,
}) => {
  const closeScheduleModal = () => {
    setShowScheduleModal(false);
  };
  return ( 
    <div className="modalBackground" onClick={closeScheduleModal}>
      <div className="scheduleModal"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        !!ScheduleModal!!
        <button onClick={closeScheduleModal}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ScheduleModal;

import { useCallback, useState } from "react";
import useCalendarPrint from "./useCalendarPrint";
import ScheduleModal from "../ScheduleModal/ScheduleModal";
import MeetingModal from "../MeetingModal/MeetingModal";
import "./Calendar.css";

const schedule = [
  {
    // from: "2022-09-05",
    // to: "2022-09-08",
    fromYear: 2022,
    fromMonth: 9,
    fromDate: 5,
    toYear: 2022,
    toMonth: 9,
    toDate: 8,
    issue: "Plan Project",
    color: "#EE7098",
  },
  {
    fromYear: 2022,
    fromMonth: 9,
    fromDate: 9,
    toYear: 2022,
    toMonth: 9,
    toDate: 13,
    issue: "Sketch Design",
    color: "#545BE3",
  },
  {
    fromYear: 2022,
    fromMonth: 9,
    fromDate: 14,
    toYear: 2022,
    toMonth: 9,
    toDate: 22,
    issue: "Develope Design",
    color: "#8932E3",
  },
  {
    fromYear: 2022,
    fromMonth: 9,
    fromDate: 23,
    toYear: 2022,
    toMonth: 10,
    toDate: 14,
    issue: "Coding Frontend",
    color: "#50B027",
  },
  {
    fromYear: 2022,
    fromMonth: 10,
    fromDate: 15,
    toYear: 2022,
    toMonth: 10,
    toDate: 19,
    issue: "Develop Frontend",
    color: "#1CCAED",
  },
];
const meeting = [
  {
    // date: "2022-09-08",
    meetingYear: 2022,
    meetingMonth: 9,
    meetingDate: 8,
    attendees: "Kai, Lauren, Elly",
  },
  {
    meetingYear: 2022,
    meetingMonth: 9,
    meetingDate: 14,
    attendees: "Joseph, Kai, Lauren, Elly",
  },
  {
    meetingYear: 2022,
    meetingMonth: 9,
    meetingDate: 23,
    attendees: "Joseph, Kai, Lauren, Elly",
  },
  {
    meetingYear: 2022,
    meetingMonth: 10,
    meetingDate: 15,
    attendees: "Joseph, Kai, Lauren, Elly, Jihoon",
  },
];

const Calendar = () => {
  const today = {
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
  };
  const months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
  const weeks = ["SUN", "MON", "TUE", "WED", "THUR", "FRI", "SAT"];
  const initSchedule = {
    fromDateInfo: "",
    toDateInfo: "",
    issue: "",
    color: "",
  };
  const initMeeting = {    
    dateInfo: "",
    attendees: "",
  };
  const [currentYear, setCurrentYear] = useState(today.year);
  const [currentMonth, setCurrentMonth] = useState(today.month);
  const [schedules, setSchedules] = useState(schedule);
  const [meetings, setMeetings] = useState(meeting);
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [showMeetingModal, setShowMeetingModal] = useState(false);
  const [scheduleInfo, setScheduleInfo] = useState(initSchedule);
  const [meetingInfo, setMeetingInfo] = useState(initMeeting);
  // The temporary state for the calendar based on a user information
  const [isUserAdmin, setIsUserAdmin] = useState(true);
  // Display the value returned by the useCalendarPrint hook
  const displayCalendar = useCalendarPrint({
    weeks,
    currentYear,
    currentMonth,
    schedules,
    meetings,
    isUserAdmin,
    setShowScheduleModal,
    setShowMeetingModal,
    setScheduleInfo,
    setMeetingInfo,
  });

  const openScheduleModal = () => {
    setShowScheduleModal(true);
  };
  const openMeetingModal = () => {
    setShowMeetingModal(true);
  };
  const prevMonth = useCallback(() => {
    if (currentMonth === 1) {
      setCurrentMonth(12);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  }, [currentMonth, currentYear]);
  const nextMonth = useCallback(() => {
    if (currentMonth === 12) {
      setCurrentMonth(1);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  }, [currentMonth, currentYear]);
  return (
    <div className="calendarContainer">
      <div className="calendarHeader">
        <p className="month">
          {months[currentMonth - 1]} {currentYear}
        </p>
        {isUserAdmin &&
          <>
            <button className="calendarButton" onClick={openScheduleModal}>
              Schedule
            </button>
            <button className="calendarButton" onClick={openMeetingModal}>
              Metting
            </button>
          </>
        }        
      </div>
      <div className="calendar">
        {weeks.map((week) => {
          return (
            <div key={week} className="calendarCell weeks">{week}</div>
          );
        })}
        {displayCalendar} {/* Display the value returned by the useCalendarPrint hook */}
      </div>
      <div className="calendarCtrl prevMonth" onClick={prevMonth}>&lt;</div>
      <div className="calendarCtrl nextMonth" onClick={nextMonth}>&gt;</div>
      {showScheduleModal && // When clicking "Schedule" btn or colored schedules in calendar cells
        <ScheduleModal
          initSchedule={initSchedule}
          scheduleInfo = {scheduleInfo}
          setShowScheduleModal={setShowScheduleModal}
          setScheduleInfo={setScheduleInfo}
        />
      }
      {showMeetingModal && // When clicking "Meeting" btn or yellow meetings in calendar cells
        <MeetingModal
          initMeeting={initMeeting}
          meetingInfo={meetingInfo}
          setShowMeetingModal={setShowMeetingModal}
          setMeetingInfo={setMeetingInfo}
        />
      }
    </div>
  );
};

export default Calendar;

import { useCallback, useEffect, useState } from "react";
import useCalendarPrint from "./useCalendarPrint";
import ScheduleModal from "../ScheduleModal/ScheduleModal";
import MeetingModal from "../MeetingModal/MeetingModal";
import "./Calendar.css";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";

const Calendar = ({projectId}) => {
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
  const [schedules, setSchedules] = useState([]);
  const [meetings, setMeetings] = useState([]);
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


// ---
// meeting

  useEffect(()=>{
    const getMeeting = async () => { 
      //all
     const res = await axios.get(`http://vast-island-14964.herokuapp.com/meeting/${projectId}`)
     .catch(err => console.log(err))
     const data =await res.data;
    //  console.log(data);  
     return data;
   }
    if(projectId){
      getMeeting()
      .then((data) => setMeetings(data))
    }
  },[projectId]);
  // console.log(meetings)


// ---schedule
useEffect(()=>{
  const getSchedule = async () => { 
    //all
   const res = await axios.get(`http://vast-island-14964.herokuapp.com/schedule/${projectId}`)
   .catch(err => console.log(err))
   
   const data =await res.data;
  //  console.log(data);   
   return data;
 }
  if(projectId){
    getSchedule()
    .then((data) => setSchedules(data))
  }
  console.log(schedules)
},[projectId]);
  // console.log(schedules)

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
        project = {projectId}
          initSchedule={initSchedule}
          scheduleInfo = {scheduleInfo}
          setShowScheduleModal={setShowScheduleModal}
          setScheduleInfo={setScheduleInfo}
        />
      }
      {showMeetingModal && // When clicking "Meeting" btn or yellow meetings in calendar cells
        <MeetingModal
        project = {projectId}
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

import { useCallback, useMemo, useState } from "react";
import "./Calendar.css";

const schedule = [
  {
    id: 1,
    // from: "2022-09-08",
    // to: "2022-09-13",
    fromYear: 2022,
    fromMonth: 9,
    fromDate: 8,
    toYear: 2022,
    toMonth: 9,
    toDate: 13,
    issue: "Sketch Design",
    color: "#545BE3",
  },
  {
    id: 2,
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
    id: 3,
    fromYear: 2022,
    fromMonth: 9,
    fromDate: 23,
    toYear: 2022,
    toMonth: 10,
    toDate: 15,
    issue: "Coding Frontend",
    color: "#50B027",
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
];

const Calendar = () => {
  const today = {
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    date: new Date().getDate(),
  };
  const months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
  const weeks = useMemo(() =>
    ["SUN", "MON", "TUE", "WED", "THUR", "FRI", "SAT"], []);
  const [currentYear, setCurrentYear] = useState(today.year);
  const [currentMonth, setCurrentMonth] = useState(today.month);
  const [schedules, setSchedules] = useState(schedule);
  const [meetings, setMeetings] = useState(meeting);

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
  const displayCalendar = useCallback(() => {
    const lastDate = new Date(currentYear, currentMonth, 0).getDate();
    const firstDay = new Date(currentYear, currentMonth - 1, 1).getDay();
    const lastDay = new Date(currentYear, currentMonth - 1, lastDate).getDay();    
    let calendarCells = [];

    for (const day of weeks) {
      if (weeks[firstDay] === day) {
        for (let i = 1; i <= lastDate; i++) {
          const nowDay = new Date(currentYear, currentMonth - 1, i).getDay();
          let scheduled = false;

          for (const schedule of schedules) {
            const fromDay = 
              new Date(currentYear, currentMonth - 1, schedule.fromDate).getDay();

            if (schedule.fromYear === currentYear &&
                schedule.fromMonth === currentMonth &&
                schedule.toMonth === schedule.fromMonth &&
                (i >= schedule.fromDate && i <= schedule.toDate)) {
              scheduled = true;
            } else if (schedule.fromYear === currentYear &&
                schedule.fromMonth === currentMonth &&
                schedule.toMonth !== schedule.fromMonth &&
                (i >= schedule.fromDate && i <= lastDate)) {
              scheduled = true;
            } else if (schedule.fromYear === currentYear &&
                schedule.toMonth === currentMonth &&
                schedule.toMonth !== schedule.fromMonth &&
                (i >= 1 && i <= schedule.toDate)) {
              scheduled = true;
            } else if (schedule.toYear === currentYear &&
                schedule.toMonth === currentMonth &&
                schedule.toMonth !== schedule.fromMonth &&
                (i >= 1 && i <= schedule.toDate)) {
              scheduled = true;
            }

            if (scheduled) {
              const issued =
                (schedule.fromDate === i && fromDay !== 6) ||
                (fromDay === 6 && nowDay === 0);

              calendarCells.push(
                <div key={i} className="calendarCell">
                  {i}
                  <div
                    className={
                      "schedule" +
                      (schedule.fromDate === i ? " startSchedule" : "") +
                      (schedule.toDate === i ? " endSchedule" : "") +
                      (issued ? " issue" : "")
                    }
                    style={{
                      backgroundColor: schedule.color,
                    }}
                  >
                    <span>
                      {issued && schedule.issue}
                    </span>
                  </div>
                </div>
              );

              break;
            }
          }

          if (!scheduled) {
            calendarCells.push(
              <div key={i} className="calendarCell">{i}</div>
            );
          }
        }

        break;
      } else {
        calendarCells.push(
          <div key={day} className="calendarCell"></div>
        );
      }
    }

    if (lastDay !== 6) {
      for (let i = lastDay + 1; i <= 6; i++) {
        calendarCells.push(
          <div key={i * 100} className="calendarCell"></div>
        );
      }
    }

    return calendarCells;
  }, [weeks, currentYear, currentMonth, schedules]);;
  return (
    <div className="calendarContainer">
      <div className="calendarHeader">
        <p className="month">{months[currentMonth - 1]} {currentYear}</p>
        <button className="calendarButton">Schedule</button>
        <button className="calendarButton">Metting</button>
      </div>
      <div className="calendar">
        {weeks.map((week) => {
          return (
            <div key={week} className="calendarCell weeks">{week}</div>
          );
        })}
        {displayCalendar()}
      </div>
      <div className="calendarCtrl prevMonth" onClick={prevMonth}>&lt;</div>
      <div className="calendarCtrl nextMonth" onClick={nextMonth}>&gt;</div>
    </div>
  );
};

export default Calendar;

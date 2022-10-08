import { useCallback, useMemo, useState } from "react";
import { Button } from "react-bootstrap";
import "./Calendar.css";

const Calendar = () => {
  const today = {
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    date: new Date().getDate(),
    day: new Date().getDay()
  };
  const months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
  const weeks = useMemo(() =>
    ["SUN", "MON", "TUE", "WED", "THUR", "FRI", "SAT"], []);
  const [currentYear, setCurrentYear] = useState(today.year);
  const [currentMonth, setCurrentMonth] = useState(today.month);
  const lastDate = new Date(currentYear, currentMonth, 0).getDate();

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
    const firstDay = new Date(currentYear, currentMonth - 1, 1).getDay();
    const lastDay = new Date(currentYear, currentMonth - 1, lastDate).getDay();    
    let calendarCells = [];

    for (const day of weeks) {
      if (weeks[firstDay] === day) {
        for (let i = 1; i <= lastDate; i++) {
          calendarCells.push(
            <div key={i} className="calendarCell">{i}</div>
          );
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
  }, [weeks, currentMonth, currentYear, lastDate]);
  return (
    <div className="calendarContainer">
      <div className="calendarHeader">
        <p className="month">{months[currentMonth - 1]}</p>
        <Button className="calendarButton">Schedule</Button>
        <Button className="calendarButton">Metting</Button>
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

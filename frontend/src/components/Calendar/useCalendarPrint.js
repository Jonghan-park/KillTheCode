import { useMemo } from "react";

const useCalendarPrint = ({
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
}) => {
  return useMemo(() => {
    // Last date of the current month (ex: 28, 30, 31, ect.)
    const lastDate = new Date(currentYear, currentMonth, 0).getDate();
    // First day of the week of the current month (ex: SUN, MON, TUE, ect.)
    const firstDay = new Date(currentYear, currentMonth - 1, 1).getDay();
    // Last day of the week of the current month (ex: SUN, MON, TUE, ect.)
    const lastDay = new Date(currentYear, currentMonth - 1, lastDate).getDay();   
    
    let calendarCells = [];

    for (const day of weeks) {
      if (weeks[firstDay] === day) {
        // Insert cells containing the numbers of dates of the current month
        for (let i = 1; i <= lastDate; i++) {
          // Check if there is a schedule on this date
          let scheduled = false;
          for (const schedule of schedules) {
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
              // Day of the week when the schedule starts
              const fromDay = 
                new Date(currentYear, currentMonth - 1, schedule.fromDate).getDay();
              // Day of the week of this date
              const nowDay = new Date(currentYear, currentMonth - 1, i).getDay();
              // Value to display an issue of this schedule
              // If the schedule starts on Saturday, the issue will be printed on Sunday
              const issued =
                (schedule.fromDate === i && fromDay !== 6) ||
                (fromDay === 6 && nowDay === 0);

              // Check if there is a meeting on this date
              let met = false;
              let attendees = "";
              for (const meeting of meetings) {
                if (meeting.meetingYear === currentYear &&
                    meeting.meetingMonth === currentMonth &&
                    meeting.meetingDate === i) {
                  met = true;
                  attendees = meeting.attendees;
                }
              }

              calendarCells.push(
                <div key={i} className="calendarCell">
                  {i}
                  <div
                    className={
                      "schedule" +
                      (schedule.fromDate === i ? " startSchedule" : "") +
                      (schedule.toDate === i ? " endSchedule" : "") +
                      (issued ? " issue" : "") +
                      (isUserAdmin ? " canClick" : "")
                    }
                    style={{
                      backgroundColor: schedule.color,
                    }}
                    onClick={
                      isUserAdmin && (() => {
                        const scheduleInfo = {
                          fromDateInfo:
                            schedule.fromYear + "-" +
                            (schedule.fromMonth < 10 ? "0" + schedule.fromMonth : schedule.fromMonth) + "-" +
                            (schedule.fromDate < 10 ? "0" + schedule.fromDate : schedule.fromDate),
                          toDateInfo:
                            schedule.toYear + "-" +
                            (schedule.toMonth < 10 ? "0" + schedule.toMonth : schedule.toMonth) + "-" +
                            (schedule.toDate < 10 ? "0" + schedule.toDate : schedule.toDate),
                          issue: schedule.issue,
                          color: schedule.color,
                        };
                        setShowScheduleModal(true);
                        setScheduleInfo(scheduleInfo);
                      })}
                  >
                    {issued && <span>{schedule.issue}</span>}
                  </div>
                  {met &&
                    <div
                      className={
                        "meeting" +
                        (isUserAdmin ? " canClick" : "")
                      }
                      onClick={isUserAdmin && (() => {
                        const meetingInfo = {
                          dateInfo:
                            currentYear + "-" +
                            (currentMonth < 10 ? "0" + currentMonth : currentMonth) + "-" +
                            (i < 10 ? "0" + i : i),
                          attendees: attendees,
                        };
                        setShowMeetingModal(true);
                        setMeetingInfo(meetingInfo);
                      })}
                    >
                      Meeting
                    </div>
                  }
                </div>
              );

              // If matching a schedule and this date, end searching schedules and move to the next date
              break;
            }
          }

          if (!scheduled) {
            calendarCells.push(
              <div key={i} className="calendarCell">{i}</div>
            );
          }
        }

        // If finishing printing numbers for all dates, end the day of the weeks cycle
        break;
      } else {
        // Insert blank cells before meeting the day of the week of the 1st of the current month
        calendarCells.push(
          <div key={day} className="calendarCell"></div>
        );
      }
    }

    // Insert blank cells from the last date of the current month to Saturday
    if (lastDay !== 6) {
      for (let i = lastDay + 1; i <= 6; i++) {
        calendarCells.push(
          <div key={i * 100} className="calendarCell"></div>
        );
      }
    }

    return calendarCells;
  }, [
    weeks,
    currentYear,
    currentMonth,
    schedules,
    meetings,
    isUserAdmin,
    setShowScheduleModal,
    setShowMeetingModal,
    setScheduleInfo,
    setMeetingInfo
  ]);
};

export default useCalendarPrint;

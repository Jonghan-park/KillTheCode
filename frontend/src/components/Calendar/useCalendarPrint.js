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
}) => {
  return useMemo(() => {
    const openScheduleModal = () => {
      setShowScheduleModal(true);
    };
    const openMeetingModal = () => {
      setShowMeetingModal(true);
    };
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
                    onClick={isUserAdmin && openScheduleModal}
                  >
                    {issued && <span>{schedule.issue}</span>}
                  </div>
                  {met &&
                    <div
                      className={
                        "meeting" +
                        (isUserAdmin ? " canClick" : "")
                      }
                      onClick={isUserAdmin && openMeetingModal}
                    >
                      Meeting
                    </div>
                  }
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
  }, [
    weeks,
    currentYear,
    currentMonth,
    schedules,
    meetings,
    isUserAdmin,
    setShowScheduleModal,
    setShowMeetingModal
  ]);
};

export default useCalendarPrint;

import React from 'react';
import Calendar from 'react-calendar';
import './Calendar.scss';
import { connect } from 'react-redux';
import { updateUser } from '../../actions/user-actions';

// Provide prop onCalendarClick="null" for MyCalendar component
// to prevent the save of a clicked date to redux and prevent the
// tile color change from white to red.
// Component expects one obligatory prop 'bookedDates'=[]
const MyCalendar = ({ bookedDates, onCalendarClick, updateUser }) => {
  const handleClickDay = value => {
    let newlyBookedDates = [];
    if (bookedDates.includes(value.toISOString())) {
      newlyBookedDates = bookedDates.filter(bookedDate => {
        return bookedDate !== value.toISOString();
      });
    } else {
      newlyBookedDates = [...bookedDates, value.toISOString()];
    }
    updateUser()({
      bookedDates: newlyBookedDates,
    });
  };

  return (
    <Calendar
      value={new Date()}
      calendarType="ISO 8601"
      onClickDay={onCalendarClick === 'null' ? null : handleClickDay}
      tileClassName={({ date, view }) =>
        view === 'month' &&
        bookedDates.some(
          disabledDate =>
            date.getFullYear() === new Date(disabledDate).getFullYear() &&
            date.getMonth() === new Date(disabledDate).getMonth() &&
            date.getDate() === new Date(disabledDate).getDate(),
        )
          ? 'booked-date'
          : null
      }
    />
  );
};

const mapDispatchToProps = dispatch => ({
  updateUser: updateUser(dispatch),
});

export default connect(
  null,
  mapDispatchToProps,
)(MyCalendar);

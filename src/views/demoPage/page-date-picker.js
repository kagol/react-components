import React, { Component } from 'react';
import DatePicker from '../../components/DatePicker';

class PageDatePicker extends Component {
  state = {
    isPopoverOpen: false, selectedDate: null
  }
  render() {
    const isPopoverOpen = this.state.isPopoverOpen;
    const selectedDate = this.state.selectedDate;
    return (
      <div className="page-date-picker">
        <DatePicker onChange={(selectedDate) => {
          console.log('selectedDate:', selectedDate);
          console.log('selectedDate format:', selectedDate.format('YYYY-MM-DD'));
        }} />
      </div>
    )
  }
}

export default PageDatePicker;

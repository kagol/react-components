import React, { Component } from 'react';
import Popover, { ArrowContainer } from 'react-tiny-popover';
import moment from 'moment';
import DatePicker from './components/DatePicker';
import './App.css';

class App extends Component {
  state = {
    isPopoverOpen: false, selectedDate: null
  }
  render() {
    const isPopoverOpen = this.state.isPopoverOpen;
    const selectedDate = this.state.selectedDate;
    return (
      <div className="App">
        {/* <DatePicker onChange={(selectedDate) => {
          console.log('selectedDate:', selectedDate);
          console.log('selectedDate format:', selectedDate.format('YYYY-MM-DD'));
        }} /> */}
        <Popover
            isOpen={isPopoverOpen}
            position={'bottom'}
            padding={10}
            disableReposition 
            onClickOutside={() => this.setState({ isPopoverOpen: false })}
            content={({ position, nudgedLeft, nudgedTop, targetRect, popoverRect }) => (
              <div className="calendar-container">
                <DatePicker onChange={(selectedDate) => {
                  // console.log('selectedDate:', selectedDate);
                  // console.log('selectedDate format:', selectedDate.format('YYYY-MM-DD'));
                  this.setState({isPopoverOpen: false, selectedDate: selectedDate});
                }} selectedDate={selectedDate} />
              </div>
            )}
        >
            <div style={{width: 280}} onClick={() => this.setState({ isPopoverOpen: !isPopoverOpen })}>
                Click me! current date: { selectedDate && selectedDate.format('YYYY-MM-DD')}
            </div>
        </Popover>
      </div>
    )
  }
}

export default App;

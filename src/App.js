import React, { Component } from 'react';
import DatePicker from './components/DatePicker';

class App extends Component {
  render() {
    return (
      <div className="App">
        <DatePicker onChange={(selectedDate) => {
          console.log('selectedDate:', selectedDate);
          console.log('selectedDate format:', selectedDate.format('YYYY-MM-DD'));
        }} />
      </div>
    )
  }
}

export default App;

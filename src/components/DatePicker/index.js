import React, { Component } from 'react';
import moment from 'moment';
import { getCalendarArr, WEEK_ARR, DEFAULT_FORMAT } from './utils';
import './style.css';

class DatePicker extends Component {
    state = {
        monthCount: 0
    }
    renderCalendarTable(month) {
        const date = moment().format(DEFAULT_FORMAT);
        const calendarTable = getCalendarArr(date, month);
        return (
            <table>
                <thead>
                    <tr>
                        {WEEK_ARR.map((item, key) => <th key={key}>{item}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {calendarTable.map((week, weekKey) => <tr key={weekKey}>{week.map((day, dayKey) => 
                        <td key={dayKey}>
                            <span title={day.format(DEFAULT_FORMAT)} onClick={() => {
                                console.log('current date format:', calendarTable[weekKey][dayKey].format(DEFAULT_FORMAT));
                                console.log('current date:', calendarTable[weekKey][dayKey]);
                            }}>
                                {day.format('D')}
                            </span>
                        </td>
                    )}</tr>)}
                </tbody>
            </table>
        );
    }
    renderCalendarHeader() {
        const currentMonthCount = this.state.monthCount;
        const date = moment().add(currentMonthCount, 'months');
        const year = date.format('YYYY') + '年';
        const month = date.format('M') + '月';
        return (
            <div>
                <span onClick={() => {this.setState({monthCount: currentMonthCount-1})}}>上一月</span>
                {year} {month}
                <span onClick={() => {this.setState({monthCount: currentMonthCount+1})}}>下一月</span>
            </div>
        );
    }
    render() {
        return (
            <div>
                {this.renderCalendarHeader()}
                {this.renderCalendarTable(this.state.monthCount)}
            </div>
        )
    }
}

export default DatePicker;

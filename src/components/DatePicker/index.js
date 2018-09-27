import React, { Component } from 'react';
import moment from 'moment';
import { getCalendarArr, WEEK_ARR, DEFAULT_FORMAT } from './utils';
import './style.css';

class DatePicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            monthCount: 0, yearCount: 0, selectedDate: props.selectedDate || null
        }
    }
    renderCalendarTable(monthCount, yearCount, showOtherMonth) {
        const { onChange } = this.props;
        const date = moment().format(DEFAULT_FORMAT);
        const calendarTable = getCalendarArr(date, monthCount, yearCount, showOtherMonth);
        return (
            <table className="calendar-table">
                <thead>
                    <tr>
                        {WEEK_ARR.map((item, key) => <th key={key}>{item}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {calendarTable.map((week, weekKey) => <tr key={weekKey}>{week.map((day, dayKey) => 
                        {
                            const formatDay = day && day.format(DEFAULT_FORMAT);
                            const selectedDate = this.state.selectedDate;
                            const isToday = moment(date).isSame(formatDay);
                            const isSelectedDate = moment(selectedDate).isSame(formatDay);
                            const isOtherMonth =( moment().add(yearCount, 'years').add(monthCount, 'months') ).format('M') !== (day && day.format('M'));
                            let className = '';
                            if(isToday) className += ' calendar-today';
                            if(isSelectedDate) className += ' calendar-selected-date';
                            if(isOtherMonth) className += ' calendar-other-month';
                            return (<td key={dayKey} className={className}>
                                <div className="calendar-date" title={formatDay} onClick={() => {
                                    const selectedDate = calendarTable[weekKey][dayKey];
                                    this.setState({selectedDate: selectedDate.format(DEFAULT_FORMAT)})
                                    onChange(selectedDate);
                                }}>
                                    {day && day.format('D')}
                                </div>
                            </td>)
                        }
                    )}</tr>)}
                </tbody>
            </table>
        );
    }
    renderCalendarHeader() {
        const currentMonthCount = this.state.monthCount;
        const currentYearCount = this.state.yearCount;
        const date = moment().add(currentYearCount, 'years').add(currentMonthCount, 'months');
        const year = date.format('YYYY');// + '年';
        const month = date.format('M');// + '月';
        // console.log('date:', date);
        return (
            <div className="calendar-operation-bar">
                <div className="block-last">
                    <span className="btn-last-year" title="上一年" onClick={() => {this.setState({yearCount: currentYearCount-1})}}></span>
                    <span className="btn-last-month" title="上一月" onClick={() => {this.setState({monthCount: currentMonthCount-1})}}></span>
                </div>
                <div className="block-current">
                    <span onClick={() => {console.log('year:', year);}}>{year + '年'} </span>
                    <span onClick={() => {console.log('month:', month);}}>{month + '月'}</span>
                </div>
                <div className="block-next">
                    <span className="btn-next-month" title="下一月" onClick={() => {this.setState({monthCount: currentMonthCount+1})}}></span>
                    <span className="btn-next-year" title="下一年" onClick={() => {this.setState({yearCount: currentYearCount+1})}}></span>
                </div>
            </div>
        );
    }
    render() {
        const monthCount = this.state.monthCount;
        const yearCount = this.state.yearCount;
        return (
            <div className="calendar-panel">
                <div className="calendar-header">{this.renderCalendarHeader()}</div>
                <div className="calendar-body">{this.renderCalendarTable(monthCount, yearCount)}</div>
                {/* <div className="calendar-body">{this.renderCalendarTable(monthCount, yearCount, false)}</div> */}
            </div>
        )
    }
}

export default DatePicker;

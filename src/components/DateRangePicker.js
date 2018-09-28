import React, { Component } from 'react';
import DatePicker from 'antd/lib/date-picker';
import './DateRangePicker.css';

const { RangePicker } = DatePicker;

export default class DateRangePicker extends Component {
    render() {
        return (
            <RangePicker {...this.props} />
        );
    }
}
